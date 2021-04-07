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
var answerQuestion = [];
var points = [];

var sceneIndex = 0;
buttonStart.onclick = start;
populatePoints();

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

function choice(answer) {
    // console.log(answer);
    answerQuestion[sceneIndex] = answer;
    // console.log(answerQuestion);
    //answerQuestion.splice(answerQuestion.indexOf(sceneIndex));
    sceneIndex++;
    loadScene();
}

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
		var checkbox = document.createElement('INPUT');
		checkbox.classList.add('checkbox');
		checkbox.setAttribute("type", "checkbox");
		scenePagina.appendChild(checkbox);
		scenePagina.innerHTML += subjects[extraImportantSubjects].title + '<br>';
		// console.log(checkboxArray[extraImportantSubjects].checked);
		// if (checkboxArray[extraImportantSubjects].checked == true) {
		// 	console.log('puntje omhoog hutsie');
		// 	points[extraImportantSubjects].value++;
		// }
	}
}

function resultParties() {
	//select parties u want to see the result of
	var checkboxArray = [];
	checkboxArray = document.getElementsByClassName('checkbox');
	for (c = 0; c < subjects.length; c++) {
		if (checkboxArray[c].checked == true) {
			points[c].value++;
			console.log(points[c].value);
		}
	}
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
	for (extraImportantSubjects = 0; extraImportantSubjects < subjects.length; extraImportantSubjects++) {
		var checkbox = document.createElement('INPUT');
		checkbox.setAttribute("type", "checkbox");
		scenePagina.appendChild(checkbox);
		scenePagina.innerHTML += parties[extraImportantSubjects].name + '<br>';
	}
}

function populatePoints() {
	//push amount of parties.length in array to calculate later the points
	for (p = 0; p < parties.length; p++) {
		points.push({name: parties[p].name, value: 0});
	}
}

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
    points.sort(function(a, b){return b.value - a.value});
    showAnswers();
}

function showAnswers() {
	//show answers
    answerButtons.classList.remove('block');
    answerButtons.classList.add('none');
    sceneDescription.classList.add('none');
    sceneDescriptionTitle.classList.add('none');
    // scenePagina.classList.add('none');
    scenePagina.innerHTML = 'Jouw antwoorden komen het meest overeen met deze partijen(hoog naar laag):';
    for (let e = 0; e < parties.length; e++) {
    	partiePage.innerHTML += points[e].name + '<br>';
    	// console.log(points[e].name);
    }
}

function loadScene() {
	//displays the current scene
    console.log(sceneIndex);
    if (sceneIndex === subjects.length) {
        //berekenen antwoorden
        importantSubjects();
    }
    stemwijzer.classList.add('stemwijzerScene');
    stemwijzerIMG.classList.add('logo');
    buttonStart.classList.add('startButton');
    sceneDescriptionTitle.innerHTML = subjects[sceneIndex].title;
    sceneDescription.innerHTML = subjects[sceneIndex].statement;
}
