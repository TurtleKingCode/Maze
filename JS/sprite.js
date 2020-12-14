/* Sprite */

// const sheetsJS = require('./sheets.js');

// const sheet = sheetsJS.sheet

class Character {
  constructor(map, title) {
    this.map = map;
    this.title = title;
    this.pos = {
      x: this.map.start.sheet[0][0].readPos.x,
      y: this.map.start.sheet[0][0].readPos.y
    };
    this.points = 0;
    this.bag = {
      inside: [],
      outside: [],
      drone: {
        name: "MD-I",
        uses: "Infinite",
        hooked: true,
        id: 2,
        dis: "drone: ",
      },
      drone2: {
        name: "MD-V",
        uses: 15,
        hooked: false,
        id: 3,
        dis: "drone: "
      },
      drone3: {
        name: "MD-Ultra",
        uses: 1,
        hooked: false,
        id: 4
      }
    };
  }
  cell(x, y, info = "data") {
    if (x === undefined && y === undefined) {
      return this.map.cell(this.pos.x, this.pos.y).sheet[0][0];
    } else {
      switch (info) {
        case "data":
          break;
        case "north":
          y--;
          break;
        case "south":
          y++;
          break;
        case "east":
          x++;
          break;
        case "west":
          x--;
          break;
        default:
          break;
      }
      return this.map.cell(x, y).sheet[0][0];
    }
  }
  north(d = "full") {
    if (d === "full" || d == undefined) {
      while (this.cell(this.pos.x, this.pos.y, "north").type !== "wall") {
        this.pos.y--;
        this.points += this.cell().points;
        this.cell().points = 0;
        if (
          this.cell(this.pos.x, this.pos.y, "east").type !== "wall" ||
          this.cell(this.pos.x, this.pos.y, "west").type !== "wall"
        ) {
          break;
        }
      }
    } else {
      return;
    }
  }
  south(d = "full") {
    if (d === "full" || d == undefined) {
      while (this.cell(this.pos.x, this.pos.y, "south").type !== "wall") {
        this.pos.y++;
        this.points += this.cell().points;
        this.cell().points = 0;
        if (
          this.cell(this.pos.x, this.pos.y, "east").type !== "wall" ||
          this.cell(this.pos.x, this.pos.y, "west").type !== "wall"
        ) {
          break;
        }
      }
    } else {
      return;
    }
  }
  east(d = "full") {
    if (d === "full" || d == undefined) {
      while (this.cell(this.pos.x, this.pos.y, "east").type !== "wall") {
        this.pos.x++;
        this.points += this.cell().points;
        this.cell().points = 0;
        if (
          this.cell(this.pos.x, this.pos.y, "north").type !== "wall" ||
          this.cell(this.pos.x, this.pos.y, "south").type !== "wall"
        ) {
          break;
        }
      }
    } else {
      return;
    }
  }
  west(d = "full") {
    if (d === "full" || d == undefined) {
      while (this.cell(this.pos.x, this.pos.y, "west").type !== "wall") {
        this.pos.x--;
        this.points += this.cell().points;
        this.cell().points = 0;
        if (
          this.cell(this.pos.x, this.pos.y, "north").type !== "wall" ||
          this.cell(this.pos.x, this.pos.y, "south").type !== "wall"
        ) {
          break;
        }
      }
    } else {
      return;
    }
  }
  move(direction, distance = "full") {
    switch (direction) {
      case "north":
        this.north(distance);
        view = 3;
        break;
      case "south":
        this.south(distance);
        view = 3;
        break;
      case "east":
        this.east(distance);
        view = 3;
        break;
      case "west":
        this.west(distance);
        view = 3;
        break;
      default:
        view = 3;
        break;
    }
  }
  view(type) {
    if (type === "view more") {
      var viewMore = sprite.bag[Object.keys(sprite.bag)[3]];
      if (this.bag.inside.includes(viewMore)) {
        if (viewMore.uses <= 0) {
          write("................................")
          write("You have used up all of your uses of this drone.")
          write("................................")
        } else {
          view = 5;
          viewMore.uses--;
        }
      } else {
        write("................................")
        write("You do not have the special drone required to see that far.")
        write("................................")
      }
    } else if (type === "view") {
      view = 3;
    }
  }
  check(id) {
    if (id === "inventory") {
      var list = [];
      write("................................")
      write("You have in you bag: ")
      for (var i in this.bag.inside) {
        i = this.bag.inside[i];
        list.push(i.dis + i.name);
      }
      list = list.join('\n')
      write(list);
      write("................................")
      return;
    } else {
      return;
    }
  }
  action(id, a2, open) {
    if (["north", "south", "east", "west"].includes(id)) {
      if (open.includes(id)) {
        this.move(id);
        return true;
      } else {
        write(`You can't go ${id}, there's a wall there`)
        return false;
      }
    } else if (["view", "view more"].includes(id)) {
      this.view(id);
      return false;
    } else if (["inventory"].includes(id)) {
      this.check(id);
      return false;
    } else if (["points"].includes(id)) {
      write('.............................')
      write(`You have ${sprite.points} Points so far`);
      write('.............................')
      return false;
    }
    return;
  }
}

var sprite = new Character(sheet, undefined);

function setBag() {
  sprite.bag.inside.push(sprite.bag.drone);
}

setBag();
// sprite.north();

// module.exports = {
// 	sprite: sprite
// }