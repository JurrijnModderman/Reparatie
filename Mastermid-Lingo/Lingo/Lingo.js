const wordInput = document.getElementById("Word");
const letterInput = document.getElementById("Letter");
const item = document.getElementsByClassName("grid-item");
const randomWordId = document.getElementById("randomWord");
const randomWord = words[Math.floor(Math.random() * words.length)];

console.log(randomWord);
randomWordId.innerHTML = randomWord.charAt(0);

function check() {
	var word = wordInput.value.toLowerCase();
	var letter = letterInput.value.toLowerCase();
	console.log(letter);
	if (word.length == 5) {
		for (index = 0; index <= 4; index++) {
			item[index].innerHTML = letter.charAt(index);
			//for loop om de letters van het ingevoerde woord te vergelijken met het te raden woord
			for (letterIndex = 0; letterIndex <= 4; letterIndex++) {
				if (letter.charAt(index) == word.charAt(letterIndex)) {
					if (word.charAt(index) == letter.charAt(index)) {
		 				item[index].style.backgroundColor = 'green';
		 			} else {
		 				item[index].style.backgroundColor = 'yellow';
		 			}
				}
			}
		}
	} else {
		alert('Input need to be a 5 letter word!');
	}
}