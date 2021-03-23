const stemwijzer = document.getElementById("stemwijzer");
const partijen = document.getElementById("partijen");
const title = document.getElementById("title");
const titleDescription = document.getElementById("title-description");
const description = document.getElementById("description");
const buttonStart = document.getElementById("button");
const stemwijzerIMG = document.getElementById("stemwijzerIMG");
var buttons = [];
var buttonsPartijen = [];
start();

var sceneIndex = 0;

function start() {
	titleDescription.innerHTML = 'Tweede kamer verkiezingen 2021';
	description.innerHTML = 'Test je politieke voorkeur aan de hand van 30 stellingen';
	buttonStart.innerHTML = 'Start';
	buttonStart.onclick = loadScene;
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
	sceneIndex++;
	loadScene();

}

function prepaireScene() {
	const buttonText = ['Eens', 'Geen van beide', 'Oneens'];
	const buttonAnswers = ['Pro', 'None', 'Contra'];
	for (index = 0; index <=2; index++) {
		button.innerHTML = buttonText[index];
	var answerButton = buttonAnswers[index];
	button.onclick = function() {choice(answerButton)};
		var button = document.createElement("BUTTON");
		buttons.push(button);
		stemwijzer.appendChild(button);
		button.classList.add('button' + index);
	}
	sceneIndex++;
	loadScene();
}

function loadScene() {
	console.log(sceneIndex);
	stemwijzer.classList.add('stemwijzerScene');
	stemwijzerIMG.classList.add('logo');
	buttonStart.classList.add('startButton');
	titleDescription.innerHTML = subjects[sceneIndex].title;
	description.innerHTML = subjects[sceneIndex].statement;
	stemwijzer.classList.add('scenePagina');
	if (sceneIndex == 0) {
		prepaireScene();
	}
}
