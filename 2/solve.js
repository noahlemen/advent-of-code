// Fetch input from input.txt
var fs = require('fs');
var input;
fs.readFile('input.txt', 'utf8', function (err, data) {solve(data)});

function solve(input){

	input = input.split('\n');

	var paper = 0;
	var ribbon = 0;

	for (var i = 0; i < input.length; i++){

		// Split input and sort. 
		// Sort is overridden so it will sort integers properly, least to greatest.
		var present = input[i].split('x').sort(function(a,b){return a - b;});

		// Calculate area of each side.
		sides = [
			present[0]*present[1],
			present[0]*present[2],
			present[1]*present[2]
		];

		// Square feet of wrapping paper needed is surface area + area of smallest side.
		// Since sides[] was sorted, the smallest side will always be at index 0.
		paper += 2*sides[0] + 2*sides[1] + 2*sides[2] + sides[0];

		// Feet of ribbon needed is equal to the shortest distance around its sides, 
		// plus the volume of the present (for the "perfect bow")
		ribbon += 2*present[0] + 2*present[1] + present[0]*present[1]*present[2];

	}

	console.log('Part 1: ' + paper);
	console.log('Part 2: ' + ribbon);

}