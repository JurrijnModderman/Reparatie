const wordInput = document.getElementById("Letter");
const item = document.getElementsByClassName("grid-item");
const randomWordId = document.getElementById("randomWord");
const guessesId = document.getElementById("guesses");
//
const randomWordIndex = Math.floor(Math.random() * words.length);
const randomWord = words[randomWordIndex];
var guesses = 5;

console.log(randomWord);
randomWordId.innerHTML = randomWord.charAt(0);

function check() {
	guesses--;
	guessesId.innerHTML = 'Guesses over: ' + guesses;
	console.log(guesses);
	if (guesses == 0) {
		alert('Your guesses are over!')
	}
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
}