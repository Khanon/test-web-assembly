// BROKEN TUTORIAL EXAMPLE

var importObject = {
    imports: {
      imported_func: function(arg) {
        console.log("aki ARG:")
        console.log(arg);
      }
    }
  };

interface Exports {
    exported_func: () => string
}

fetch('simple.wasm').then(response =>
    response.arrayBuffer()
).then(bytes =>
    WebAssembly.instantiate(bytes, importObject)
).then(result => {
    console.log("aki RESULT:")
    console.log(result)

    // ** 1
    // 'exported_func' not working in simple.wasm IT IS BROKEN
    const instance = result.instance as unknown as { exports: Exports };
    console.log(instance.exports.exported_func());

    // ** 2
    // result.instance.exports.exported_func()

    // ** 3
    // const main = result.instance.exports.main as CallableFunction
    // console.log(main().toString());
});