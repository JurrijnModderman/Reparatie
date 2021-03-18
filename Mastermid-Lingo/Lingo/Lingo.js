//aanmaak constanten en variable
const wordInput = document.getElementById("Letter");
var item = document.getElementsByClassName("grid-item");
const randomWordId = document.getElementById("randomWord");
const guessesId = document.getElementById("guesses");
const beginText = document.getElementById("beginText");
const button = document.getElementById("button");
const yourGuess = document.getElementById("yourGuess");
const letter = document.getElementById("Letter");
const grid = document.getElementById("grid");
var randomWord = '';
var guesses = '';
//start functie aanroep, die wordt aangeroepen als de pagina geopend wordt
Start();
//start functie om de hoofdpagina te creeeren
function Start() {
	Empty();
	beginText.innerHTML = 'Welcome to Lingo!' + '<br>' + 'You get the first letter of a 5 letter word that you need to guess! You have 5 guesses. If your answer is right, you will get another word! Else, you come back on this page!' + '<br>' + 'Good Luck!!!';
	letter.style.display = 'none';
	grid.style.display = 'none';
	button.value = 'Start';
	button.onclick = LoadScene;
}
//empty functie om alle 'gebruikte' elementen weer leeg te gooien
function Empty() {
	for (gridItem = 0; gridItem <=4; gridItem++) {
		console.log(gridItem);
		console.log(item/*.value*/);
		item[gridItem].innerHTML = gridItem+1;
		item[gridItem].style.backgroundColor = 'white';
	}
	guesses = 5;
	guessesId.innerHTML = '';
	randomWordId.innerHTML = '';
	yourGuess.innerHTML = '';
	letter.value = '';
}
//loadScene functie om een randomword te genereren en daarvan de eerste letter te tonen op het scherm en de rest van die pagina te creeeren
function LoadScene() {
	Empty();
	var randomWordIndex = Math.floor(Math.random() * words.length);
	randomWord = words[randomWordIndex];
	console.log(randomWord);
	letter.style.display = 'block';
	grid.style.display = 'inherit';
	beginText.innerHTML = 'First letter of the 5 letter word you need to guess:';
	randomWordId.innerHTML = randomWord.charAt(0).toUpperCase();
	yourGuess.innerHTML = 'Your guess:';
	button.value = 'Check';
	button.onclick = Check;
}
//check functie om het ingvoerde woord te vergelijken met het te raden woord
function Check() {
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
		Start();
	}
	if (word == randomWord) {
		const good = ['G', 'O', 'O', 'D', '!'];
		for (i = 0; i <=4; i++) {
			item[i].innerHTML = good[i];
		}
		button.value = 'Next';
		button.onclick = LoadScene;
	}
}