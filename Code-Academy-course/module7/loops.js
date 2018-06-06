//Exercise 1

var vacationSpots = ['Brasil','Alemania','Islandia'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// Exercise 2

var vacationSpots = ['Paris', 'New York', 'Barcelona'];

for (var i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

// Exercise 3

var vacationSpots = ['Paris', 'New York', 'Barcelona'];

for (var i = vacationSpots.length-1; i >= 0 ; i--) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

//Exercise 4

var myPlaces = [1, 2, 3];
var friendPlaces = [1, 2, 3];

for (var i = 0; i < myPlaces.length; i++) {
    console.log(myPlaces[i]);
  
  for (var j = 0; j < friendPlaces.length; j++) {
        console.log(friendPlaces[j]);
    
    if (myPlaces[i] === friendPlaces[j]) {
    			console.log('Match: ' + myPlaces[i]);
				}
    }
}

var myPlaces = ['Brasil','Alemania' , 'Islandia'];
var friendPlaces = ['Francia','Alemania','Japan'];

for (var i = 0; i< myPlaces.length; i++){
  console.log(myPlaces[i]);
  for (var j = 0; j<friendPlaces.length; j++){
    if (myPlaces[i]=== friendPlaces[j]){
    console.log(friendPlaces[j]);
    
  }}
}



//Exercise 5

var cards = ['Diamond', 'Spade', 'Heart', 'Club'];

var currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);

  var randomNumber = Math.floor(Math.random() * 4);

  currentCard = cards[randomNumber];
}

console.log('Found a Spade!');

