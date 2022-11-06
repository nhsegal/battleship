import { computer, human } from "./gamePieces.js";
import { displayAttack } from "./dom";

let turn = 0;
let humanMove = null;

const mouseAttack = function (e) {
  let returnValue = false;
  let y = parseInt(e.target.id.slice(-2)) % 10;
  let x = Math.floor(parseInt(e.target.id.slice(-2)) / 10);
  let hitShips = computer.gameboard.fleet.filter(
    (ship) =>
      (ship.axis === "x" &&
        x >= ship.x &&
        x < ship.x + ship.length &&
        ship.y === y) ||
      (ship.axis === "y" &&
        y >= ship.y &&
        y < ship.y + ship.length &&
        ship.x === x)
  );
  if (hitShips.length > 0) {
    e.target.style.color = "red";
    humanMove = true;
    returnValue = true;
  } else {
    e.target.style.color = "white";
    humanMove = false;
    returnValue = false;
  }
  e.target.innerHTML = "X";
 //console.log(human.attack(computer, x, y));
  turn++;
  return returnValue;
};

const playGame = function () {
  while (!human.gameboard.allSunk() && !computer.gameboard.allSunk()) {
    // Human goes first
    if (turn % 2 === 0) {
      let before = countSunkShips(computer);
      let attack = human.randomAttack(computer);
      if (attack.success) {
        console.log("You hit the enemy!");
        displayAttack('human', attack.x, attack.y, true)
        let after = countSunkShips(computer);
        if (after.count > before.count) {
          let newlySunk = after.list
            .filter((name) => !before.list.includes(name))[0]
            .toLowerCase();
          console.log(`You sunk a ${newlySunk}!`);
        }
        if (computer.gameboard.allSunk()) {
          console.log("You won!");
          return turn;
        }
      }
      else {
        console.log("You missed!");
        displayAttack('human', attack.x, attack.y, false)
      }
      turn++;
    }
    // Computer's turn
    else {
      let before = countSunkShips(human);
      let attack = computer.randomAttack(human);
      if (attack.success) {
        console.log("You've been hit!");
        displayAttack('computer', attack.x, attack.y, true)
        let after = countSunkShips(human);
        if (after.count > before.count) {
          let newlySunk = after.list
            .filter((name) => !before.list.includes(name))[0]
            .toLowerCase();
          console.log(`They sunk your ${newlySunk}!`);
        }
        if (human.gameboard.allSunk()) {
          console.log("You lost!");
          return turn;
        }
      } else {
        console.log("They missed!");
        displayAttack('computer', attack.x, attack.y, false)
      }
      turn++;
    }
  }
};
//if gameend
// announce result, allow for newgame/reset

const countSunkShips = function (player) {
  let count = 0;
  let list = [];
  player.gameboard.fleet.forEach((ship) => {
    if (ship.isSunk()) {
      list.push(ship.name);
      count++;
    }
  });
  return { count, list };
};

export { playGame, mouseAttack };
