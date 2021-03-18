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
button.onclick = start;
start();
//start functie om de hoofdpagina te creeeren
function start() {
	empty(1);
	beginText.innerHTML = 'Welcome to Lingo!' + '<br>' + 'You get the first letter of a 5 letter word that you need to guess! You have 5 guesses. If your answer is right, you will get another word! Else, you come back on this page!' + '<br>' + 'Good Luck!!!';
	button.value = 'Start';
	button.onclick = loadScene;
}
//empty functie om alle 'gebruikte' elementen weer leeg te gooien
function empty(hide) {
	for (gridItem = 0; gridItem <=4; gridItem++) {
		item[gridItem].innerHTML = gridItem+1;
		item[gridItem].style.backgroundColor = 'white';
	}
	guesses = 5;
	guessesId.innerHTML = '';
	randomWordId.innerHTML = '';
	yourGuess.innerHTML = '';
	letter.value = '';
	if (hide != 2) {
		letter.classList.remove("showinput");
		letter.classList.add("hideinput");
		grid.classList.remove("showgrid");
		grid.classList.add("hidegrid");
	} else {
		letter.classList.remove("hideinput");
		letter.classList.add("showinput");
		grid.classList.remove("hidegrid");
		grid.classList.add("showgrid");
	}
}
//loadScene functie om een randomword te genereren en daarvan de eerste letter te tonen op het scherm en de rest van die pagina te creeeren
function loadScene() {
	empty(2);
	var randomWordIndex = Math.floor(Math.random() * words.length);
	randomWord = words[randomWordIndex];
	console.log(randomWord);
	beginText.innerHTML = 'First letter of the 5 letter word you need to guess:';
	randomWordId.innerHTML = randomWord.charAt(0).toUpperCase();
	yourGuess.innerHTML = 'Your guess:';
	button.value = 'Check';
	button.onclick = check;
}
//check functie om het ingvoerde woord te vergelijken met het te raden woord
function check() {
	guesses--;
	guessesId.innerHTML = 'Guesses over: ' + guesses;
	var word = wordInput.value.toLowerCase();
	
	if (letter.value.length != 5) {
		alert('Input need to be a 5 letter word!');
		loadScene();
		return;
	}

	for (index = 0; index <= 4; index++) {
		item[index].innerHTML = word.charAt(index);
		//for loop om de letters van het ingevoerde woord te vergelijken met het te raden woord
		for (letterIndex = 0; letterIndex <= 4; letterIndex++) {
			if (word.charAt(index) != randomWord.charAt(letterIndex)) {
				item[index].style.backgroundColor = 'white';
			} else if (randomWord.charAt(index) == word.charAt(index)) {
	 				item[index].style.backgroundColor = 'green';
	 				break;
	 		} else {
	 			item[index].style.backgroundColor = 'yellow';
	 			break;
	 		}
		}
	}

	if (guesses < 0) {
		alert('Your guesses are over!');
		start();
	}
	if (word == randomWord) {
		const good = ['G', 'O', 'O', 'D', '!'];
		for (i = 0; i <=4; i++) {
			item[i].innerHTML = good[i];
		}
		button.value = 'Next';
		button.onclick = loadScene;
	}
}