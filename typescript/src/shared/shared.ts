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
]).then(([result1, result2]) => {
    const instance = result2.instance as unknown as { exports: Exports };
    console.log(instance.exports.doIt());  // prints 42
});