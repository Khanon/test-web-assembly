interface Exports {
    writeHi: () => void
}

var memory = new WebAssembly.Memory({initial:1});

var importObject = { console: { log: consoleLogString }, js: { mem: memory } };

WebAssembly.instantiateStreaming(fetch('logger2.wasm'), importObject)
  .then(obj => {
    const instance = obj.instance as unknown as { exports: Exports };
    instance.exports.writeHi();
});

function consoleLogString(offset, length) {
    var bytes = new Uint8Array(memory.buffer, offset, length);
    var string = new TextDecoder('utf8').decode(bytes);
    console.log(string);
 }