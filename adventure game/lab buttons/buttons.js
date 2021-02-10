/*const keuze1 = document.getElementById('1');

function button1() {
	keuze1.src="images/1.jpg";
}*/

/*function button1(){ 
    document.getElementById('1').style.backgroundimage = 'url(images/1.jpg)'; 
} 
      
function button2(){ 
    document.getElementById('2').style.backgroundImage = "url(images/2.jpg)"; 
} 

function button3() {
    document.getElementById('3').style.backgroundImage = 'url(images/3.jpg)';
}*/
//body.style.backgroundimage = src="";
var amountButton1 = 0;
var amountButton2 = 0;
var amountButton3 = 0;
//const button = document.querySelector('button1');
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

function changeBG() {
	document.body.style.backgroundImage = "url('images/1.jpg')";
	//button.disabled = true;
	button1.style.backgroundColor = 'Red';
	button2.style.backgroundColor = 'Green';
	button3.style.backgroundColor = 'Green';
	//document.body.style.backgroundColor = '#ff0000';
	button1.disabled = true;
	button2.disabled = false;
	button3.disabled = false;
	amountButton1++;
	console.log('value button 1 = ' + amountButton1);
}

/*if (document.getElementById('button1').onclick == true) {
	button1++;
	console.log(button1);
}*/
/*document.getElementById('button1').onclick = function() {
	button1++;
	console.log('value button 1 = ' + button1);
}*/

function changeBG2() {
	document.body.style.backgroundImage = "url('images/2.jpg')";
	button1.style.backgroundColor = 'Green';
	button2.style.backgroundColor = 'Red';
	button3.style.backgroundColor = 'Green';
	button1.disabled = false;
	button2.disabled = true;
	button3.disabled = false;
	amountButton2++;
	console.log('value button 2 = ' + amountButton2);
}

/*document.getElementById('button2').onclick = function() {
	button2++;
	console.log('value button 2 = ' + button2);
}*/

function changeBG3() {
	document.body.style.backgroundImage = "url('images/3.jpg')";
	button1.style.backgroundColor = 'Green';
	button2.style.backgroundColor = 'Green';
	button3.style.backgroundColor = 'Red';
	button1.disabled = false;
	button2.disabled = false;
	button3.disabled = true;
	amountButton3++;
	console.log('value button 3 = ' + amountButton3);
}

/*document.getElementById('button3').onclick = function() {
	button3++;
	console.log('value button 3 = ' + button3);
}*/