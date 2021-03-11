const wordInput = document.getElementById("Word");
const letterInput = document.getElementById("Letter");
const item = document.getElementsByClassName("grid-item");
/*const form = document.getElementById("myForm");*/
//volgorde opschrijven letter uit woord halen en dan op de juiste positie neerzetten

/*checken op welke positie de ingevoerde letter van het woord staat en dan die positie in de innerhtml veranderen(charAt)
en dan die onthouden zodat je de volgende letter ook kan invoeren*/
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