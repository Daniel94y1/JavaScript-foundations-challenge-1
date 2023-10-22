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
console.log(getTypeOf("Hello cats!")); 
console.log(getTypeOf(70)); 
console.log(getTypeOf(true)); 
console.log(getTypeOf(null)); 
console.log(getTypeOf(undefined)); 

//Explanation
// The function takes the value as a parameter and returns the type of the collected value.
//The problem is that when it collects the null value, it returns the value type object.
// This happens because null is internally represented with a pointer that points to the special memory address that represents "absence of value."
//This address was interpreted as the type of object, which is why this function returns "object"