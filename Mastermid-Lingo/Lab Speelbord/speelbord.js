const wordInput = document.getElementById("Word");
const letterInput = document.getElementById("Letter");
const item = document.getElementsByClassName("grid-item");
/*const form = document.getElementById("myForm");*/
//volgorde opschrijven letter uit woord halen en dan op de juiste positie neerzetten
function check() {
	console.log(letterInput);
	console.log(wordInput);
	var word = wordInput.value;
	var letter = letterInput.value;
	console.log(letter);
	if (word.includes(letter) == true) {
		item[0].innerHTML = letter;
	} else {
		alert('This letter is not included in your chosen word!');
	}
}