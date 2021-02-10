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
var button1 = 0;
var button2 = 0;
var button3 = 0;
//const button = document.querySelector('button1');

function changeBG() {
	document.body.style.backgroundImage = "url('images/1.jpg')";
	//button.disabled = true;
	//document.body.style.backgroundColor = '#ff0000';
	document.getElementById("button1").disabled = true;
	document.getElementById("button2").disabled = false;
	document.getElementById("button3").disabled = false;
	button1++;
	console.log('value button 1 = ' + button1);
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
	document.getElementById("button1").disabled = false;
	document.getElementById("button2").disabled = true;
	document.getElementById("button3").disabled = false;
	button2++;
	console.log('value button 2 = ' + button2);
}

/*document.getElementById('button2').onclick = function() {
	button2++;
	console.log('value button 2 = ' + button2);
}*/

function changeBG3() {
	document.body.style.backgroundImage = "url('images/3.jpg')";
	document.getElementById("button1").disabled = false;
	document.getElementById("button2").disabled = false;
	document.getElementById("button3").disabled = true;
	button3++;
	console.log('value button 3 = ' + button3);
}

/*document.getElementById('button3').onclick = function() {
	button3++;
	console.log('value button 3 = ' + button3);
}*/