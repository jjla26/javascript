# INTRODUCTION TO JAVASCRIPT
## Math Operators II
Now let's generate a space fact while we learn a brand new operator called – drum roll please – the modulus.

The idea behind the modulus is to show you the remainder after you divide a number.

So, if you divide 13 / 5, 5 goes into 13 two times, and there will be 3 remaining. A modulus, denoted by a %, would take 13 % 5 and return the remainder 3.

How on Earth is this useful?

Let's ask a question a modulus can solve: What will the moon phase be one year from today?

1.
Let's say it's a full moon tonight, and we want to know what the moon will look like one year from today. We know from the moon phase image to the right that the moon circles the Earth every 27 days, so let's start by dividing 365 by 27.

Remember to put your calculations inside console.log to print them to the screen.



2.
That gives us a number (13), followed by a decimal(.518...).

To figure out what phase the moon will be in a year, we need to know how many extra days the moon will rotate around the earth before the end of the year. We need the decimal we just found displayed as remaining days.

Use the modulus operator to find the remaining days, then run your code.


3.
Now we know how many days into the moon's phase it will be in exactly one year.

We can now figure out, based on the moon phase image, what the moon phase will be 365 days from today. If it's a full moon today, a year from now it will be a new moon.