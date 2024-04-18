let divObj;
let number;
let i;
let y;

function chessboard() {
	divObj = document.getElementById('results1');
	number = parseInt(prompt('Type an integer number to specify how many lines you want to draw the chessboard:'));

	if (isNaN(number)) {
		alert('Warning!! You should input only an integer number!');
	} else {
		for (i = 0; i < number; i++) {
			for (j = 0; j < number; j++) {
				if ((i + j) % 2 == 0) {
					divObj.innerHTML += '#';
				} else {
					divObj.innerHTML += ' ';
				}
			}
			divObj.innerHTML += '<br>';
		}
	}
}

function table() {
	divObj = document.getElementById('results2');

	for (i = 1; i < 101; i++) {
		if (i % 10 == 0) {
			divObj.innerHTML += i + '<br>';
		} else {
			divObj.innerHTML += i + ' ';
		}
	}
}

function scoreboard() {
	divObj = document.getElementById('results3');

	for (i = 1; i <= 10; i++) {
		for (j = 1; j <= 10; j++) {
			divObj.innerHTML += (i * j) + ' ';
		}
		divObj.innerHTML += '<br>';
	}
}

function reset() {
	number = prompt(
		'Type a number of the exercise, that you want clear the output:'
	);

	if (isNaN(number)) {
		alert('Warning!! You should put only integer number!');
		exit;
	} else if (number < 7 || number > 9) {
		alert('Warning!! The exercise ' + number + " doesn't exist yet!");
		exit;
	}

	if (number == 7) {
		document.getElementById('results1').innerHTML = '';
	} else if (number == 8) {
		document.getElementById('results2').innerHTML = '';
	} else if (number == 9) {
		document.getElementById('results3').innerHTML = '';
	}
}