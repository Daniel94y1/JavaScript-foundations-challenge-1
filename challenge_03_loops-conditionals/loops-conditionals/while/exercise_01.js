/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/
function printNumbers(start, end, isEven) {
  let number = start;
  const label = isEven ? "Even" : "Odd";

  console.log(`${label} numbers between ${start} and ${end}:`);

  while (number <= end) {
    if ((isEven && number % 2 === 0) || (!isEven && number % 2 !== 0)) {
      console.log(number);
    }
    number++;
  }
}

printNumbers(10, 40, true);
printNumbers(10, 40, false);
