// Fetch input from input.txt
var fs = require('fs');
var input;
fs.readFile('input.txt', 'utf8', function (err, data) {solve(data)});

function solve(input){

	input = input.split('\n');

	var nice_strings = 0;

	for (var i = 0; i < input.length; i++){
		if (input[i].match(/([aeiou].*){3,}/i) && 
			input[i].match(/([a-z])\1/i) && 
			!input[i].match(/ab|cd|pq|xy/i)){
			nice_strings++;
		}
	}

	console.log('Part 1: ' + nice_strings);

	nice_strings = 0;

	for (var i = 0; i < input.length; i++){
		if (input[i].match(/([a-z][a-z]).*\1/i) && 
			input[i].match(/([a-z])[a-z]\1/i)){
			nice_strings++;
		}
	}

	console.log('Part 2: ' + nice_strings);

}