var drawSheet = true;
var picked = sheet;

function setup() {
	createCanvas(300, 300);
	rectMode(CENTER);
}

function draw() {
	for (var row in picked.sheet) {
		row = picked.sheet[row];
		for(var cell in row) {
			cell = row[cell];
			fill(cell.color);
			noStroke();
			var wide = width/picked.width;
			var high = height/picked.height;
			rect(cell.p5Pos.x*wide/2, cell.p5Pos.y*high/2, wide, high)
		}
	}
}
