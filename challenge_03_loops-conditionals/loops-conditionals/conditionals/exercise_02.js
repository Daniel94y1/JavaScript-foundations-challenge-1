/* 
   Spot the bug 🐞
   Should print: "Most places consider you an adult."... but it doesn't, why?

   Add a comment explaining what is happenning and how to fix it
*/
const age = 20;

if (age < 3) {
  console.log("You're just a baby!");
} else if (age >= 3) {
  console.log("You are in elementary school, kid.");
} else if (age >= 13) {
  console.log("Nice, you're a teenager!");
} else if (age >= 18) {
  console.log("Most places consider you an adult.");
} else {
  console.log("What? How did this happen!?");
}
/* 

The error occurs because of a problem in the logic of the conditions. You can see in the code that all the conditions are met.
Here is an example of how to solve it:
*/

function classifyAge(age1) {
  if (age1 >= 18) {
    console.log("Most places consider you an adult.");
  }
  if (age1 >= 13 && age1 < 18) {
    console.log("Nice, you're a teenager!");
  }
  if (age1 >= 3 && age1 < 13) {
    console.log("You are in elementary school, kid.");
  }
  if (age1 < 3) {
    console.log("You're just a baby!");
  }
  if (
    !(
      age1 < 3 ||
      (age1 >= 3 && age1 < 13) ||
      (age1 >= 13 && age1 < 18) ||
      age1 >= 18
    )
  ) {
    console.log("What? How did this happen!?");
  }
}

const age1 = 15;
classifyAge(age1);
