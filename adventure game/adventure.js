//aanmaak constanten en variable
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const container = document.getElementById('game-container');
const title = document.getElementById('title');
const description = document.getElementById('description');
const imageMap = 'url(' + 'Images' + '/';
//array met meerdere objecten
const scenes = [
	{title: "Wie is het", description: "Wie is het? Je krijgt een afbeelding te zien en dan moet je raden wie het is!", image: imageMap + 'Wie_moet_ik_hebben.jpg)'}
	,{title: "Vraag 1", description: "Is dit Ronald Koeman?", image: imageMap + 'Koeman.jpg)', answer: 'ja'}
	,{title: "Vraag 2", description: "Is dit Frank Rijkaard?", image: imageMap + 'Frank-Rijkaard.jpg)', answer: 'ja'}
	,{title: "Vraag 3", description: "Is dit Edwin van der Sar?", image: imageMap + 'Frank-de-Boer.jpg)', answer: 'nee'}
	,{title: "Vraag 4", description: "Is dit Edgar-Davids?", image: imageMap + 'Edgar-Davids.jpg)', answer: 'ja'}
	,{title: "Vraag 5", description: "Is dit Clarence Seedorf?", image: imageMap + 'Patrick-Kluivert.jpg)', answer: 'nee'}
	,{title: "Vraag 6", description: "Is dit Dennis Bergkamp?", image: imageMap + 'Dennis-Bergkamp.jpg)', answer: 'ja'}
	,{title: "Vraag 7", description: "Is dit Johan Cruijff?", image: imageMap + 'Johan-Cruijff.jpg)', answer: 'ja'}
	,{title: "Vraag 8", description: "Is dit Marc Overmars?", image: imageMap + 'Edwin-van-der-Sar.jpg)', answer: 'nee'}
	,{title: "Vraag 9", description: "Is dit Ruud van Nistelrooy?", image: imageMap + 'Marco-van-Basten.jpg)', answer: 'nee'}
	,{title: "Vraag 10", description: "Is dit Ruud Gullit?", image: imageMap + 'Ruud-Gullit.jpg)', answer: 'ja'}
	,{title: "Einde", description: "Je hebt gewonnen!!!" + '<br>' + 'Wil je nog een keer spelen? Klik dan op Start!', image: imageMap + 'Gewonnen.jpg)'}
];
var sceneIndex = 0;
//start functie aanroep, die wordt aangeroepen als de pagina geopend wordt
start();
//aanroep functies wanneer er op de buttons geklikt wordt
button1.onclick = loadScene;
button2.onclick = function(){Choice('ja')};
button3.onclick = function(){Choice('nee')};
//start functie om de hoofdpagina te creeeren met styling
function start() {
	console.log("start werkt");
	title.innerHTML = scenes[0].title;
	description.innerHTML = scenes[0].description;
	container.style.backgroundImage = scenes[0].image;
	button1.style.display = 'block';
	button2.style.display = 'none';
	button3.style.display = 'none';
	sceneIndex = 1;
}
//choice functie om te kijken of de antwoorden correct zijn
function Choice(choice) {
	console.log(sceneIndex);
	if (choice == scenes[sceneIndex].answer) {
		sceneIndex++;
		loadScene();
		if (sceneIndex == 11) {
			einde();
			sceneIndex = 1;
		}
	} else {
		start();
		console.log(sceneIndex);
	}
}
//loadscene functie om de levels te creeeren met styling doormiddel van de index
function loadScene() {
	console.log('loadScene werkt');
	button1.style.display = 'none';
	button2.style.display = 'block';
	button3.style.display = 'block';
	title.innerHTML = scenes[sceneIndex].title;
	description.innerHTML = scenes[sceneIndex].description;
	container.style.backgroundImage = scenes[sceneIndex].image;
}
//einde functie om de eindpagina te creeeren met styling
function einde() {
	console.log("einde werkt");
	title.innerHTML = scenes[11].title;
	description.innerHTML = scenes[11].description;
	container.style.backgroundImage = scenes[11].image;
	button1.style.display = 'block';
	button2.style.display = 'none';
	button3.style.display = 'none';
}