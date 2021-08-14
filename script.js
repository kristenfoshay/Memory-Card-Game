///I PLAN TO GO BACK TO THIS PROJECT AND ADD MORE DECORATION AND FEATURES. A SCORE CARD AND ADD ANIMATIONS SUCH AS CARD FLIPS/////

const gameContainer = document.getElementById('game');


const COLORS = [ 'red', 'blue', 'green', 'orange', 'purple', 'red', 'blue', 'green', 'orange', 'purple' ];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
	let counter = array.length;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}
///////////////////////////////////////////////////////////////////////
function randomId() {
	const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
	return uint32.toString(16);
}
////////CITATION FOR THE ABOVE SNIPPET OF CODE LISTED AT THE BOTTOM/////

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
	for (let color of colorArray) {
		// create a new div
		const newDiv = document.createElement('div');

		// give it a class attribute for the value we are looping over
		newDiv.classList.add(color);
		newDiv.setAttribute('id', randomId());
		

		// call a function handleCardClick when a div is clicked on
		newDiv.addEventListener('click', handleCardClick);

		// append the div to the element with an id of game
		gameContainer.append(newDiv);
	}
}
let array = [];
let array1 = [];
// TODO: Implement this function!
function handleCardClick(event) {
	// you can use event.target to see which element was clicked

	console.log('you just clicked', event.target);

	let firstCard = event.target.classList;
	event.target.style.backgroundColor = firstCard;
	array.push(event.target);
	if (array1.length === 10){
		console.log('GAME OVER!');
		location.reload();
	}
	else if (array.length === 2 && array[0].className !== array[1].className) {
		for (let item of array) {
			item.style.backgroundColor = '#1A2126';
      item.style.backgroundColor = item.classList;
      setTimeout(function (){item.style.backgroundColor = '#1A2126'}, 500);
		}
		array.pop();
		array.pop();
		console.log(array);
	}
	else if (array.length === 2 && array[0].id === array[1].id) {
		console.log(array);
		alert('PLEASE PICK A SECOND CARD');
		array.pop();
	}
	else if (array.length === 2 && array[0].className === array[1].className) {
		array1.push(array[0]);
		array1.push(array[1]);
		array.pop();
		array.pop();
		console.log(array1);
		console.log(array);
	}
}

// when the DOM loads
createDivsForColors(shuffledColors);

//***************************************************************************************/
//*    Title: Generate Unique Id in the Browser Without a Library
//*    Author: Michał Załęcki
//*    Date: Jan 5, 2020 
//*    Code version: Unknown
//*    Availability: https://levelup.gitconnected.com/generate-unique-id-in-the-browser-without-a-library-50618cdc3cb1
//*
//***************************************************************************************/
