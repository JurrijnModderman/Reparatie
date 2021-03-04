const container = document.getElementById("container");
var buttons = [];
//let locks the number for that loop
for (let nummer = 0; nummer <= 29; nummer++) {
	var button = document.createElement("BUTTON");
	button.classList.add("box");
	buttons.push(button);
	buttons[nummer].innerHTML = nummer + 1;
	buttons[nummer].style.backgroundColor = 'green';
	container.appendChild(button);
	button.addEventListener("click", function(){red(nummer)});
}

function red(index) {
	console.log(index);
	console.log(buttons);
	buttons[index].style.backgroundColor = 'red';
}