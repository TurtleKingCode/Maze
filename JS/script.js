/* Script.js */

// const readline = require('readline-sync');

// const sheetsJS = require('./sheets.js');
// const spriteJS = require('./sprite.js');

// const prompt = readline.question;

// const sheet = sheetsJS.sheet;
// const sprite = spriteJS.sprite;
// const colorSheet = sheetsJS.colorSheet;

function write(txt) {
  var screen = document.querySelector('#screen');
  screen.value += '\n' + txt;
  screen.scrollTop = screen.scrollHeight;
}
var startGame;

function ask(question) {
  write(question);
  $("#console").val('');
  var inputVal;
  return new Promise((resolve, reject) => {
    $("form").submit(function(e) {
      inputVal = $("#console").val();
      // write(inputVal);
      // write('-----------')
      // console.log(inputVal);
      resolve(inputVal);
    });
  }).then(
    function(resolve) {
      write(inputVal);
      write("");
      return resolve;
    });
}

String.prototype.clean = function(t = 1) {
  return t === 1 ? this.toLowerCase().replace(/\s+/g, "") : this.trim().toLowerCase().replace(/\s+/g, " ");
};

async function gameStart() {
  write("Wassup playa!!! ");
  write("It's Your FAVORITE GAME BOT!");
  write("✨  CLYDE  ✨ Ready To Play!");
  write("But what matters the most is whether or not YOU are ready to play.");
  while (true) {
    startGame = await ask("Soo... Are You??? (yes, no) \n");
    startGame  = startGame.clean();
    if (startGame === "yes") {
      startGame = true;
      break;
    } else if (startGame === "no") {
      startGame = false;
      break;
    } else {
      write("Sorry, I don't know what you said");
      write("Try again...");
      continue;
    }
  }

  if (!startGame) {
    write("Welp! That's too bad!");
    write("👋 Bye! 👋");
    $("#console").val("");
  } else if (startGame) {
    write("A-Right!!!");
    sprite.title = await ask("Now, Let's get your name...\n");
    write(`Well ${sprite.title}, Get ready to go on a Little Adventure`);
    write("");
    cellCheck();
  }
}
async function start() {
  if (startGame) {
    write("Go to the RADICAL Repository behind this project.");
    write("https://github.com/TurtleKingCode/Maze");
    write("");
    write("OKAY, with that out of the way, It's time to actually PLAY!!!");
    write("................................................................")
    write("");
    startGame = false;
    cellCheck();
  } else {
    writeLocation(true);
  }
}

async function road() {
  if (sprite.cell().item !== false) {
    item();
  }
  writeLocation(true);
}

async function item() {
  var newItem = sprite.bag[Object.keys(sprite.bag)[sprite.cell().item]];
  if (sprite.bag.inside.includes(newItem)) {
  } else {
  write('....................................');
  write('....................................');
  sprite.bag.inside.push(newItem);
  write('-----------NOW-----------')
  sprite.check("inventory")
  write('....................................');
  write('....................................');
  }
}

async function goal() {
  $('#console').val('');
  view = 'full';
  write('CONGRATS!!! YOU JUST COMPLETED THE MAZE!!');
  write(`Along the way, you gained ${sprite.points} points.`);
  write(`Thank\'s for participating in this game ${sprite.name}!!!`);
  write(`I can't wait until I get to play another game with you!!!`);
  write(`Clyde OUT.👋👋👋`)
}

async function move(open) {
  m = await ask("What are your commands?\n")
  m = m.clean(2);
  var index;
  var longHand = [
    "north",
    "south",
    "east",
    "west",
    "view",
    "view more",
    "inventory",
    "points"
  ];
  var shortHand = [
    "n",
    "s",
    "e",
    "w",
    "v",
    "vm",
    'i',
    'p'
  ];
  if (shortHand.includes(m) || longHand.includes(m)) {
    index = shortHand.includes(m) ? shortHand.indexOf(m) : longHand.indexOf(m);
    var real = longHand[index];
    if (['north', 'south', 'east', 'west'].includes(real)) {
      if (open.includes(real)) {
        sprite.move(real);
        cellCheck();
      } else {
        write(`${sprite.title}, You cannot go ${real};`);
        write("");
        move(open);
      }
    } else {
      sprite.action(real);
      cellCheck();
    }
  } else {
    write("");
    write("I don't understand:(");
    write("Try Again");
    write("");
    move(open);
  }
}

async function writeLocation(s=false) {
  var name = sprite.cell().name;
  var pos = sprite.cell().inPos;
  var what;
  var openCells = [];
  write(`You are on ${name},`);
  write(`Your [zero index] coordinates are (${pos.x}, ${pos.y})`);
  write("");
  if (s === true) {
    for (var dir in ["north", "south", "east", "west"]) {
      dir = ["north", "south", "east", "west"][dir];
      var type = sprite.cell(sprite.pos.x, sprite.pos.y, dir).type;
      openCells.push(dir);
      switch (type) {
        case "road1":
          what = "a road cell";
          if (sprite.cell(sprite.pos.x, sprite.pos.y, dir).item !== false) {
            what = "a road cell with an item";
          }
          break;
        case "road2":
          what = "a road cell";
          if (sprite.cell(sprite.pos.x, sprite.pos.y, dir).item !== false) {
            what = "a road cell with an item";
          }
          break;
        case "wall":
          what = "a wall";
          openCells.pop();
          break;
        case "start":
          what = "The Start Cell";
          break;
        case "goal":
          what = "A Goal Cell";
          break;
        case "special":
          what = "A Special Cell";
          break;
        default:
          what = "An Undefined Cell";
          break;
      }
      if (dir === "north") {
        write(`There is ${what} ${dir},`);
      } else if (dir === "west") {
        write(`And`);
        write(`${what} ${dir},`);
      } else {
        write(`${what} ${dir},`);
      }
    }
  move(openCells);
  }
}

async function cellCheck() {
  var type = sprite.cell().type;
  switch (type) {
    case "start":
      start();
      break;
    case "road1":
      road();
      break;
    case "road2":
      road();
      break;
    case "goal":
      goal();
    default:
      break;
  }
}



gameStart();
// colorSheet();
// cellCheck();
// console.log(sheet.sheet[3][14])
// sprite.north();





/*
* Complete CSS <= Mandatory
* Complete Hookup <= Finished
* Dropped Item Functionality <= Finished
* Point System Functionality <= Finished
* Looking View Functionality <= Finished
* Reached Goal Functionality <= Finished
* Moving Functionality <= Finished

check out why your input get's inputted multiple times

*/