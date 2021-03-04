var container = document.getElementById("container");

for (nummer = 1; nummer <= 30; nummer++) {
	var buttons = document.createElement("BUTTON");
	buttons.innerHTML = nummer;
	container.appendChild(buttons);
}