// declareren variabelen
const stemwijzer = document.getElementById("stemwijzer");
const partijen = document.getElementById("partijen");
const buttonStart = document.getElementById("button");
const stemwijzerIMG = document.getElementById("stemwijzerIMG");
const scenePagina = document.getElementById("scenePagina");
const sceneDescriptionTitle = document.getElementById('sceneDescriptionTitle');
const sceneDescription = document.getElementById('sceneDescription');
const answerButtons = document.getElementById("answer-buttons");
const background = document.getElementById("background");
const buttonBack = document.getElementById("buttonBack");
const partiePage = document.getElementById("partie");
const pro = document.getElementById("pro");
const none = document.getElementById("none");
const contra = document.getElementById("contra");
const skip = document.getElementById("skip");
const resultPage = document.getElementById("result");
var answerQuestion = [];
var points = []; // bevat scores per partij, vb ['vvd' =>8, 'cda' =>3]
var checkParties = false;
var checkSubjects = false;

var sceneIndex = 0;
buttonStart.onclick = start;
populatePoints();

// start functie om de hoofdpagina te stylen
function start() {
	stemwijzer.classList.remove('block');
	stemwijzer.classList.add('none');
	partijen.classList.remove('block');
	partijen.classList.add('none');
	answerButtons.classList.remove('none');
    answerButtons.classList.add('block');
    background.classList.remove('block');
    background.classList.add('none');
    pro.onclick = function () {choice('pro')};
	none.onclick = function () {choice('none')};
	contra.onclick = function () {choice('contra')};
	skip.onclick = function () {choice('')};
    buttonBack.onclick = goBack;
    loadScene();
}

// choice functie om je antwoorden door te geven en dan naar de volgende vraag te gaan
function choice(answer) {
    // console.log(answer);
    answerQuestion[sceneIndex] = answer;
    // console.log(answerQuestion);
    //answerQuestion.splice(answerQuestion.indexOf(sceneIndex));
    sceneIndex++;
    loadScene();
}

// goback functie om terug te kunnen en dan de juiste styling daar aan toe te voegen mocht dat nodig zijn
function goBack() {
    if (sceneIndex != 0) {
        sceneIndex--;
    }
    else {
    	stemwijzer.classList.remove('none');
        stemwijzer.classList.add('block');
        stemwijzerIMG.classList.remove('none');
        stemwijzerIMG.classList.add('block');
        buttonStart.classList.remove('none');
        buttonStart.classList.add('block');
        scenePagina.classList.remove('block');
        scenePagina.classList.add('none');
        partijen.classList.remove('none');
        partijen.classList.add('block');
        background.classList.remove('none');
        background.classList.add('block');
    }
    loadScene();
}

// importantSubjects functie om de pagina van de belangrijke onderwerpen te weergeven en te stylen
function importantSubjects() {
	//select questions that u find important and give them an extra point 
	console.log('function importantSubjects gets executed');
	sceneDescriptionTitle.innerHTML = 'Zijn er onderwerpen die je extra belangrijk vindt?';
	sceneDescription.innerHTML = '0/30 stellingen geselecteerd';
	pro.classList.add('none');
	none.classList.add('none');
	contra.classList.add('none');
	skip.classList.add('block');
	skip.innerHTML = 'Volgende stap';
	skip.onclick = resultParties;
	buttonBack.classList.add('block');
	scenePagina.innerHTML = '';
	for (extraImportantSubjects = 0; extraImportantSubjects < subjects.length; extraImportantSubjects++) {
		var checkboxEIS = document.createElement('INPUT');
		checkboxEIS.classList.add('checkboxEIS');
		checkboxEIS.setAttribute("type", "checkbox");
		scenePagina.appendChild(checkboxEIS);
		scenePagina.innerHTML += subjects[extraImportantSubjects].title + '<br>';
	}
	const allSubjects = document.createElement("BUTTON");
	allSubjects.innerHTML = 'Selecteer alle onderwerpen';
	allSubjects.classList.add('AllSubjectsButton');
	scenePagina.appendChild(allSubjects);
	console.log('allSubjects is geapppend');
	allSubjects.onclick = function() {
		checkSubjects = !checkSubjects;
		extraImportantSubjects = document.getElementsByClassName('checkboxEIS');
		for (selectAll = 0; selectAll < extraImportantSubjects.length; selectAll++) {
			if (extraImportantSubjects[selectAll].type == 'checkbox') {
				extraImportantSubjects[selectAll].checked = checkSubjects;
			}
		}
	}
}

// de gebruiker kan aangeven welke onderwerpen belangrijk zijn (deze checkboxen komen in checkboxarrayimportsubjects)
// aangevinkte thema's moeten extra punten krijgen in de array waar alle punten per partij in zitten
function checkCheckboxesImportantSubjects() {
	var checkboxArrayImportantSubjects = [];
	checkboxArrayImportantSubjects = document.getElementsByClassName('checkboxEIS');
	// door mijn checkboxarray heen loopen om te kijken of die geklikt is
	for (checkIndex = 0; checkIndex < checkboxArrayImportantSubjects.length; checkIndex++) {
		if (checkboxArrayImportantSubjects[checkIndex].checked == true) {
			var correctAnswer = answerQuestion[checkIndex];
			// door de subjects heen loopen
			for (checkboxInput = 0; checkboxInput < subjects[checkIndex].parties.length; checkboxInput++) {
				console.log(subjects[checkIndex].parties[checkIndex].name);
				//
				if (answerQuestion[checkIndex] == subjects[checkIndex].parties[checkboxInput].position) {
					points[checkboxInput].value++;
					console.log(points[checkboxInput].value);
				}
			}
		}
	}
}

// functie om de checkboxes te checken om die partijen dan te weergeven op de laatste pagina
function checkCheckboxesResultParties() {
	points.sort(function(a, b){return b.value - a.value});
	var checkboxArrayResultParties = [];
	checkboxArrayResultParties = document.getElementsByClassName('checkboxRP');
	console.log(checkboxArrayResultParties);
	for (checkboxInput = 0; checkboxInput < checkboxArrayResultParties.length; checkboxInput++) {
		if (checkboxArrayResultParties[checkboxInput].checked == true) {
			partiePage.innerHTML += points[checkboxInput].name + '<br>';
			console.log(points[checkboxInput].name);
			 // += checkboxArrayResultParties[checkboxArrayImportantSubjects];
		}
	}
}

// functie om de resultaatparties pagina te weergeven en te stylen
function resultParties() {
	//select parties u want to see the result of
	checkCheckboxesImportantSubjects();
	console.log('function resultParties gets executed');
	sceneDescriptionTitle.innerHTML = 'Welke partijen wil je meenemen in het resultaat?';
	sceneDescription.innerHTML = 'Kies alle partijen, alleen de partijen die nu al in de Tweede Kamer zitten, of maak zelf een selectie. Selecteer minimaal 3 partijen.';
	pro.classList.add('none');
	none.classList.add('none');
	contra.classList.add('none');
	skip.classList.add('block');
	skip.innerHTML = 'Volgende stap';
	skip.onclick = calculateAnswers;
	buttonBack.onclick = importantSubjects;
	buttonBack.classList.add('block');
	scenePagina.innerHTML = '';
	for (chosenParties = 0; chosenParties < parties.length; chosenParties++) {
		var checkboxRP = document.createElement('INPUT');
		checkboxRP.classList.add('checkboxRP');
		checkboxRP.setAttribute("type", "checkbox");
		scenePagina.appendChild(checkboxRP);
		scenePagina.innerHTML += parties[chosenParties].name + '<br>';
	}
	const allParties = document.createElement("BUTTON");
	allParties.innerHTML = 'Selecteer alle Partijen';
	allParties.classList.add('AllPartiesButton');
	scenePagina.appendChild(allParties);
	console.log('allParties is geapppend');
	allParties.onclick = function() {
		checkParties = !checkParties;
		checkboxArrayResultParties = document.getElementsByClassName('checkboxRP');
		for (selectAll = 0; selectAll < checkboxArrayResultParties.length; selectAll++) {
			if (checkboxArrayResultParties[selectAll].type == 'checkbox') {
				checkboxArrayResultParties[selectAll].checked = checkParties;
			}
		}
	}
}

// functie om alvast een array aan te maken om later de punten daaraan toe te voegen 
function populatePoints() {
	//push amount of parties.length in array to calculate the points later
	for (p = 0; p < parties.length; p++) {
		points.push({name: parties[p].name, value: 0});
	}
}

// functie om de antwoorden te berekenen
function calculateAnswers() {
	//calculating answers
    // console.log(subjects);
    for (index = 0; index < subjects.length; index++) {
        for (partiesIndex = 0; partiesIndex < subjects[index].parties.length; partiesIndex++) {
        	// console.log(index);
        	// console.log(partiesIndex);
        	if (answerQuestion[index] == subjects[index].parties[partiesIndex].position) {
        		console.log(points);
        		points[partiesIndex].value++;
        	}
        }
    }
    showAnswers();
}

// functie om de antwoorden te laten zien op de pagina
function showAnswers() {
	//show answers
    answerButtons.classList.remove('block');
    answerButtons.classList.add('none');
    sceneDescription.classList.add('none');
    sceneDescriptionTitle.classList.add('none');
    scenePagina.classList.add('none');
    resultPage.innerHTML = 'Jouw antwoorden komen het meest overeen met deze partijen(hoog naar laag):';
    checkCheckboxesResultParties();
    console.log(points);
}

// functie om de scenepagina met de vragen te laten zien
function loadScene() {
	//displays the current scene
    console.log(sceneIndex);
    if (sceneIndex === subjects.length) {
        importantSubjects();
    }
    stemwijzer.classList.add('stemwijzerScene');
    stemwijzerIMG.classList.add('logo');
    buttonStart.classList.add('startButton');
    sceneDescriptionTitle.innerHTML = subjects[sceneIndex].title;
    sceneDescription.innerHTML = subjects[sceneIndex].statement;
}
