/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/
true && console.log("moo");
false && console.log("moo moo?")
true || console.log("hello friend");
false || console.log("bye friend");

// Explanation:

// true && console.log("moo");
    // This line logs "moo" to the console. It works this way because the && (AND) operator checks if both operands are truthy.
    // In this case, true is truthy, so it proceeds to the right operand, which is console.log("moo"), and it logs "moo" to the console.
    // The result of the console.log statement doesn't affect the overall result of the && operation.

// false && console.log("moo moo?");
    // This line does nothing and doesn't log anything. It works this way because the && operator checks if the left operand is falsy.
    // In this case, false is falsy, so it short-circuits the evaluation and doesn't proceed to the right operand.

// true || console.log("hello friend");
    // This line doesn't log anything. It works this way because the || (OR) operator checks if the left operand is truthy.
    // In this case, true is truthy, so it short-circuits the evaluation and doesn't proceed to the right operand.

// false || console.log("bye friend");
    // This line logs "bye friend" to the console. It works this way because the || operator checks if the left operand is falsy.
    // In this case, false is falsy, so it proceeds to the right operand, which is console.log("bye friend"), and it logs "bye friend" to the console. 
    // The result of the console.log statement doesn't affect the overall result of the || operation. 