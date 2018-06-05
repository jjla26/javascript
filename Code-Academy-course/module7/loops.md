# LOOPS
## Loops
One of a computer's greatest abilities is to repeat a task over and over so we don't have to. Loops let us tell the computer to loop over a block of code so that we don't have to write out the same process over and over.

Loops are especially helpful when we have an array where we'd like to do something to each item in the array, like logging each item to the console.

There are two kinds of loops we will learn in this lesson:

for loops, which let us loop a block of code a known amount of times.

while loops, which let us loop a block of code an unknown amount of times.

## Looping by hand
Before we jump into writing a loop, let's write the result of a loop, so that we can better understand how loops work.

1.
Write an array and set it equal to a variable named vacationSpots. Inside of this array, list three places you'd like to visit.

2.
Next, console.log each item in vacationSpots on a separate line. To do this, list out each item using property access.


3.
Nice work, that wasn't too hard, but imagine if our vacation list had 100 places on it. This would be an extremely tedious task!

Let's make this easier with a for loop.

## for loops
Instead of writing out the same code over and over, let’s make the computer loop through our array for us. We can do this with for loops.

The syntax looks like this:

var animals = ["Grizzly Bear", "Sloth", "Sea Lion"];

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Output:
// Grizzly Bear
// Sloth
// Sea Lion
Since this syntax is a little complicated, let's break it into 4 parts:

Within the for loop's parentheses, the start condition is var i = 0, which means the loop will start counting at 0.

The stop condition is i < animals.length, which means the loop will run as long as i is less than the length of the animals array. When i is greater than the length of the animals array, the loop will stop looping.

The iterator is i++. This means that each loop, i will have 1 added to it.

And finally, the code block is inside the { ... }. The block will run each loop, until the loop stops.

The secret to loops is that i, the variable we created inside the for loop's parentheses, is always equal to a number. To be more clear, the first loop, i will equal 0, the second loop, i will equal 1, and the third loop, i will equal 2.

This makes it possible to write animals[0], animals[1], animals[2] programmatically instead of by hand. We can write a for loop, and replace the hard coded number with the variable i, like this: animals[i].

1.
Let's replace your current code with a loop.

Write a for loop that loops through your vacationSpots array.

Inside the block of the for loop, use console.log to print each item in the vacationSpots array.


2.
Way to go! Now, add more to each item. Inside the code block, add some text to each item, like this:

console.log('I would love to visit ' + vacationSpots[i]);

## for loop backwards
If we can make a for loop run forwards through an array, can we make it run backwards through it? Of course!

We can make out loop run backwards by modifying the start, stop, and iterator conditions.

To do this, we'll need to edit the code between the for loop's parentheses:

The start condition should set i to the length of the array.

The stop condition should end when i is 0.

The iterator should subtract 1 each time, which is done with i--.

Instructions
1.
We need to make three changes to our for loop:

Edit the start condition (var i = 0), to set i equal to the length of the vacationSpots array.

Then, set the stop condition ( i < vacationSpots.length) to stop when i is greater than or equal to 0.

Finally, change i++ to i-- to subtract 1 from i each loop.

2.
Nice work! Except we printed 'I would love to visit undefined'. Why did this happen?

It's because the length of vacationSpots is 3 and vacationSpots has items in its array at positions 0, 1, and 2.

Since JavaScript starts from 0, make the start condition the length of the vacationSpots array, minus 1.


3.
Nice work! Remember, all for loops have three conditions, start, stop, and iterate, and we can edit all three!