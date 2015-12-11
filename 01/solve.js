// Fetch input from input.txt
var fs = require('fs');
var input;
fs.readFile('input.txt', 'utf8', function (err, data) {solve(data)});

function solve(input){

	var floor = 0;
	var first_basement;

	for (var i = 0; i < input.length; i++){

		if (input[i] === '(') floor++;
		else if (input[i] === ')') floor--;

		if (floor < 0 && !first_basement) first_basement = i + 1;

	}

	console.log('Part 1: ' + floor);
	console.log('Part 2: ' + first_basement);
	
}