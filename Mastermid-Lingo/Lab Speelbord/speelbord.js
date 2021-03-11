const wordInput = document.getElementById("Word");
const letterInput = document.getElementById("Letter");
const item = document.getElementsByClassName("grid-item");
/*const form = document.getElementById("myForm");*/
//volgorde opschrijven letter uit woord halen en dan op de juiste positie neerzetten

/*checken op welke positie de ingevoerde letter van het woord staat en dan die positie in de innerhtml veranderen(charAt)
en dan die onthouden zodat je de volgende letter ook kan invoeren*/
function check() {
	//if in functie check length of input
	console.log(letterInput);
	console.log(wordInput);
	var word = wordInput.value.toLowerCase();
	var letter = letterInput.value.toLowerCase();
	console.log(letter);
	if (word.includes(letter) == true) {
		if (word.charAt(0) == letter){
			item[0].innerHTML = letter;
		}  
		if (word.charAt(1) == letter) {
			item[1].innerHTML = letter;
		}  
		if (word.charAt(2) == letter) {
			item[2].innerHTML = letter;
		}  
		if (word.charAt(3) == letter) {
			item[3].innerHTML = letter;
		}  
		if (word.charAt(4) == letter) {
			item[4].innerHTML = letter;
		}
		// item[0].innerHTML = letter;
	} else {
		alert('This letter is not included in your chosen word!');
	}
}