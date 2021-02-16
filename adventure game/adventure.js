// const buttons = document.getElementsByClassName('button');
button1 = document.getElementById('button1');
button2 = document.getElementById('button2');
button3 = document.getElementById('button3');
const container = document.getElementById('game-container');
const title = document.getElementById('title');
const description = document.getElementById('description');

// buttons[1].style.display = 'none';
// buttons[2].style.display = 'none';

Start();

function Start() {
	title.innerHTML = 'Wie is het';
	description.innerHTML = 'Wie is het? Je krijgt een afbeelding te zien en dan moet je raden wie het is!';
	button2.style.display = 'none';
	button3.style.display = 'none';
	container.style.backgroundImage = "url('Images/Wie_moet_ik_hebben.jpg')";
	button1.onclick = level1;
}

function level1() {
	title.innerHTML = 'Vraag 1';
	description.innerHTML = 'Is dit Ronald Koeman?';
	button1.style.display = 'block';
	button2.style.display = 'block';
	button3.style.display = 'none';
	container.style.backgroundImage = "url('Images/Koeman.jpg')";
	button1.innerHTML = 'ja';
	button2.innerHTML = 'nee';
}
// const button = document.getElementById('button');
// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');
// const inventoryItem = document.getElementById('inventoryItem');
// button1.style.display = 'none';
// button2.style.display = 'none';

// function Start() {
// 	button.style.display = 'none';
// 	button1.style.display = 'visible';
// 	button2.style.display = 'visible';
// 	inventoryItem.body.style.backgroundImage = "url('Images/.jpg')";
// }