const wordInput = document.getElementById("Word");
const letterInput = document.getElementById("Letter");
const item = document.getElementsByClassName("grid-item");
/*const form = document.getElementById("myForm");*/
//volgorde opschrijven letter uit woord halen en dan op de juiste positie neerzetten

/*checken op welke positie de ingevoerde letter van het woord staat en dan die positie in de innerhtml veranderen(charAt)
en dan die onthouden zodat je de volgende letter ook kan invoeren*/

//plan om check functie dynamischer te maken;
function check() {
	//if in functie check length of input
	console.log(letterInput);
	console.log(wordInput);
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
		// if (word.charAt(0) == letter.charAt(0)) {
		// 	item[0].innerHTML = letter.charAt(0);
		// 	item[0].style.backgroundColor = 'green';
		// }
		// if (word.charAt(1) == letter.charAt(1)) {
		// 	item[1].innerHTML = letter.charAt(1);
		// 	item[1].style.backgroundColor = 'green';
		// }
		// if (word.charAt(2) == letter.charAt(2)) {
		// 	item[2].innerHTML = letter.charAt(2);
		// 	item[2].style.backgroundColor = 'green';
		// }
		// if (word.charAt(3) == letter.charAt(3)) {
		// 	item[3].innerHTML = letter.charAt(3);
		// 	item[3].style.backgroundColor = 'green';
		// }
		// if (word.charAt(4) == letter.charAt(4)) {
		// 	item[4].innerHTML = letter.charAt(4);
		// 	item[4].style.backgroundColor = 'green';
		// }

//lab speelbord(opdracht 2);
// if (word.includes(letter) == true) {
		// 	if (word.charAt(0) == letter){
		// 		item[0].innerHTML = letter;
		// 	}  
		// 	if (word.charAt(1) == letter) {
		// 		item[1].innerHTML = letter;
		// 	}  
		// 	if (word.charAt(2) == letter) {
		// 		item[2].innerHTML = letter;
		// 	}  
		// 	if (word.charAt(3) == letter) {
		// 		item[3].innerHTML = letter;
		// 	}  
		// 	if (word.charAt(4) == letter) {
		// 		item[4].innerHTML = letter;
		// 	}
		// 	// item[0].innerHTML = letter;
		// } else {
		// 	alert('This letter is not included in your chosen word!');
		// }