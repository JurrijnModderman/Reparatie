const stemwijzer = document.getElementById("stemwijzer");
const partijen = document.getElementById("partijen");
const title = document.getElementById("title");
const titleDescription = document.getElementById("title-description");
const description = document.getElementById("description");
const button = document.getElementById("button");
start();

var sceneIndex = 0;

function start() {
	titleDescription.innerHTML = 'Tweede kamer verkiezingen 2021';
	description.innerHTML = 'Test je politieke voorkeur aan de hand van 30 stellingen';
	button.innerHTML = 'Start';
	button.onclick = loadScene;
}

function choice() {

}

function loadScene() {
	titleDescription.innerHTML = parties[sceneIndex].title;
	description.innerHTML = parties[sceneIndex].statement;
	
}
