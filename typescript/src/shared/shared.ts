interface Exports {
    doIt: () => number
}

var importObj = {
    js: {
      memory : new WebAssembly.Memory({ initial: 1 }),
      table : new WebAssembly.Table({ initial: 1, element: "anyfunc" })
    }
};

Promise.all([
    WebAssembly.instantiateStreaming(fetch('shared0.wasm'), importObj),
    WebAssembly.instantiateStreaming(fetch('shared1.wasm'), importObj)
]).then(([source1, source2]) => {
    const instance = source2.instance as unknown as { exports: Exports };
    console.log(instance.exports.doIt());  // prints 42
});