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
      drone: { name: "MD-I", uses: "Infinite", hooked: true , id: 2 },
      drone2: { name: "MD-V", uses: 15, hooked: false , id: 3},
      drone3: { name: "MD-Ultra", uses: 1, hooked: false, id: 4 },
      points: this.points
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
        /*if (this.cell().item !== false) {
          console.log(this.cell());
        }*/
        break;
      case "south":
        this.south(distance);
        /*if (this.cell().item !== false) {
          console.log(this.cell());
        }*/
        break;
      case "east":
        this.east(distance);
        /*if (this.cell().item !== false) {
          console.log(this.cell());
        }*/
        break;
      case "west":
        this.west(distance);
        /*if (this.cell().item !== false) {
          console.log(this.cell());
        }*/
        break;
      default:
        break;
    }
  }
  look(type) {
    if (type === "look big") {
      console.log("look at 5 x 5");
    } else {
      console.log("look at 3 x 3");
    }
  }
  check(id) {
    if (id === "inventory") {
      console.log(this.bag);
      cellCheck(false);
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
    } else if (["look", "look big"].includes(id)) {
      this.look(id);
      return false;
    } else if (["inventory"].includes(id)) {
      this.check(id);
      return true;
    }
    return;
  }
}

var sprite = new Character(sheet, undefined);
function setBag() {
  sprite.bag.inside.push(sprite.bag.drone);
  sprite.bag.inside.push(sprite.bag.points);  
}

setBag();
// sprite.north();

// module.exports = {
// 	sprite: sprite
// }