# SCOPE
## Global Scope
Scope is a big idea in programming, so let's start at a high level.

Scope refers to where in a program a variable can be accessed. The idea is that some variables are unable to be accessed everywhere within a program.

Think of it like a an apartment building. Everyone who lives in the apartment building is under the global scope of the building and its manager. So, if there are rats in the shared laundry room, everyone has access to the laundry machines, and the rats.

If you write a variable outside of a function in JavaScript, it's in the global scope and can be used by any other part of the program, just like the laundry room can be used by everyone in an apartment.

Let's practice this by making some global variables.

1.
Write two variables, one named laundryRoom set equal to 'Basement', the other named mailRoom set equal to 'Room 1A'.

2.
Below these variables, use console.log to print both variables to the console, like this:

console.log('Laundry: ' + laundryRoom +  ', Mail: ' + mailRoom);
