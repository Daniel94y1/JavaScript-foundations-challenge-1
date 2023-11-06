/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/
let evenNumber = 0;
console.log("Even numbers between 10 and 40:");
while (evenNumber <= 40) {
  if (evenNumber >= 10 && evenNumber % 2 === 0) {
    console.log(evenNumber);
  }
  evenNumber++;
}

let oddNumber = 0;
console.log("Odd numbers between 10 and 40:");
while (oddNumber <= 40) {
  if (oddNumber >= 11 && oddNumber % 2 !== 0) {
    console.log(oddNumber);
  }
  oddNumber++;
}
