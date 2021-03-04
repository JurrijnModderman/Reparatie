var button1 = document.createElement("BUTTON");
button1.innerHTML = "Button1";
button1.style.backgroundColor = 'green';
button1.style.color = 'white';
document.getElementById("container").appendChild(button1);
var button2 = document.createElement("BUTTON");
button2.innerHTML = "Button2";
button2.style.backgroundColor = 'red';
button2.style.color = 'white';
document.getElementById("container").appendChild(button2);
var button3 = document.createElement("BUTTON");
button3.innerHTML = "Button3";
button3.style.backgroundColor = 'blue';
button3.style.color = 'white';
document.getElementById("container").appendChild(button3);


button1.onclick = groen;
button2.onclick = rood;
button3.onclick = blauw;

function groen() {
	document.body.style.backgroundColor = 'green';
}
function rood() {
	document.body.style.backgroundColor = 'red';
}
function blauw() {
	document.body.style.backgroundColor = 'blue';
}