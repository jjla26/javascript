// exercise 1

var harryPotterFan = false;
if (harryPotterFan){
  console.log("Mischief managed.")
}else{
  console.log("I lead a muggle's life")
}

// exercise 2
  
var hungerLevel = 10;
if (hungerLevel > 7)
  console.log("Time to eat!");
else
  console.log("Let's eat later.")
  
 //Ecercise 3  
  
  var moonPhase = "full";
if (moonPhase === "full")
  console.log("Howwwwlll!!")
else
  console.log("I swear I am not a werewolf...")
  
  //Exercise 4
  
  var moonPhase = 'mostly full';

if (moonPhase === 'full') {
  console.log('Howwwlll!!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

// Exercise 5

var moonPhase = 'full';
var foggyNight = false;

if (moonPhase === 'full' || foggyNight) {
  console.log('Howwwlll!!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}