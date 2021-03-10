const word = document.getElementById("Word");
const letter = document.getElementById("Letter");
const item = document.getElementsByClassName("grid-item");

function check() {
	if (letter < word) {
		item[0].innerHTML = "2";
	}
}