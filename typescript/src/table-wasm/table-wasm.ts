interface Exports {
    callByIndex: (index:number) => number
}

WebAssembly.instantiateStreaming(fetch('table-wasm.wasm'))
  .then(obj => {
    const instance = obj.instance as unknown as { exports: Exports };
    console.log(instance.exports.callByIndex(0)); // returns 42
    console.log(instance.exports.callByIndex(1)); // returns 13
    console.log(instance.exports.callByIndex(2)); // returns an error, because there is no index position 2 in the table
  });