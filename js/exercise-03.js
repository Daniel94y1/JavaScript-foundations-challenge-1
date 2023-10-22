/* 
    1. Define function 'getTypeOf', which receives a value as paramenter and returns the type of this value
        Use typeof to ckech the types for each of the main 5 primitive types (string, number, boolean, null, undefined)
    2. Log the result of any function call.
*/

//Declare function
function getTypeOf(value) {
    return typeof value;
}

//Output function
console.log(getTypeOf("Hello, World!")); // Devuelve: string
console.log(getTypeOf(42)); // Devuelve: number
console.log(getTypeOf(true)); // Devuelve: boolean
console.log(getTypeOf(null)); // Devuelve: object (¡esto es un error en JavaScript!)
console.log(getTypeOf(undefined)); // Devuelve: undefined