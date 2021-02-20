// const buttons = document.getElementsByClassName('button');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const container = document.getElementById('game-container');
const title = document.getElementById('title');
const description = document.getElementById('description');
const imageMap = 'url(' + 'Images' + '/';
const startEnd = [
		{title: "Wie is het", description: "Wie is het? Je krijgt een afbeelding te zien en dan moet je raden wie het is!", image: imageMap + 'Wie_moet_ik_hebben.jpg)'}
		,{title: "Einde", description: "Je hebt gewonnen!!!" + '<br>' + 'Wil je nog een keer spelen? Klik dan op Start!', image: imageMap + 'Gewonnen.jpg)'}
];
const scenes = [
	//{title: "Wie is het", description: "Wie is het? Je krijgt een afbeelding te zien en dan moet je raden wie het is!", image: imageMap + 'Wie_moet_ik_hebben.jpg)'}
	{title: "Vraag 1", description: "Is dit Ronald Koeman?", image: imageMap + 'Koeman.jpg)', answer: 'ja'}
	,{title: "Vraag 2", description: "Is dit Frank Rijkaard?", image: imageMap + 'Frank-Rijkaard.jpg)', answer: 'ja'}
	,{title: "Vraag 3", description: "Is dit Edwin van der Sar?", image: imageMap + 'Frank-de-Boer.jpg)', answer: 'nee'}
	,{title: "Vraag 4", description: "Is dit Edgar-Davids?", image: imageMap + 'Edgar-Davids.jpg)', answer: 'ja'}
	,{title: "Vraag 5", description: "Is dit Clarence Seedorf?", image: imageMap + 'Patrick-Kluivert.jpg)', answer: 'nee'}
	,{title: "Vraag 6", description: "Is dit Dennis Bergkamp?", image: imageMap + 'Dennis-Bergkamp.jpg)', answer: 'ja'}
	,{title: "Vraag 7", description: "Is dit Johan Cruijff?", image: imageMap + 'Johan-Cruijff.jpg)', answer: 'ja'}
	,{title: "Vraag 8", description: "Is dit Marc Overmars?", image: imageMap + 'Edwin-van-der-Sar.jpg)', answer: 'nee'}
	,{title: "Vraag 9", description: "Is dit Ruud van Nistelrooy?", image: imageMap + 'Marco-van-Basten.jpg)', answer: 'nee'}
	,{title: "Vraag 10", description: "Is dit Ruud Gullit?", image: imageMap + 'Ruud-Gullit.jpg)', answer: 'ja'}
	//,{title: "Einde", description: "Je hebt gewonnen!!!" + '<br>' + 'Wil je nog een keer spelen? Klik dan op Start!', image: imageMap + 'Gewonnen.jpg)'}
];


// buttons[1].style.display = 'none';
// buttons[2].style.display = 'none';
// tekst uit array ophalen
//meegekregen paramter van function
// var map images, array

var sceneIndex = 0;
start();
console.log(scenes);
console.log(startEnd);

function start() {
	title.innerHTML = startEnd[0].title;
	description.innerHTML = startEnd[0].description;
	container.style.backgroundImage = startEnd[0].image;
	button1.innerHTML = 'Start';
	button2.style.display = 'none';
	button3.style.display = 'none';
	button1.onclick = loadScene;
	// container.style.backgroundImage = "url('Images/Wie_moet_ik_hebben.jpg')";
	//'url(' + imageMap + images[0] + ')';
	//Staged level 1, zodat die pas wordt uitgevoerd als je op de button klikt
}

function Choice(choice) {
	if (choice == scenes[sceneIndex].answer) {
		console.log("correct");
		console.log(sceneIndex);
		sceneIndex++;
	} else {
		console.log("incorrect");
		console.log(sceneIndex);
		sceneIndex = 0;
		if (sceneIndex == 9) {
			einde();
		}
	}
	loadScene();
}

function loadScene() {
	button1.style.display = 'none';
	button2.style.display = 'block';
	button3.style.display = 'block';
	title.innerHTML = scenes[sceneIndex].title;
	description.innerHTML = scenes[sceneIndex].description;
	container.style.backgroundImage = scenes[sceneIndex].image;
}

function einde() {
	title.innerHTML = startEnd[1].title;
	description.innerHTML = startEnd[1].description;
	container.style.backgroundImage = startEnd[1].image;
	button2.style.display = 'none';
	button3.style.display = 'none';
	button1.style.display = 'block';
	button1.onclick = start;
}

