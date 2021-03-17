const wordInput = document.getElementById("Letter");
var item = document.getElementsByClassName("grid-item");
const randomWordId = document.getElementById("randomWord");
const guessesId = document.getElementById("guesses");
const beginText = document.getElementById("beginText");
const button = document.getElementById("button");
const yourGuess = document.getElementById("yourGuess");
const letter = document.getElementById("Letter");
const grid = document.getElementById("grid");
//
var randomWordIndex = '';
var randomWord = '';
var guesses = '';
start();
function start() {
	empty();
	beginText.innerHTML = 'Welcome to Lingo!' + '<br>' + 'You get the first letter of a 5 letter word that u need to guess!';
	letter.style.display = 'none';
	grid.style.display = 'none';
	
	button.value = 'Start';
	button.onclick = loadScene;
}

function empty() {for (gridItem = 0; gridItem <=4; gridItem++) {
		item[gridItem].innerHTML = gridItem+1;
		item[gridItem].style.backgroundColor = 'white';
	}
	guesses = 5;
	guessesId.innerHTML = '';
	randomWordId.innerHTML = '';
	yourGuess.innerHTML = '';
	letter.value = '';
}

function loadScene() {
	empty();
	randomWordIndex = Math.floor(Math.random() * words.length);
	randomWord = words[randomWordIndex];
	console.log(randomWord);
	letter.style.display = 'block';
	grid.style.display = 'inherit';
	beginText.innerHTML = 'First letter of the 5 letter word u need to guess:';
	randomWordId.innerHTML = randomWord.charAt(0);
	yourGuess.innerHTML = 'Your guess:';
	button.value = 'Check';
	button.onclick = check;
}

function check() {
	guesses--;
	guessesId.innerHTML = 'Guesses over: ' + guesses;
	console.log(guesses);
	var word = wordInput.value.toLowerCase();
	console.log(word);
	if (randomWord.length == 5) {
		for (index = 0; index <= 4; index++) {
			item[index].innerHTML = word.charAt(index);
			//for loop om de letters van het ingevoerde woord te vergelijken met het te raden woord
			for (letterIndex = 0; letterIndex <= 4; letterIndex++) {
				if (word.charAt(index) == randomWord.charAt(letterIndex)) {
					if (randomWord.charAt(index) == word.charAt(index)) {
		 				item[index].style.backgroundColor = 'green';
		 				if (word == randomWord) {
		 					loadScene();
		 				}
		 				break;
		 			} else {
		 				item[index].style.backgroundColor = 'yellow';
		 				break;
		 			}
				} else {
					item[index].style.backgroundColor = 'white';
				}
			}
		}
	} else {
		alert('Input need to be a 5 letter word!');
	}
	if (guesses <= 0) {
		alert('Your guesses are over!');
		start();
	}
}