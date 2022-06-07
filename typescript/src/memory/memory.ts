var memory = new WebAssembly.Memory({initial:10, maximum:100});

interface Exports {
    accumulate: (arg1: number, arg2: number) => string
}

WebAssembly.instantiateStreaming(fetch('memory.wasm'), { js: { mem: memory } })
.then(result => {
    console.log("aki RESULT:")
    console.log(result)

    var i32 = new Uint32Array(memory.buffer);
    for (var i = 0; i < 10; i++) {
      i32[i] = i;
    }
    const instance = result.instance as unknown as { exports: Exports };
    var sum = instance.exports.accumulate(0, 10);
    console.log(sum);
});