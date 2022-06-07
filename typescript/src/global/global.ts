interface Exports {
    getGlobal: () => number,
    incGlobal: () => void
}

const global = new WebAssembly.Global({value:'i32', mutable:true}, 0);

WebAssembly.instantiateStreaming(fetch('global.wasm'), { js: { global } })
.then(({instance}) => {
    const inst = instance as unknown as { exports: Exports };

    console.log("getting initial value from wasm", inst.exports.getGlobal(), 0);
    global.value = 42;
    console.log("getting JS-updated value from wasm", inst.exports.getGlobal(), 42);
    inst.exports.incGlobal();
    console.log("getting wasm-updated value from JS", global.value, 43);
});

export {};