const stemwijzer = document.getElementById("stemwijzer");
const partijen = document.getElementById("partijen");
const title = document.getElementById("title");
const titleDescription = document.getElementById("title-description");
const description = document.getElementById("description");
const buttonStart = document.getElementById("button");
const stemwijzerIMG = document.getElementById("stemwijzerIMG");
const scenePagina = document.getElementById("scenePagina");
const sceneTitle = document.getElementById('sceneTitle');
const sceneDescriptionTitle = document.getElementById('sceneDescriptionTitle');
const sceneDescription = document.getElementById('sceneDescription');
const answerButtons = document.getElementById("answer-buttons");
const answerSection = document.getElementsByClassName("answerSection");
const section = document.getElementById("section");
const background = document.getElementById("background");
const buttonBack = document.getElementById("buttonBack");
const pro = document.getElementById("pro");
const none = document.getElementById("none");
const contra = document.getElementById("contra");
const skip = document.getElementById("skip");
var buttons = [];
var buttonsPartijen = [];
var answerQuestion = [];
var points = 0;
// start();
background.classList.add('background');
var sceneIndex = 0;
buttonStart.onclick = start;
scenePagina.style.display = 'none';


//alles in html genereren
function start() {
	stemwijzer.style.display = 'none';
	partijen.style.display = 'none';
    answerButtons.style.display = 'block';
    background.style.display = 'none';
    pro.onclick = function () {choice('pro')};
	none.onclick = function () {choice('none')};
	contra.onclick = function () {choice('contra')};
	skip.onclick = function () {choice('')};
    buttonBack.onclick = goBack;
    loadScene();
}

function choice(answer) {
    console.log(answer);
    answerQuestion[sceneIndex] = answer;
    console.log(answerQuestion);
    //answerQuestion.splice(answerQuestion.indexOf(sceneIndex));
    sceneIndex++;
    loadScene();
}

function goBack() {
    if (sceneIndex != 0) {
        sceneIndex--;
    }
    else {
        stemwijzer.style.display = 'block';
        stemwijzerIMG.style.display = 'block';
        buttonStart.style.display = 'block';
        scenePagina.style.display = 'none';
        partijen.style.display = 'block';
        background.style.display = 'block';
    }
    loadScene();
}

function calculateAnswers() {
    console.log(subjects);
    for (index = 0; index <= subjects.length; index++) {
        for (partiesIndex = 0; partiesIndex < subjects.length; partiesIndex++) {

        }
        // if (answerQuestion[index] == subjects.parties[partiesIndex].position) {
        // 	points++;
        // 	console.log(points);
        // 	// stemwijzer.innerHTML = subjects[index].name;
        // }
    }

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
