const container = document.getElementById("container");
var buttons = [];
var clickIndex = 1;
//let locks the number for that loop
for (let nummer = 0; nummer <= 29; nummer++) {
	var button = document.createElement("BUTTON");
	button.classList.add("box");
	buttons.push(button);
	buttons[nummer].innerHTML = nummer + 1;
	buttons[nummer].style.backgroundColor = 'green';
	container.appendChild(button);
	button.addEventListener("click", function(){colors(nummer)});
}

function colors(index) {
	console.log(clickIndex);
	console.log(index);
	console.log(buttons);
	if (clickIndex == 1) {
		buttons[index].style.backgroundColor = 'red';	}
	if (clickIndex == 2) {
		buttons[index].style.backgroundColor = 'purple';
	}
	if (clickIndex == 3) {
		buttons[index].style.backgroundColor = 'blue';
	}
	if (clickIndex == 4) {
		buttons[index].style.backgroundColor = 'black';
	}
	if (clickIndex == 5) {
		container.removeChild(buttons[index]);
	}
	clickIndex++;
}