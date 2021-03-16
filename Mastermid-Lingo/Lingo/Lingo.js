const wordInput = document.getElementById("Letter");
const item = document.getElementsByClassName("grid-item");
const randomWordId = document.getElementById("randomWord");
const randomWord = words[Math.floor(Math.random() * words.length)];

console.log(randomWord);
randomWordId.innerHTML = randomWord.charAt(0);

function check() {
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