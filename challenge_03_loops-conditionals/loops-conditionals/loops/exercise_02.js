/*
    1. Create a for loop that runs from 1-100 
    2. Every 10 loops, print out: Checkpoint! and the loop number
    3. On loop 50 print out ONLY: Half way there!
    4. On the final loop (100) print out ONLY: You made it!
    5. AFTER the loop is done, print out: All, done!

    You should see this printed out when run:
    Checkpoint! 10
    Checkpoint! 20
    Checkpoint! 30
    Checkpoint! 40
    Half way there!
    Checkpoint! 60
    Checkpoint! 70
    Checkpoint! 80
    Checkpoint! 90
    You made it!
    All, done!
*/

function isCheckpoint(counter) {
  return counter % 10 === 0 && counter !== 50 && counter !== 100;
}

function printMessage(counter) {
  if (counter === 50) {
    console.log("Halfway there!");
  }
  if (counter === 100) {
    console.log("You made it!");
  }
  if (isCheckpoint(counter) && counter !== 50 && counter !== 100) {
    console.log("Checkpoint!", counter);
  }
}

function runLoopWithCheckpoints(iterations) {
  for (let counter = 1; counter <= iterations; counter++) {
    printMessage(counter);
  }

  console.log("All done!");
}

runLoopWithCheckpoints(100);
