const stemwijzer = document.getElementById("stemwijzer");
const partijen = document.getElementById("partijen");
const title = document.getElementById("title");
const titleDescription = document.getElementById("title-description");
const description = document.getElementById("description");
const buttonStart = document.getElementById("button");
var buttons = [];
start();

var sceneIndex = 0;

function start() {
	titleDescription.innerHTML = 'Tweede kamer verkiezingen 2021';
	description.innerHTML = 'Test je politieke voorkeur aan de hand van 30 stellingen';
	buttonStart.innerHTML = 'Start';
	buttonStart.onclick = loadScene;
}

function choice() {

}

function loadScene() {
	titleDescription.innerHTML = subjects[sceneIndex].title;
	description.innerHTML = subjects[sceneIndex].statement;
	stemwijzer.classList.add('scenePagina');
	for (index = 0; index <=2; index++) {
		var button = document.createElement("BUTTON");
		buttons.push(button);
		stemwijzer.appendChild(button);
	}
}
