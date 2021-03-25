const stemwijzer = document.getElementById("stemwijzer");
const partijen = document.getElementById("partijen");
const title = document.getElementById("title");
const titleDescription = document.getElementById("title-description");
const description = document.getElementById("description");
const buttonStart = document.getElementById("button");
const stemwijzerIMG = document.getElementById("stemwijzerIMG");
const scenePagina = document.getElementById("scenePagina");
var buttons = [];
var buttonsPartijen = [];
var answerQuestion = [];
var points = 0;
start();

var sceneIndex = 0;

function start() {
	titleDescription.innerHTML = 'Tweede kamer verkiezingen 2021';
	description.innerHTML = 'Test je politieke voorkeur aan de hand van 30 stellingen';
	buttonStart.innerHTML = 'Start';
	stemwijzer.classList.add('stemwijzer');
	stemwijzer.classList.remove('scenePagina');
	buttonStart.onclick = prepareScene;
	for (amount = 0; amount <=29; amount++) {
		var buttonPartijen = document.createElement("LI");
		buttonsPartijen.push(buttonPartijen);
		partijen.appendChild(buttonPartijen);
		// console.log(buttonPartijen);
	}
	partijen.classList.add('partyLogo');

}

function choice(answer) {
	console.log(answer);
	answerQuestion[sceneIndex] = answer;
	console.log(answerQuestion);
	//answerQuestion.splice(answerQuestion.indexOf(sceneIndex));
	sceneIndex++;
	loadScene();
}

function goBack() {
	// if (sceneIndex <0) {
	// 	start();
	// }
	sceneIndex--;
	loadScene();
}

function calculateAnswers() {
	console.log(subjects);
	for (index = 0; index <=subjects.length; index++) {
		for (partiesIndex = 0; partiesIndex <subjects.length; partiesIndex++) {

		}
		// if (answerQuestion[index] == subjects.parties[partiesIndex].position) {
		// 	points++;
		// 	console.log(points);
		// 	// stemwijzer.innerHTML = subjects[index].name;
		// }
	}
	
}

function prepareScene() {
	loadScene();
	const buttonText = ['Eens', 'Geen van beide', 'Oneens', 'Overslaan'];
	const buttonAnswers = ['Pro', 'None', 'Contra', ''];
	stemwijzer.classList.remove('stemwijzer');
	scenePagina.classList.add('scenePagina');
	const buttonBack = document.createElement("BUTTON");
	stemwijzer.appendChild(buttonBack);
	buttonBack.innerHTML = 'Back';
	buttonBack.classList.add('buttonBack');
	buttonBack.onclick = goBack;
	// if (sceneIndex == 0) {
	// 	buttonBack.classList.add('buttonBackHidden');
	// 	buttonBack.classList.remove('buttonBackVisible');
	// } else {
	// 	buttonBack.classList.remove('buttonBackHidden');
	// 	buttonBack.classList.add('buttonBackVisible');
	// }
	for (let index = 0; index <=3; index++) {
		const button = document.createElement("BUTTON");
		buttons.push(button);
		stemwijzer.appendChild(button);
		button.classList.add('button' + index);
		button.innerHTML = buttonText[index];
		let answerButton = buttonAnswers[index];
		console.log(answerButton);
		button.onclick = function() {choice(answerButton)};
	}
}

function loadScene() {
	console.log(sceneIndex);
	if (sceneIndex == subjects.length) {
		//berekenen antwoorden
		calculateAnswers();
	}
	stemwijzer.classList.add('stemwijzerScene');
	stemwijzerIMG.classList.add('logo');
	buttonStart.classList.add('startButton');
	titleDescription.innerHTML = subjects[sceneIndex].title;
	description.innerHTML = subjects[sceneIndex].statement;
}
