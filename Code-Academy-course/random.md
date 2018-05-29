# INTRODUCTION TO JAVASCRIPT
## Random
As it turns out, JavaScript has some tricks up its sleeve to make our lives easier.

JavaScript has built in functions, which help us do everyday things. We'll learn more about functions later in the course, so don't worry about understanding what they are right now.

Sometimes it's necessary to generate a random number within a program. We can do that with this code:

Math.random();
This code will return a random number between 0 and 1. JavaScript will generate a random number for us with this code.

To generate a random number between 0 and 50, we could multiply this result by 50, like so:

Math.random() * 50;
The problem with this is that the answer will most likely be a decimal. Luckily, JavaScript has our back with another built in function called Math.floor. Math.floor will take a decimal number, and round down to the nearest whole number. It is used like this:

Math.floor(Math.random() * 50);
In this case:

Math.random will generate a random number between 0 and 1.
We then multiplied that number by 50, so now we have a number between 0 and 50.
Then, Math.floor will round the number down to the nearest whole number.
Let's utilize these two methods to generate a random number between 0 and 100.

1.
Inside of a console.log, create a random number with Math.random, then multiply it by 100.

If you run the program few times, you'll see random numbers in the console.



2.
Now, utilize Math.floor to make the output a whole number.

Inside the console.log you wrote in the last step, put Math.random() * 100 inside the parentheses of Math.floor.



3.
Run the program a few times to see random numbers between 0 and 100.

Math.random() is a function that returns us a random value each time. Later in the course, we will use this to function to simulate a decision from the computer.

