/**
 * Update Loop test
 *
 * Test performance while browser tab selected:
 *  - Javascript setInterval gets a delta < 4 per frame
 *  - Wasm interval gets a delta > 6 per frame
 *
 * Test performance while browser tab unselected:
 *  - Javascript continue calling setInterval function with a higher delta (1000 aprox)
 *  - Wasm stop calling interval funtion
 */


import Module from './timer.mjs';

console.log("Hello emscripten from Javascript")

/**
 * Wasm module interface.
 * Only functions exported on emcc compilation are added to the module.
 * See -sEXPORTED_RUNTIME_METHODS flag on CMAKE_CXX_FLAGS variables.
 */
interface WasmModule {
    addFunction: (func: Function, signature: string) => string
    cwrap: <T>(ident: string, returnType: string, argumentTypes: string[]) => T
    getValue: (ptr: number, type: string) => number
}
let wasmModule: WasmModule

/**
 * Create Wasm module (returns a Promise), then start the app
 */
 Module().then((module: WasmModule) => {
    // Wasm module object
    wasmModule = module
    console.log("Wasm module:", module)

    // Wrap exported functions from C++
    registerFunctionPointer_updateTimer = module.cwrap<(id: string) => void>('registerFunctionPointer_updateTimer', 'void', ['string'])

    // Export function to wasm module allowing using it from C++ code.
    const importedFunctionId = module.addFunction(updateTimer, 'vi')
    registerFunctionPointer_updateTimer(importedFunctionId.toString())

    setInterval(updateTimerTs, 0)
}).catch(error => {
    console.log("Error creating Wasm module:", error)
})

/**
 * Wrapped functions imported from C++
 */
 let registerFunctionPointer_updateTimer: (id: string) => void

/**
 * Update timer value from milliseconds in HTML
 */
 const updateTimer = (delta: number): void => {
    // if (delta > 100)
        console.log("aki delta C++:", delta)
}

let lastTime = performance.now()
const updateTimerTs = (): void => {
    const currentTime = performance.now()
    const delta = currentTime - lastTime
    // if (delta > 100)
        console.log("aki delta TS :", delta)
    lastTime = currentTime
}
