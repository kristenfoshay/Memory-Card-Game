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

function randomId() {
	const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
	return uint32.toString(16);
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
	for (let color of colorArray) {
		// create a new div
		const newDiv = document.createElement('div');
		const frontFace = document.createElement('div');
		const backFace = document.createElement('div');
		let newColor = newDiv.className;
		newDiv.style.position = "relative";
		newDiv.style.backgroundColor = "aqua";
		frontFace.className = "frontFace";
		frontFace.style.position = "absolute";
        frontFace.style.width = "100%";
		frontFace.style.height = "200px";
		frontFace.style.margin = "10px";
		frontFace.style.display = "inline-block";
		backFace.className = "backFace";
		backFace.style.position = "absolute";
		backFace.style.width = "100%";
		backFace.style.height = "200px";
		backFace.style.margin = "10px";
		backFace.style.display = "inline-block";
		backFace.style.backgroundColor = newColor;


		// give it a class attribute for the value we are looping over
		newDiv.classList.add(color);
		newDiv.setAttribute('id', randomId());
		console.log(newDiv.id);

		// call a function handleCardClick when a div is clicked on
		newDiv.addEventListener('click', handleCardClick);

		// append the div to the element with an id of game
		gameContainer.append(newDiv);
		newDiv.append(frontFace);
		newDiv.append(backFace);

	}
}
//let array = [];
//let array1 = [];
// TODO: Implement this function!
//function handleCardClick(event) {
	// you can use event.target to see which element was clicked
    //let backFace = event.target.firstChild;
	//console.log(backFace);
	//console.log('you just clicked', event.target);

	//let firstCard = event.target.classList;
	//backFace.style.backgroundColor = firstCard;
	//console.log(event.target.style.backgroundColor);
	//array.push(event.target);
	//console.log(array[0].className);
	//console.log(array);
	//if (array.length === 2 && array[0].className !== array[1].className) {
		//for (let item of array) {
			//item.style.backgroundColor = 'aqua';
      //item.style.backgroundColor = item.classList;
      //console.log(item.classList);
      //item.style.backgroundColor = 'aqua';
      //setTimeout(function (){item.style.backgroundColor = 'aqua'}, 500);
		//}
		//array.pop();
		//array.pop();
		//console.log(array);
	//}
	//else if (array.length === 2 && array[0].id === array[1].id) {
		//console.log(array);
		//alert('PLEASE PICK A SECOND CARD');
		//array.pop();
	//}
	//else if (array.length === 2 && array[0].className === array[1].className) {
		//array1.push(array[0]);
		//array1.push(array[1]);
		//array.pop();
		//array.pop();
		//console.log(array1);
		//console.log(array);
	//}
//}

// when the DOM loads
createDivsForColors(shuffledColors);