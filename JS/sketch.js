/* Sketch 
var picked;
var drawSheet = true;

function setup() {
  createCanvas(300, 300);
  // mainCanvas = createCanvas(300, 300);
  // mainCanvas.parent("canvasHolder");
  rectMode(CENTER);
}

function draw() {
  background('orange');
  picked = sheet.cells(sprite.pos.x, sprite.pos.y, 2, 2, 'grow');
  for (var row in picked.sheet) {
    row = picked.sheet[row];
    var r = picked.sheet.indexOf(row);
    for (var cell in row) {
      // var c = parceInt(c);
      cell = row[cell];
      var c = row.indexOf(cell);
      fill(cell.color);
      noStroke();
      var p5Position= {
              x: (c + 1) ** 2 - c ** 2,
              y: (r + 1) ** 2 - r ** 2
            }
      let wide = width / picked.width;
      let high = height / picked.height;
      rect((p5Position.x * wide) / 2, (p5Position.y * high) / 2, wide, high);
    }
  }
  // var c = sprite.cell();
  // var wide = width / picked.width;
  // var high = height / picked.height;
  // circle((c.p5Pos.x * wide) / 2, (c.p5Pos.y * high) / 2, wide);
}
*/

/* Sketch */

// var drawSheet = true;
// var picked = sheet;
var canvas;
function setup() {
  mainCanvas = createCanvas(300, 300);
  mainCanvas.parent("canvasHolder");
  rectMode(CENTER);
}

function draw() {
  background('orange');
  if (view === 3) {
    threeView();
  } else if (view === 5) {
    fiveView();
  } else if (view === 'full') {
    fullView();
  }
}//*/

function fullView() {
  var picked = sheet;
  for (var row in picked.sheet) {
    row = picked.sheet[row];
    for (var cell in row) {
      cell = row[cell];
      fill(cell.color);
      noStroke();
      let wide = width / picked.width;
      let high = height / picked.height;
      rect((cell.p5Pos.x * wide) / 2, (cell.p5Pos.y * high) / 2, wide, high);
    }
  }
  var c = sprite.cell();
  var wide = width / picked.width;
  var high = height / picked.height;
  circle((c.p5Pos.x * wide) / 2, (c.p5Pos.y * high) / 2, wide);
}

function fiveView() {
  background('orange');
  picked = sheet.cells(sprite.pos.x, sprite.pos.y, 2, 2, 'grow');
  for (var row in picked.sheet) {
    row = picked.sheet[row];
    var r = picked.sheet.indexOf(row);
    for (var cell in row) {
      // var c = parceInt(c);
      cell = row[cell];
      var c = row.indexOf(cell);
      fill(cell.color);
      noStroke();
      var p5Position= {
              x: (c + 1) ** 2 - c ** 2,
              y: (r + 1) ** 2 - r ** 2
            }
      let wide = width / picked.width;
      let high = height / picked.height;
      rect((p5Position.x * wide) / 2, (p5Position.y * high) / 2, wide, high);
    }
  }
  var wide = width / picked.width;
  var high = height / picked.height;
  fill('black');
  circle((5 * wide) / 2, (5 * high) / 2, wide);
}

function threeView() {
  background('orange');
  picked = sheet.cells(sprite.pos.x, sprite.pos.y, 1, 1, 'grow');
  for (var row in picked.sheet) {
    row = picked.sheet[row];
    var r = picked.sheet.indexOf(row);
    for (var cell in row) {
      // var c = parceInt(c);
      cell = row[cell];
      var c = row.indexOf(cell);
      fill(cell.color);
      noStroke();
      var p5Position= {
              x: (c + 1) ** 2 - c ** 2,
              y: (r + 1) ** 2 - r ** 2
            }
      let wide = width / picked.width;
      let high = height / picked.height;
      rect((p5Position.x * wide) / 2, (p5Position.y * high) / 2, wide, high);
    }
  }
  // var c = sprite.cell();
  var wide = width / picked.width;
  var high = height / picked.height;
  fill('black');
  circle((3 * wide) / 2, (3 * high) / 2, wide);
}