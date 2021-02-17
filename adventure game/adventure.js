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
	button1.onclick = level2;
	// button2.onclick = Start;
	// button2.innerHTML = 'Start';
}

function level2() {
	title.innerHTML = 'Vraag 2';
	description.innerHTML = 'Is dit Frank Rijkaard?';
	container.style.backgroundImage = "url('Images/Frank-Rijkaard.jpg')"
	button1.onclick = level3;
}

function level3() {
	title.innerHTML = 'Vraag 3';
	description.innerHTML = 'Is dit Edwin van der Sar?';
	container.style.backgroundImage = "url('Images/Frank-de-Boer.jpg')"
	button1.onclick = Start;
	button2.onclick = level4;
}

function level4() {
	title.innerHTML = 'Vraag 4';
	description.innerHTML = 'Is dit Edgar-Davids';
	container.style.backgroundImage = "url('Images/Edgar-Davids.jpg')";
	button1.onclick = level5;
	button2.onclick = Start;
}

function level5() {
	title.innerHTML = 'Vraag 5';
	description.innerHTML = 'Is dit Clarence Seedorf?';
	container.style.backgroundImage = "url('Images/Patrick-Kluivert.jpg')";
	button1.onclick = Start;
	button2.onclick = level6;
}

function level6() {
	title.innerHTML = 'Vraag 6';
	description.innerHTML = 'Is dit Dennis Bergkamp?';
	container.style.backgroundImage = "url('Images/Dennis-Bergkamp.jpg')";
	button1.onclick = level7;
	button2.onclick = Start;
}

function level7() {
	title.innerHTML = 'Vraag 7';
	description.innerHTML = 'Is dit Johan Cruijff?';
	container.style.backgroundImage = "url('Images/Johan-Cruijff.jpg')";
	button1.onclick = level8;
	button2.onclick = Start;
}

function level8() {
	title.innerHTML = 'Vraag 8';
	description.innerHTML = 'Is dit Marc Overmars?';
	container.style.backgroundImage = "url('Images/Edwin-van-der-Sar.jpg')";
	button1.onclick = Start;
	button2.onclick = level9;
}

function level9() {
	title.innerHTML = 'Vraag 9';
	description.innerHTML = 'Is dit Ruud van Nistelrooy?';
	container.style.backgroundImage = "url('Images/Marco-van-Basten.jpg')";
	button1.onclick = Start;
	button2.onclick = level10;
}

function level10() {
	title.innerHTML = 'Vraag 10';
	description.innerHTML = 'Is dit Ruud Gullit?';
	container.style.backgroundImage = "url('Images/Ruud-Gullit.jpg')";
	button1.onclick = einde;
	button2.onclick = Start;
}

function einde() {
	title.innerHTML = 'Einde';
	description.innerHTML = 'Je hebt gewonnen!!!';
	container.style.backgroundImage = "url('Images/Gewonnen.jpg')";
	button1.innerHTML = 'Start';
	button2.style.display = 'none';
	button1.onclick = Start;
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