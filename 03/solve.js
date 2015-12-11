// Fetch input from input.txt
var fs = require('fs');
var input;
fs.readFile('input.txt', 'utf8', function (err, data) {solve(data)});

function solve(input){

	function deliver(santas){

		var house_visit_freq = {
			'0,0': santas
		};

		var total_houses_visited = 1;

		for (var j = 0; j < santas; j++){

			var position = {
				x: 0,
				y: 0
			}

			var current_house = '0,0';

			for (var i = 0; i < input.length; i++){

				// If there if more than one santa, alternate 
				// which santa executes the instruction
				if ( i % santas !== j ) continue;

				switch (input[i]){
					case "^":
						position.y++;
						break;
					case "v":
						position.y--;
						break;
					case "<":
						position.x--;
						break;
					case ">":
						position.x++;
						break;
				}

				current_house = position.x + "," + position.y;

				if (!house_visit_freq[current_house]){
					// if house hasn't been visited, increment number of houses visited
					// and add it to the log of houses visited, with a frequency of 1
					total_houses_visited++;
					house_visit_freq[current_house] = 1;
				} else {
					// if a santa has already visited this house, increment the frequency
					// of visits to this specific house
					house_visit_freq[current_house]++;
				}

			}

		}

		return total_houses_visited;

	}	

	console.log("Part 1: " + deliver(1));
	console.log("Part 2: " + deliver(2));

}