// Fetch input from input.txt
var fs = require('fs');
var input;
fs.readFile('input.txt', 'utf8', function (err, data) {solve(data)});

var lights = [];
var lights2 = [];

function solve(input){
	input = input.split('\n');

	for (var i = 0; i < input.length; i++){
		var instruction = parse(input[i]);
		light_part_one(instruction);
		light_part_two(instruction);
	}

	console.log(count_part_one());
	console.log(count_part_two());
}

function parse(str){
	var coords = str.match(/(.+) (\d+),(\d+) through (\d+),(\d+)/);
	return {
		action: coords[1],
		start: {
			x: parseInt(coords[2]),
			y: parseInt(coords[3])
		},
		end: {
			x: parseInt(coords[4]),
			y: parseInt(coords[5])
		}
	}
}

function light_part_one(instruction){

	for (var x = instruction.start.x; x <= instruction.end.x; x++){

		if (lights[x] == undefined) lights[x] = [];

		for (var y = instruction.start.y; y <= instruction.end.y; y++){

			if (instruction.action == 'turn on'){
				lights[x][y] = true;
			} else if (instruction.action == 'turn off'){
				lights[x][y] = false;
			} else if (instruction.action == 'toggle'){
				lights[x][y] = !lights[x][y];
			}

		}
	}

}

function count_part_one(){

	var lights_lit = 0;

	for (var x = 0; x <= 999; x++){
		if (lights[x] == undefined) continue;
		for (var y = 0; y <= 999; y++){
			if (lights[x][y]) lights_lit++;
		}
	}

	return lights_lit;
}

function light_part_two(instruction){

	for (var x = instruction.start.x; x <= instruction.end.x; x++){

		if (lights2[x] == undefined) lights2[x] = [];

		for (var y = instruction.start.y; y <= instruction.end.y; y++){

			if (!lights2[x][y]) lights2[x][y] = 0;

			if (instruction.action == 'turn on'){
				lights2[x][y]++;
			} else if (instruction.action == 'turn off'){
				lights2[x][y] -= lights2[x][y] < 1 ? 0 : 1;
			} else if (instruction.action == 'toggle'){
				lights2[x][y] += 2;
			}

		}
	}
}

function count_part_two(){

	var brightness = 0;

	for (var x = 0; x <= 999; x++){
		if (lights2[x] == undefined) continue;
		for (var y = 0; y <= 999; y++){
			if (lights2[x][y]) brightness += lights2[x][y];
		}
	}

	return brightness;

}