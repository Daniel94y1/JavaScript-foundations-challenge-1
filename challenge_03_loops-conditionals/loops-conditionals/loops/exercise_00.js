/*
    1. Create a for loop that will print out all the even numbers between 10 and 40.
    
    2. Create a for loop that will print out all the odd numbers between 10 and 40.
*/

function printEvenNumbers(start, end) {
  console.log(`Even numbers between ${start} and ${end}:`);
  for (let counter = start; counter <= end; counter++) {
    if (counter % 2 === 0) {
      console.log(counter);
    }
  }
}

function printOddNumbers(start, end) {
  console.log(`Odd numbers between ${start} and ${end}:`);
  for (let counter = start; counter <= end; counter++) {
    if (counter % 2 !== 0) {
      console.log(counter);
    }
  }
}

printEvenNumbers(10, 40);
printOddNumbers(10, 40);
