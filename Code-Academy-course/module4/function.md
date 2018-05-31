# FUNCTIONS
## Introduction to Functions
A function is a block of code designed to perform a task.

Functions are like recipes. They take data or variables, perform a set of tasks on them, and then return the result. The beauty of functions is that they allow us to write a chunk of code once, then we can reuse it over and over without writing the same code over and over.

Take a look at this code:

var calculatorOn = false;

function pressPowerButton() {
  if (calculatorOn) {
    console.log('Calculator turning off.');
    calculatorOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorOn = true;
  }
}

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.
This code turns the calculator on if it is currently off, and turns it off if the calculator is currently on.

See if you can figure out how this code works. In the next exercise, we'll walk through it line by line.

## Functions
How does this code work?

var calculatorOn = false;

function pressPowerButton() {
  if (calculatorOn) {
    console.log('Calculator turning off.');
    calculatorOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorOn = true;
  }
}

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.
On line 1, we have a variable named calculatorOn set to false. Our program starts with the calculator in the off position.
On line 3, there's a function named pressPowerButton. Functions follow this syntax:

• They begin with the JavaScript keyword function.

• After function comes the name of the function. pressPowerButton is the name of the function. Notice there are no spaces in the name and each new word is capitalized. This is a convention in the JavaScript community called camelCase.

• After the function's name, comes parentheses (). We'll learn about these in the next exercise.

• Finally, the function has a block of code it executes between the curly braces {}.

Inside the function is an if/else statement.

On the last few lines, we make the function run by writing pressPowerButton(). This term for this is calling the function. We call it with pressPowerButton(), and it runs all the code in the block of the function.
We executed the code in the block of the function twice without having to write it twice. Functions can make code reusable!
1.
Imagine you work at a pizza restaurant and you want to write a JavaScript program to take orders so you don't have to write them out by hand. You can write a function to perform this task!

Start by writing a function named takeOrder. Inside of its block, use console.log to print 'Order: pizza'.

2.
Under the function, let's take an order.

Call the takeOrder function on the last line.


3.
Nice work! Now let's make our program list what topping is on each pizza.

