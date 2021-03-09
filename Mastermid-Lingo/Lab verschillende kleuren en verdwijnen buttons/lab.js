const container = document.getElementById("container");
var buttons = [];
var clickAmount = [];
//let locks the number for that loop
for (let nummer = 0; nummer <= 29; nummer++) {
	var button = document.createElement("BUTTON");
	button.classList.add("box");
	buttons.push(button);
	clickAmount.push(0);
	buttons[nummer].innerHTML = nummer + 1;
	buttons[nummer].style.backgroundColor = 'green';
	container.appendChild(button);
	//meer dynamisch(addeventlistener)
	button.addEventListener("click", function(){colors(nummer)});
}

function colors(index) {
	console.log(clickAmount);
	console.log(index);
	console.log(buttons);
	clickAmount[index]++;
	if (clickAmount[index] == 1) {
		buttons[index].style.backgroundColor = 'red';	
	}
	if (clickAmount[index] == 2) {
		buttons[index].style.backgroundColor = 'purple';
	}
	if (clickAmount[index] == 3) {
		buttons[index].style.backgroundColor = 'blue';
	}
	if (clickAmount[index] == 4) {
		buttons[index].style.backgroundColor = 'black';
	}
	if (clickAmount[index] == 5) {
		container.removeChild(buttons[index]);
	}
}