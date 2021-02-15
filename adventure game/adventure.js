const buttons = document.getElementsByClassName('button');

buttons[1].style.display = 'none';
buttons[2].style.display = 'none';
// start();

// function start() {
// 	level1();
// }

function level1(index) {
	buttons[1].style.display = 'visible';
	buttons[2].style.display = 'visible';
	document.body.style.backgroundImage = '';
}
