# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
JavaScript is a programming or scripting language that allows you to implement complex functions on web pages.
```

## About values

### What is a primitive value?

```
It is data that is not an object and has no methods. There are 6 different types of primitive values: string, number, bigint, boolean, undefined and symbol.
```

### Which are primitive values? Explain them with at least one example for primitive.

```
string:

let integerNumber = 70;
let floatingPointNumber = 8.40;

number:

let text = "Hello, cats!";

null:

let null = null;

boolean:

let true = true;
let false = false;

undefined:

let undefinedValue;

symbol:

const symbol = Symbol("house");
```

## About variables

### What is a variable in JS?

```
They are the way programmers name a value so they can reuse it, update it or simply record it, they can also be used to save any type of data in JavaScript.
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```
var variable= "Cat"
let variable= "Cat"
const variable= "Cat"

Not recommended:
variable= "Cat"
```

### Which are the most used var naming conventions in JS?

```
It is recommended to use camelCase for variables, constants, functions and methods. And PascalCase for classes.
```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```
Equality (==): 

3==3

Inequality (!=):

7!=3

Strict Equality (===):

3===3

Strict Inequality (!==):

7!==3

Greater Than (>):

5>3

Less Than (<):

5<6

Greater Than or Equal To (>=):

5>=5

Less Than or Equal To (<=):

7<=9
```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```
Logical AND (&&): This operator returns true if both operands are true:

true && true;   // True
true && false;  // False

Logical OR (||): This operator returns true if at least one of the operands is true.

true || false;     // True
false || false;    // False

Logical NOT (!): This operator inverts the value of its operand. If the operand is true, it returns false, and if the operand is false, it returns true.

!true;  // False
!false; // True

```
