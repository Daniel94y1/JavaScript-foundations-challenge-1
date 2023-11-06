/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/

console.log("Even numbers between 10 and 40:");
for (let counter = 10; counter <= 40; counter++) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
}

console.log("Even numbers between 10 and 40:");
for (let counter = 10; counter <= 40; counter++) {
  if (counter % 2 !== 0) {
    console.log(counter);
  }
}
