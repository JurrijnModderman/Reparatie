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

function changeBG() {
	document.body.style.backgroundImage = "url('images/1.jpg')";
	document.body.style.backgroundColor = '#ff0000';
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
	button2++;
	console.log('value button 2 = ' + button2);
}

/*document.getElementById('button2').onclick = function() {
	button2++;
	console.log('value button 2 = ' + button2);
}*/

function changeBG3() {
	document.body.style.backgroundImage = "url('images/3.jpg')";
	button3++;
	console.log('value button 3 = ' + button3);
}

/*document.getElementById('button3').onclick = function() {
	button3++;
	console.log('value button 3 = ' + button3);
}*/