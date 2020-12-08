class Sheet {
	constructor (height, width) {
		this.width = width;
		this.height = height;
		this.types = ['plain', 'road', 'wall', 'goal', 'special'];
		this.colors = ['#ffffff', '#f56f42', '#000000', '#42f581', '#f542b6']
		this.defaultColor = this.colors[0];
		this.defaultType = this.types[0];
		this.createSheet = function() {
			var sheet = [];
			for (var r = 0; r < this.height; r++) {
				var row = [];
				for (var c = 0; c < this.width; c++) {
					var cell = {
						name: `Cell ${c}:${r}`,
						type: this.defaultType,
						color: this.defaultColor,
						readPos: {
							x: c + 1,
							y: r + 1
						},
						inPos: {
							x: c,
							y: r
						},
						p5Pos: {
							x: ((c+1)**2) - (c**2),
							y: ((r+1)**2) - (r**2)
						}
					}
					row.push(cell);
				}
				sheet.push(row);
			}
			return sheet;
		}
		this.sheet = this.createSheet();
		this.copy = function() {
			var sheet = new Sheet(this.height, this.width);
			return sheet;
		}
	}
	name = function(prop = '') {
		if (prop === '') {
			var table = this.sheet.map(x => {
				var c = x.map( x => x.name );
				return c;
			});
			return table;
		} else if (prop === 'clone') {
			var sheet = this.copy();
			var table = sheet.sheet.map(x => {
				var c = x.map( x => x.name );
				return c;
			});name
			return table;
		} else {
			this.sheet.forEach((x) => {x.forEach(xx => xx.name = prop);});
		}
	}
	color = function(prop = '') {
		if (prop === '') {
			var table = this.sheet.map(x => {
				var c = x.map( x => x.color );
				return c;
			});
			return table;
		} else if (prop === 'clone') {
			var sheet = this.copy();
			var table = sheet.sheet.map(x => {
				var c = x.map( x => x.color );
				return c;
			});name
			return table;
		} else {
			this.sheet.forEach((x) => {x.forEach(xx => xx.color = prop);});
		}
	}
	type = function(prop = '') {
		if (prop === '') {
			var table = this.sheet.map(x => {
				var c = x.map( x => x.type );
				return c;
			});
			return table;
		} else if (prop === 'clone') {
			var sheet = this.copy();
			var table = sheet.sheet.map(x => {
				var c = x.map( x => x.type );
				return c;
			});name
			return table;
		} else {
			this.sheet.forEach((x) => {x.forEach(xx => xx.type = prop);});
		}
	}
	readPos = function(prop = '') {
		if (prop === '') {
			var table = this.sheet.map(x => {
				var c = x.map( x => x.readPos );
				return c;
			});
			return table;
		} else if (prop === 'clone') {
			var sheet = this.copy();
			var table = sheet.sheet.map(x => {
				var c = x.map( x => x.readPos );
				return c;
			});name
			return table;
		} else {
			this.sheet.forEach((x) => {x.forEach(xx => xx.readPos = prop);});
		}
	}
	inPos = function(prop = '') {
		if (prop === '') {
			var table = this.sheet.map(x => {
				var c = x.map( x => x.inPos );
				return c;
			});
			return table;
		} else if (prop === 'clone') {
			var sheet = this.copy();
			var table = sheet.sheet.map(x => {
				var c = x.map( x => x.inPos );
				return c;
			});
			return table;
		} else {
			this.sheet.forEach((x) => {x.forEach(xx => xx.inPos = prop);});
		}
	}
	p5Pos = function(prop = '') {
		if (prop === '') {
			var table = this.sheet.map(x => {
				var c = x.map( x => x.p5Pos );
				return c;
			});
			return table;
		} else if (prop === 'clone') {
			var sheet = this.copy();
			var table = sheet.sheet.map(x => {
				var c = x.map( x => x.p5Pos );
				return c;
			});
			return table;
		} else {
			this.sheet.forEach((x) => {x.forEach(xx => xx.p5Pos = prop);});
		}
	}
	changeType(t = 'wall') {
		var i = this.types.indexOf(t);
		this.color(this.colors[i]);
		this.type(t);
	}
	cell(x, y, r = true) {
		var c = new Sheet(1, 1);
		if (r = true) {
			c.sheet[0][0] = this.sheet[y-1][x-1];
		} else {
			c.sheet[0][0] = this.sheet[y][x];
		}
		return c;
	}
	hor(r, x1, x2, t = '') {
		var n = x2 - 1;
		if (t.includes('index') == false) {
			r--;
			x1--;
			if (t.includes('length') == false) {x2--}
		}
		if (t.includes('length') == false) {
			n = Math.abs(x2 - x1);
		}// else {n = x2 - 1;}
		if (t.includes('exclude') == false) {
			n++;
		}
		var s = new Sheet(1, n);
		for (var c = 0; c < n; c++) {
			try {
				if (this.sheet[r][x1 + c] !== undefined) {
					s.sheet[0][c] = this.sheet[r][x1 + c];
				}
			} catch (err) {
				return s;
			}
		}
		return s;
	}
	ver(c, y1, y2, t = '') {
		var n = y2 - 1;
		if (t.includes('index') == false) {
			c--;
			y1--;
			if (t.includes('length') == false) {y2--}
		}
		if (t.includes('length') == false) {
			n = Math.abs(y2 - y1);
		}// else {n = y2 - 1;}
		if (t.includes('exclude') == false) {
			n++;
		}
		var s = new Sheet(n, 1);
		for (var r = 0; r < n; r++) {
			try {
				if (this.sheet[y1 + r][c] !== undefined) {
					s.sheet[r][0] = this.sheet[y1 + r][c];
				}
			} catch (err) {
				return s;
			}
		}
		return s;
	}
	cells (x1, y1, x2, y2, t = '') {
		var w, h;
		var x, y;
		if (t.includes('index') == false) {x1--; y1--;}
		if (t.includes('size') == true) {
			x = x1;
			y = y1;
			w = x2;
			h = y2;
		} else if (t.includes('grow') == true){
			x = x1 - x2;
			y = y1 - y2;
			w = x2 * 2 + 1;
			h = y2 * 2 + 1;
		} else {
			if (t.includes('index') == false) {x2--; y2--;}
			x = x1;
			y = y1;
			w = Math.abs(x2 - x1);
			h = Math.abs(y2 - y1);
			if (t.includes('exclude') == false) {w++; h++;}
		}
		var sheet = new Sheet(h, w);
		for (var r = 0; r < h; r++) {
			for (var c = 0; c < w; c++) {
				try {
					if (this.sheet[y + r][x + c] !== undefined) {
						sheet.sheet[r][c] = this.sheet[y + r][x + c];
					}
				} catch (err) {
					return sheet;
				}
			}
		}
		return sheet;
	}
	row (y, r = true) {
		var row = new Sheet(1, this.width);
		y = r ? y - 1 : y;
		for (var cell in this.sheet[y]) {
			row.sheet[0][cell] = this.sheet[y][cell];
		}
		return row;
	}
	column (x, r = true) {
		var column = new Sheet(this.height, 1);
		x = r ? x - 1 : x;
		for (var cell in this.sheet) {
			column.sheet[cell][0] = this.sheet[cell][x];
		}
		return column;
	}
}
var sheet = new Sheet(15,15);
function colorSheet() {
	sheet.row(1).color('#000000');
	sheet.column(1).color('#000000');
	var hor = [
		[3, 3, 7],
		[3, 11, 3],
		[5, 3, 7],
		[5, 11, 3],
		[7, 5, 7],
		[9, 5, 7],
		[9, 13, 2],
		[11, 3, 11],
		[13, 2, 2],
		[13, 5, 9],
		[15, 2, 10],
		[15, 13, 3]
	];
	var ver = [
		[3, 5, 7],
		[13, 7, 2],
		[15, 2, 7],
		[15, 12, 3]
	]
	var cell = [
		[9, 4],
		[13, 4],
		[5, 8],
		[14, 9],
		[13, 12]
	]
	for (var h in hor) {
		h = hor[h];
		sheet.hor(h[0], h[1], h[2], 'length').changeType();
	}
	for (var v in ver) {
		v = ver[v];
		sheet.ver(v[0], v[1], v[2], 'length').changeType();
	}
	// for (var c in cell) {
		// c = cell[c];
		// sheet.cell(c[0], c[1]).changeType();
	// }
}
colorSheet();
console.log('orange');
// console.table(sheet.p5Pos());