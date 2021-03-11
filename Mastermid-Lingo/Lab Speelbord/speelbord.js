const word = document.getElementById("Word");
const letter = document.getElementById("Letter");
const item = document.getElementsByClassName("grid-item");
const form = document.getElementById("myForm");

function check() {
	console.log(letter);
	item[0].innerHTML = letter.value;
}