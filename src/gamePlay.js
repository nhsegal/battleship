import { computer, human } from "./gamePieces.js";
import {
  makeGameboard,
  displayAttack,
  playerGB,
  cpuGB,
  hitOrMiss,
  announcements,
  endGameMsg,
  endGameScreen,
} from "./dom";

const revealPlayerShips = () => {
  for (const ship of human.gameboard.fleet) {
    let loc = null;
    for (let i = 0; i < ship.length; i++) {
      let x = ship.x;
      let y = ship.y;
      if (ship.axis === "x") {
        x = x + i;
      } else {
        y = y + i;
      }
      loc = `playerGB` + x + y;
      let element = document.getElementById(`${loc}`);
      element.classList.add("hasShip");
    }
  }
};

let gameOver = false;
let boardLocked = false;

// Need to code reset

const playerTurn = function (e) {
  if (gameOver) return;
  if (e.target.matches(".hit") || e.target.matches(".miss")) {
    return;
  }
  if (boardLocked) {
    return;
  }
  boardLocked = true;
  announcements.textContent = "";
  let y = parseInt(e.target.id.slice(-2)) % 10;
  let x = Math.floor(parseInt(e.target.id.slice(-2)) / 10);
  let before = countSunkShips(computer);
  let attack = human.attack(computer, x, y);
  if (attack.success) {
    hitOrMiss.textContent = "You hit the enemy!";
    displayAttack("human", attack.x, attack.y, true);
    let after = countSunkShips(computer);
    if (after.count > before.count) {
      let newlySunk = after.list
        .filter((name) => !before.list.includes(name))[0]
        .toLowerCase();
      announcements.textContent = `You sunk a ${newlySunk}!`;
    }
    if (computer.gameboard.allSunk()) {
      endGameMsg.textContent = "You won!";
      endGameScreen.classList.add("show");
      gameOver = true;
      return;
    }
  } else {
    hitOrMiss.textContent = "You missed!";
    displayAttack("human", attack.x, attack.y, false);
  }
  setTimeout(computerTurn, 1000);
};

const computerTurn = function () {
  let before = countSunkShips(human);
  let attack = computer.randomAttack(human);
  if (attack.success) {
    hitOrMiss.textContent = "You've been hit!";
    displayAttack("computer", attack.x, attack.y, true);
    let after = countSunkShips(human);
    if (after.count > before.count) {
      let newlySunk = after.list
        .filter((name) => !before.list.includes(name))[0]
        .toLowerCase();
      announcements.textContent = `They sunk your ${newlySunk}!`;
    }
    if (human.gameboard.allSunk()) {
      endGameMsg.textContent = "You lost!";
      endGameScreen.classList.add("show");
      gameOver = true;
      return;
    }
  } else {
    hitOrMiss.textContent = "They missed!";
    displayAttack("computer", attack.x, attack.y, false);
  }
  boardLocked = false;
};

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

const game = {
  gameState: "setup",
  placeShips: function () {},
  run: function () {
    makeGameboard(cpuGB, playerTurn);
    makeGameboard(playerGB);
    revealPlayerShips();
  },
};
