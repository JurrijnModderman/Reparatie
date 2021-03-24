const stemwijzer = document.getElementById("stemwijzer");
const partijen = document.getElementById("partijen");
const title = document.getElementById("title");
const titleDescription = document.getElementById("title-description");
const description = document.getElementById("description");
const buttonStart = document.getElementById("button");
const stemwijzerIMG = document.getElementById("stemwijzerIMG");
var buttons = [];
var buttonsPartijen = [];
var answerQuestion = [];
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
	answerQuestion.push(answer);
	console.log(answerQuestion);
	sceneIndex++;
	loadScene();

}

function calculateAnswers() {
	
}

function prepareScene() {
	loadScene();
	const buttonText = ['Eens', 'Geen van beide', 'Oneens', 'Overslaan'];
	const buttonAnswers = ['Pro', 'None', 'Contra', 0];
	stemwijzer.classList.remove('stemwijzer');
	stemwijzer.classList.add('scenePagina');
	for (let index = 0; index <=3; index++) {
		var button = document.createElement("BUTTON");
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
	if (sceneIndex == 30) {
		//berekenen antwoorden
		calculateAnswers();
	}
	stemwijzer.classList.add('stemwijzerScene');
	stemwijzerIMG.classList.add('logo');
	buttonStart.classList.add('startButton');
	titleDescription.innerHTML = subjects[sceneIndex].title;
	description.innerHTML = subjects[sceneIndex].statement;
}
