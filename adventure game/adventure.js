// const buttons = document.getElementsByClassName('button');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const container = document.getElementById('game-container');
const title = document.getElementById('title');
const description = document.getElementById('description');
const imageMap = 'url(' + 'Images' + '/';

const titleDescription = [
	{title: "Wie is het", description: "Wie is het? Je krijgt een afbeelding te zien en dan moet je raden wie het is!", image: imageMap + 'Wie_moet_ik_hebben.jpg)'}
	,{title: "Vraag 1", description: "Is dit Ronald Koeman?", image: imageMap + 'Koeman.jpg)'}
	,{title: "Vraag 2", description: "Is dit Frank Rijkaard?", image: imageMap + 'Frank-Rijkaard.jpg)'}
	,{title: "Vraag 3", description: "Is dit Edwin van der Sar?", image: imageMap + 'Frank-de-Boer.jpg)'}
	,{tilte: "Vraag 4", description: "Is dit Edgar-Davids?", image: imageMap + 'Edgar-Davids.jpg)'}
	,{title: "Vraag 5", description: "Is dit Clarence Seedorf?", image: imageMap + 'Patrick-Kluivert.jpg)'}
	,{title: "Vraag 6", description: "Is dit Dennis Bergkamp?", image: imageMap + 'Dennis-Bergkamp.jpg)'}
	,{title: "Vraag 7", description: "Is dit Johan Cruijff?", image: imageMap + 'Johan-Cruijff.jpg)'}
	,{tilte: "Vraag 8", description: "Is dit Marc Overmars?", image: imageMap + 'Edwin-van-der-Sar.jpg)'}
	,{title: "Vraag 9", description: "Is dit Ruud van Nistelrooy?", image: imageMap + 'Marco-van-Basten.jpg)'}
	,{title: "Vraag 10", description: "Is dit Ruud Gullit?", image: imageMap + 'Ruud-Gullit.jpg)'}
	,{title: "Einde", description: "Je hebt gewonnen!!!' + '<br>' + 'Wil je nog een keer spelen? Klik dan op Start!", image: imageMap + 'Gewonnen.jpg)'}
];
// buttons[1].style.display = 'none';
// buttons[2].style.display = 'none';
// tekst uit array ophalen
//meegekregen paramter van function
// var map images, array


Start();
console.log(titleDescription);
function Start() {
	title.innerHTML = titleDescription[0].title;
	description.innerHTML = titleDescription[0].description;
	button1.innerHTML = 'Start';
	button2.style.display = 'none';
	button3.style.display = 'none';
	// container.style.backgroundImage = "url('Images/Wie_moet_ik_hebben.jpg')";
	container.style.backgroundImage = titleDescription[0].image;
	//'url(' + imageMap + images[0] + ')';
	//Staged level 1, zodat die pas wordt uitgevoerd als je op de button klikt
	button1.onclick = level1;
}

function level1() {
	title.innerHTML = titleDescription[1].title;
	description.innerHTML = titleDescription[1].description;
	button1.style.display = 'block';
	button2.style.display = 'block';
	// button3.style.display = 'none';
	container.style.backgroundImage = titleDescription[1].image;
	button1.innerHTML = 'ja';
	button2.innerHTML = 'nee';
	button1.onclick = level2;
}

function level2() {
	title.innerHTML = titleDescription[2].title;
	description.innerHTML = titleDescription[2].description;
	container.style.backgroundImage = titleDescription[2].image;
	button1.onclick = level3;
}

function level3() {
	title.innerHTML = titleDescription[3].title;
	description.innerHTML = titleDescription[3].description;
	container.style.backgroundImage = titleDescription[3].image;
	button1.onclick = Start;
	button2.onclick = level4;
}

function level4() {
	title.innerHTML = titleDescription[4].title;
	description.innerHTML = titleDescription[4].description;
	container.style.backgroundImage = titleDescription[4].image;
	button1.onclick = level5;
	button2.onclick = Start;
}

function level5() {
	title.innerHTML = titleDescription[5].title;
	description.innerHTML = titleDescription[5].description;
	container.style.backgroundImage = titleDescription[5].image;
	button1.onclick = Start;
	button2.onclick = level6;
}

function level6() {
	title.innerHTML = titleDescription[6].title;
	description.innerHTML = titleDescription[6].description;
	container.style.backgroundImage = titleDescription[6].image;
	button1.onclick = level7;
	button2.onclick = Start;
}

function level7() {
	title.innerHTML = titleDescription[7].title;
	description.innerHTML = titleDescription[7].description;
	container.style.backgroundImage = titleDescription[7].image;
	button1.onclick = level8;
	button2.onclick = Start;
}

function level8() {
	title.innerHTML = titleDescription[8].title;
	description.innerHTML = titleDescription[8].description;
	container.style.backgroundImage = titleDescription[8].image;
	button1.onclick = Start;
	button2.onclick = level9;
}

function level9() {
	title.innerHTML = titleDescription[9].title;
	description.innerHTML = titleDescription[9].description;
	container.style.backgroundImage = titleDescription[9].image;
	button1.onclick = Start;
	button2.onclick = level10;
}

function level10() {
	title.innerHTML = titleDescription[10].title;
	description.innerHTML = titleDescription[10].description;
	container.style.backgroundImage = titleDescription[10].image;
	button1.onclick = einde;
	button2.onclick = Start;
}

function einde() {
	title.innerHTML = titleDescription[11].title;
	description.innerHTML = titleDescription[11].description;
	container.style.backgroundImage = titleDescription[11].image;
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