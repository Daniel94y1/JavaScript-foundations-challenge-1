/*
    Create a program that starts with a number variable.
    The program will return the variable is even or odd.

    Change the variable to test it works for different cases.
    Print result.

    HINT: modulus operator ( % ) is your friend
*/
function checkNumberType(number) {
  if (number % 2 === 0) {
    console.log("The number is even.");
  }
  if (number % 2 !== 0) {
    console.log("The number is odd.");
  }
}

const myNumber = 45;
checkNumberType(myNumber);
