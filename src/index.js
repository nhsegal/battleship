import "./styles.css";
import { computer, human } from "./gamePieces.js";
import { makeGameboard, displayAttack, playerGB, cpuGB } from "./dom";

/*
const revealCpuShips = () => {
  for (const ship of computer.gameboard.fleet) {
    let loc = null;
    for (let i = 0; i < ship.length; i++) {
      let x = ship.x;
      let y = ship.y;
      if (ship.axis === "x") {
        x = x + i;
      } else {
        y = y + i;
      }
      loc = `cpuGB` + x + y;
      let element = document.getElementById(`${loc}`);
      element.style.color = "blue";
      element.innerHTML = "&#8226";
    }
  }
};

*/

let gameOver = false;

//if gameend
// announce result, allow for newgame/reset


const playerTurn = function (e) {
  if (gameOver) return;
  let y = parseInt(e.target.id.slice(-2)) % 10;
  let x = Math.floor(parseInt(e.target.id.slice(-2)) / 10);
  let before = countSunkShips(computer);
  let attack = human.attack(computer, x, y);
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
      gameOver = true;
      return
    }
  }
  else {
    console.log("You missed!");
    displayAttack('human', attack.x, attack.y, false);
  }
  computerTurn();
}

const computerTurn = function(){
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
      gameOver = true;
      return;
    }
  } else {
    console.log("They missed!");
    displayAttack('computer', attack.x, attack.y, false)
  }
}

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


let test = function() {console.log('hdsafasdasdf')}
makeGameboard(cpuGB, playerTurn);
makeGameboard(playerGB);
