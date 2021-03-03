var button1 = document.createElement("BUTTON");
button1.innerHTML = "Button1";
document.getElementById("container").appendChild(button1);
var button2 = document.createElement("BUTTON");
button2.innerHTML = "Button2";
document.getElementById("container").appendChild(button2);
var button3 = document.createElement("BUTTON");
button3.innerHTML = "Button3";
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