interface Exports {
    tbl: WebAssembly.Table
}

WebAssembly.instantiateStreaming(fetch('table.wasm'))
.then(source => {
    const instance = source.instance as unknown as { exports: Exports };
    var tbl = instance.exports.tbl;
    console.log(tbl.get(0)());  // 13
    console.log(tbl.get(1)());  // 42
});