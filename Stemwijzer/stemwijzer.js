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
var buttons = [];
var buttonsPartijen = [];
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

function populatePoints() {
	for (p = 0; p < parties.length; p++) {
		points.push({name: parties[p].name, value: 0});
	}
}

function calculateAnswers() {
    // console.log(subjects);
    for (index = 0; index < subjects.length; index++) {
        for (partiesIndex = 0; partiesIndex < parties.length; partiesIndex++) {
        	if (answerQuestion[index] == subjects[index].parties[partiesIndex].position) {
        		//parties[index] = 
        		console.log(points);
        		points[partiesIndex].value++;
        	}
    		//highestParties = subjects[index].parties[partiesIndex].name;
        }
        // if (answerQuestion[index] == subjects.parties[partiesIndex].position) {
        // 	points++;
        // 	console.log(points);
        // 	// stemwijzer.innerHTML = subjects[index].name;
        // }
    }
    //sort;
    // var highestParties = Math.max(...points);
    points.sort(function(a, b){return b.value - a.value});
    // console.log(highestParties);
    showAnswers();
}

function showAnswers() {
    answerButtons.classList.remove('block');
    answerButtons.classList.add('none');
    sceneDescription.classList.add('none');
    sceneDescriptionTitle.classList.add('none');
    scenePagina.classList.add('none');
    for (let e = 0; e < parties.length; e++) {
    	partiePage.innerHTML += points[e].name + '<br>';
    	// alert(points[e].name);
    	console.log(points[e].name);
    }
    // partiePage.innerHTML = points[0].name;
    // console.log(points[0].name);
    // partiePage.innerHTML = points[1].name;
    // console.log(points[1].name);
    // partiePage.innerHTML = points[2].name;
    // console.log(points[2].name);
    // partiePage.innerHTML = points[3].name;
    // console.log(points[3].name);
}

function loadScene() {
    console.log(sceneIndex);
    if (sceneIndex === subjects.length) {
        //berekenen antwoorden
        calculateAnswers();
    }
    stemwijzer.classList.add('stemwijzerScene');
    stemwijzerIMG.classList.add('logo');
    buttonStart.classList.add('startButton');
    sceneDescriptionTitle.innerHTML = subjects[sceneIndex].title;
    sceneDescription.innerHTML = subjects[sceneIndex].statement;
}
