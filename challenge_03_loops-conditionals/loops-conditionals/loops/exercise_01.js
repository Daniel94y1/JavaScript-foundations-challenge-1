/*
    1. Create a for loop that loops while index is less or equal than 10.
    2. Each loop:
        * create a new random number between 1 and 10 (hint: check documentation regarding Math.floor and Math.random methods)
        * evaluate if random number is greater than 5
        * if it is equal or greater than 5 print "Logged In!"
        * if it is less than 5 print "Logged Out!"
*/
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkLoginStatus() {
  const randomNumber = generateRandomNumber(1, 10);

  if (randomNumber >= 5) {
    console.log("Logged In!");
  }
  if (randomNumber < 5) {
    console.log("Logged Out!");
  }
}

function runLoginLoop(iterations) {
  for (let index = 1; index <= iterations; index++) {
    checkLoginStatus();
  }

  console.log("Loop completed.");
}

runLoginLoop(10);
