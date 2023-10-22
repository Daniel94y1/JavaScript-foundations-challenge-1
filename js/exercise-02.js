/* 
    1. Declare a variable using let with any name you like, but without a value.
    2. On a separate line, assign the variable the String: "Moo!"
    3. Log out this variable to the terminal using console.log
    
    Repeat the above steps but try using a const variable. Comment this new part of code and explain what is happening.
*/


//Declare variable
let sound;

// Inicialitze variable
sound = "Moo!";

// Output variable
console.log("Sound:", sound);


// Declare variable
// const sound;

// Inicialitze variale
// // sound = "Moo!"; 

//Output variable
//console.log("Sound:", sound);

// Explanation:
// It gives an error since you have to declare and initialize a const variable at the same time.
// it cannot be done separately, since the const variable's value is not updated.

//Solution:

const soundConst="Moo!";
console.log("Sound:", soundConst);