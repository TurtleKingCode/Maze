/* Sheets */
// https://ewcscripps.brightspotcdn.com/dims4/default/c2559e9/2147483647/strip/true/crop/1000x563+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F74%2F98%2F0bea81ff4a32a34d4b55267fa52b%2Fenchant-christmas.jpg
var view = 3;
// view = 5 or 'full'
class Sheet {
  constructor(height, width, start = undefined) {
    this.width = width;
    this.height = height;
    this.types = [
      "plain",
      "road1",
      "road2",
      "wall",
      "goal",
      "special",
      "start"
    ];
    this.colors = [
      "#000000",
      "green",
      "red",
      "black",
      // "#4caf50",
      // "#ffffff",
      // "#8bc34a",
      // "red",
      // "#000000",
      // "#00873E",
      "#42f581",
      "#f542b6",
      "#03fc0f"
    ];
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
            item: false,
            points: 0,
            readPos: {
              x: c + 1,
              y: r + 1
            },
            inPos: {
              x: c,
              y: r
            },
            p5Pos: {
              x: (c + 1) ** 2 - c ** 2,
              y: (r + 1) ** 2 - r ** 2
            }
          };
          row.push(cell);
        }
        sheet.push(row);
      }
      return sheet;
    };
    this.sheet = this.createSheet();
    this.copy = function() {
      var sheet = new Sheet(this.height, this.width, this.start);
      return sheet;
    };
    this.cell = function(x, y, r = true) {
      var c = new Sheet(1, 1);
      c.sheet[0][0] = r ? this.sheet[y - 1][x - 1] : this.sheet[y][x];
      return c;
    };
    this.fake = function() {
      var f = new Sheet(1, 1);
      var cell = {
        name: 'edge',
        type: 'edge',
        color: 'rgba(100, 100, 100, 1)',
        readPos: {
          x: null,
          y: null
        },
        inPos: {
          x: null,
          y: null,
        },
        p5Pos: {
          x: null,
          y: null
        }
      }
      f.sheet[0][0] = cell;
      return f;
    }
    this.start =
      start === undefined ? start : this.cell(start.x, start.y, false);
  }
  name(prop = "") {
    if (prop === "") {
      var table = this.sheet.map((x) => {
        var c = x.map((x) => x.name);
        return c;
      });
      return table;
    } else if (prop === "clone") {
      var sheet = this.copy();
      var table = sheet.sheet.map((x) => {
        var c = x.map((x) => x.name);
        return c;
      });
      name;
      return table;
    } else {
      this.sheet.forEach((x) => {
        x.forEach((xx) => (xx.name = prop));
      });
    }
  };
  color(prop = "") {
    if (prop === "") {
      var table = this.sheet.map((x) => {
        var c = x.map((x) => x.color);
        return c;
      });
      return table;
    } else if (prop === "clone") {
      var sheet = this.copy();
      var table = sheet.sheet.map((x) => {
        var c = x.map((x) => x.color);
        return c;
      });
      return table;
    } else {
      this.sheet.forEach((x) => {
        x.forEach((xx) => (xx.color = prop));
      });
    }
  };
  type = function(prop = "") {
    if (prop === "") {
      var table = this.sheet.map((x) => {
        var c = x.map((x) => x.type);
        return c;
      });
      return table;
    } else if (prop === "clone") {
      var sheet = this.copy();
      var table = sheet.sheet.map((x) => {
        var c = x.map((x) => x.type);
        return c;
      });
      return table;
    } else {
      this.sheet.forEach((x) => {
        x.forEach((xx) => (xx.type = prop));
      });
    }
  };
  item(prop = "") {
    if (prop === "") {
      var table = this.sheet.map((x) => {
        var c = x.map((x) => x.item);
        return c;
      });
      return table;
    } else if (prop === "clone") {
      var sheet = this.copy();
      var table = sheet.sheet.map((x) => {
        var c = x.map((x) => x.item);
        return c;
      });
      return table;
    } else {
      this.sheet.forEach((x) => {
        x.forEach((xx) => (xx.item = prop));
      });
    }
  };
  points(prop = "") {
    if (prop === "") {
      var table = this.sheet.map((x) => {
        var c = x.map((x) => x.points);
        return c;
      });
      return table;
    } else if (prop === "clone") {
      var sheet = this.copy();
      var table = sheet.sheet.map((x) => {
        var c = x.map((x) => x.points);
        return c;
      });
      return table;
    } else {
      this.sheet.forEach((x) => {
        x.forEach((xx) => (xx.points = prop));
      });
    }
  };
  p5Pos = function(prop = "") {
    if (prop === "") {
      var table = this.sheet.map((x) => {
        var c = x.map((x) => x.p5Pos);
        return c;
      });
      return table;
    } else if (prop === "clone") {
      var sheet = this.copy();
      var table = sheet.sheet.map((x) => {
        var c = x.map((x) => x.p5Pos);
        return c;
      });
      return table;
    } else {
      this.sheet.forEach((x) => {
        x.forEach((xx) => (xx.p5Pos = prop));
      });
    }
  };
  inPos = function(prop = "") {
    if (prop === "") {
      var table = this.sheet.map((x) => {
        var c = x.map((x) => x.inPos);
        return c;
      });
      return table;
    } else if (prop === "clone") {
      var sheet = this.copy();
      var table = sheet.sheet.map((x) => {
        var c = x.map((x) => x.inPos);
        return c;
      });
      return table;
    } else {
      this.sheet.forEach((x) => {
        x.forEach((xx) => (xx.inPos = prop));
      });
    }
  };
  readPos = function(prop = "") {
    if (prop === "") {
      var table = this.sheet.map((x) => {
        var c = x.map((x) => x.readPos);
        return c;
      });
      return table;
    } else if (prop === "clone") {
      var sheet = this.copy();
      var table = sheet.sheet.map((x) => {
        var c = x.map((x) => x.readPos);
        return c;
      });
      return table;
    } else {
      this.sheet.forEach((x) => {
        x.forEach((xx) => (xx.readPos = prop));
      });
    }
  };
  changeType(t = "wall") {
    var i = this.types.indexOf(t);
    this.color(this.colors[i]);
    this.type(t);
    if (t === "road1" || t === "road2") {
      this.points(1);
    }
  }
  hor(r, x1, x2, t = "") {
    var n = x2 - 1;
    if (t.includes("index") == false) {
      r--;
      x1--;
      if (t.includes("length") == false) {
        x2--;
      }
    }
    if (t.includes("length") == false) {
      n = Math.abs(x2 - x1);
    } // else {n = x2 - 1;}
    if (t.includes("exclude") == false) {
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
  ver(c, y1, y2, t = "") {
    var n = y2 - 1;
    if (t.includes("index") == false) {
      c--;
      y1--;
      if (t.includes("length") == false) {
        y2--;
      }
    }
    if (t.includes("length") == false) {
      n = Math.abs(y2 - y1);
    } // else {n = y2 - 1;}
    if (t.includes("exclude") == false) {
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
  cells(x1, y1, x2, y2, t = "") {
    var w, h;
    var x, y;
    if (t.includes("index") == false) {
      x1--;
      y1--;
    }
    if (t.includes("size") == true) {
      x = x1;
      y = y1;
      w = x2;
      h = y2;
    } else if (t.includes("grow") == true) {
      x = x1 - x2;
      y = y1 - y2;
      w = x2 * 2 + 1;
      h = y2 * 2 + 1;
    } else {
      if (t.includes("index") == false) {
        x2--;
        y2--;
      }
      x = x1;
      y = y1;
      w = Math.abs(x2 - x1);
      h = Math.abs(y2 - y1);
      if (t.includes("exclude") == false) {
        w++;
        h++;
      }
    }
    var sheet = new Sheet(h, w);
    sheet.name(this.fake().sheet[0][0].name);
    sheet.color(this.fake().sheet[0][0].color);
    sheet.readPos(this.fake().sheet[0][0].readPos);
    sheet.inPos(this.fake().sheet[0][0].inPos);
    sheet.p5Pos(this.fake().sheet[0][0].p5Pos);
    for (var r = 0; r < h; r++) {
      for (var c = 0; c < w; c++) {
        try {
          if (this.sheet[y + r][x + c] !== undefined) {
            if (y + r >= 0 && x + c >= 0) {
              sheet.sheet[r][c] = this.sheet[y + r][x + c];
            } else {
              // throw new Error('We Don\'t accept Negatives.');
            }
          }
        } catch (err) {
          sheet.sheet[r][c] = this.fake().sheet[0][0];
        }
      }
    }
    return sheet;
  }
  row(y, r = true) {
    var row = new Sheet(1, this.width);
    y = r ? y - 1 : y;
    for (var cell in this.sheet[y]) {
      row.sheet[0][cell] = this.sheet[y][cell];
    }
    return row;
  }
  column(x, r = true) {
    var column = new Sheet(this.height, 1);
    x = r ? x - 1 : x;
    for (var cell in this.sheet) {
      column.sheet[cell][0] = this.sheet[cell][x];
    }
    return column;
  }
}

function colorSheet() {
  sheet.start.changeType("start");
  sheet.start.name("The Start Cell");
  sheet.row(1).changeType();
  sheet.column(1).changeType();
  sheet.row(15).changeType();
  sheet.column(15).changeType();
  var hor = [
    [3, 3, 7],
    [3, 11, 3],
    [5, 3, 7],
    [5, 11, 3],
    [7, 5, 7],
    [9, 5, 7],
    [9, 13, 3],
    [11, 3, 13],
    [13, 2, 2],
    [13, 5, 9]
  ];
  var ver = [
    [3, 5, 7],
    [13, 7, 2]
  ];
  var cell = [
    [9, 4],
    [13, 4],
    [5, 8],
    [11, 6],
    [13, 12]
  ];
  var itemHolders = [
    [12, 4],
    [6, 8],
    [12, 6],
    [8, 4],
    [12, 12],
    [2, 14]
  ];
  for (var h in hor) {
    h = hor[h];
    sheet.hor(h[0], h[1], h[2], "length").changeType();
  }
  for (var v in ver) {
    v = ver[v];
    sheet.ver(v[0], v[1], v[2], "length").changeType();
  }
  for (var c in cell) {
    c = cell[c];
    sheet.cell(c[0], c[1]).changeType();
  }
  for (var i in itemHolders) {
    i = itemHolders[i];
    sheet.cell(i[0], i[1]).item(3);
  }
  // GOAL
  sheet.cell(14, 10).changeType("goal");
  sheet.cell(14, 12).changeType("goal");

  for (var row in sheet.sheet) {
    for (var column in sheet.sheet[row]) {
      var c = sheet.sheet[row][column];
      if (c.type === "plain") {
        var newType = row % 2 === column % 2 ? "road2" : "road1";
        sheet.cell(column, row, false).changeType(newType);
      }
    }
  }
}
var sheet = new Sheet(15, 15, {
  x: 1,
  y: 1
});
colorSheet();

// module.exports = {
// 	sheet: sheet,
// 	colorSheet: colorSheet
// }
/*
To Do:
*/

var inputBox = $("#inputSection");

function getUserInput() {
  inputBox.val("");
  return new Promise((resolve, reject) => {
    $("form").submit(function(e) {
      const inputVal = $("#inputSection").val();
      resolve(inputVal);
    });
  });
}