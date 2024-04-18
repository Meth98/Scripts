let divObj;
let number;
let array1 = [];
let array2 = [];
let array3 = [];
let i;
let character;

function show_series() {
	divObj = document.getElementById('results1');
	let sum = 0;
	let product = 1;
	let average = 0;

	do {
		number = parseInt(prompt('Type an integer number:'));

		if (number != 0) {
			if (isNaN(number)) {
				alert('Warning!! You should put only integer number!');
			} else {
				array1.push(number);
				sum = sum + number;
				product = product * number;
				average = sum / 2;
				divObj.innerHTML =
					'Numbers: ' +
					array1 +
					'<br> Sum: ' +
					sum +
					'<br> Product: ' +
					product +
					'<br> Average: ' +
					average +
					'<br> Minor: ' +
					Math.min.apply(Math, array1) +
					'<br> Major: ' +
					Math.max.apply(Math, array1);
			}
		}
	} while (number != 0);

	array1 = [];
}

function BubbleSort() {
	divObj = document.getElementById('results2');

	do {
		number = parseInt(prompt('Type an integer number:'));

		if (isNaN(number)) {
			alert('Warning!! You should put only integer number!');
			exit;
		} else {
			array1.push(number);
		}
	} while (number != 0);

	divObj.value =
		'Array: ' +
		array1 +
		'<br> Ascending sorted array: ' +
		array1.sort() +
		'<br> Reverse array: ' +
		array1.reverse();

	/* function sort from the minor to the maximun */
	array1.sort(function (a, b) {
		return a - b;
	});

	divObj.innerHTML = divObj.value + '<br> Ordered array: ' + array1;
	array1 = [];
}

function concatenate() {
	divObj = document.getElementById('results3');

	do {
		number = parseInt(
			prompt('Type an integer number to push on the first array:')
		);

		if (isNaN(number)) {
			alert('Warning!! You should put only integer number!');
			exit;
		} else {
			array1.push(number);
		}
	} while (number != 0);

	do {
		number = parseInt(
			prompt('Type an integer number to push on the second array:')
		);

		if (isNaN(number)) {
			alert('Warning!! You should put only integer number!');
			exit;
		} else {
			array2.push(number);
		}
	} while (number != 0);

	array3 = array1.concat(array2);

	array3.sort(function (a, b) {
		return a - b;
	});

	divObj.innerHTML =
		'Array 1: ' +
		array1 +
		'<br> Array 2: ' +
		array2 +
		'<br> Array 3: ' +
		array3;
}

function randomArray() {
	divObj = document.getElementById('results4');
	const size = prompt('Type an integer number for the array size:');

	if (isNaN(size)) {
		alert('Warning!! You should put only integer number!');
		exit;
	} else {
		for (i = 0; i < size; i++) {
			number = Math.floor(Math.random() * 100); // returns a random integer from 0 to 99
			array1.push(number);
		}
	}

	array2 = array1;

	array2.sort(function (a, b) {
		return a - b;
	});

	divObj.innerHTML =
		'Array size: ' +
		size +
		'<br> Random array: ' +
		array1 +
		'<br> Ordered array: ' +
		array2;
}

function occurences() {
	divObj = document.getElementById('results5');
	let string;
	let occurences = 0;
	string = prompt('Type a string:');

	if (isNaN(string)) {
		character = prompt('Type a character that you want to count:');

		if (isNaN(character)) {
			if (character.length == 1) {
				for (i = 0; i <= string.length; i++) {
					if (string[i] == character) {
						occurences++;
					}
				}

				divObj.innerHTML =
					'String: ' +
					string +
					'<br> Character to count: ' +
					character +
					'<br> Occurences found: ' +
					occurences;
			} else {
				alert('Warning!! Character too long!');
			}
		} else {
			alert('Warning!! You should put only a character and not a number!');
		}
	} else {
		alert('Warning!! You should put only a string!');
	}
}

function triangle() {
	divObj = document.getElementById('results6');
	number = parseInt(
		prompt(
			'Type an integer number to specify how much lines you want to draw the triangle:'
		)
	);

	if (isNaN(number)) {
		alert('Warning!! You should put only integer number!');
	} else {
		for (character = '#'; character.length <= number; character += '#') {
			divObj.innerHTML += character + '<br>';
		}
	}
}

function reset() {
	number = prompt(
		'Type a number of the exercise, that you want clear the output:'
	);

	if (isNaN(number)) {
		alert('Warning!! You should put only integer number!');
		exit;
	} else if (number < 1 || number > 6) {
		alert('Warning!! The exercise ' + number + " doesn't exist yet!");
		exit;
	}

	if (number == 1) {
		document.getElementById('results1').innerHTML = '';
	} else if (number == 2) {
		document.getElementById('results2').innerHTML = '';
	} else if (number == 3) {
		document.getElementById('results3').innerHTML = '';
	} else if (number == 4) {
		document.getElementById('results4').innerHTML = '';
	} else if (number == 5) {
		document.getElementById('results5').innerHTML = '';
	} else if (number == 6) {
		document.getElementById('results6').innerHTML = '';
	}
}