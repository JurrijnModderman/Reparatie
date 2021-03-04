var container = document.getElementById("container");

for (i = 1; i <= 30; i++) {
	var buttons = document.createElement("BUTTON");
	buttons.innerHTML = i;
	container.appendChild(buttons);
}