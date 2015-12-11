// require md5 lib
var md5 = require('./md5.js').md5;

// Fetch input from input.txt
var fs = require('fs');
var input;
fs.readFile('input.txt', 'utf8', function (err, data) {solve(data)});

function solve(input){

	function findHashInput(num_zeroes){

		var hash = "";

		var zeroes = "";

		for (var i = 0; i < num_zeroes; i++){
			zeroes += "0";
		}

		for (var i = 0; hash.indexOf(zeroes) != 0; i++){

			hash = md5(input + i);

		}

		return i - 1;

	}

	console.log('Part 1: ' + findHashInput(5));
	console.log('Part 2: ' + findHashInput(6));

}