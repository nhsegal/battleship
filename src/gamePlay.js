import fire_shot from './fire_shot.mp3';
import shot_hit from './shot_hit.mp3';
import shot_miss from './shot_miss.mp3';
import { computer, human } from "./gamePieces.js";
import {
  makeGameboard, 
  displayAttack, 
  cpuGB, 
  hitOrMiss, 
  announcements, 
  endGameMsg, 
  endGameScreen, 
  
} from "./dom.js";

const fireShot = new Audio(fire_shot);
const shotHit = new Audio(shot_hit);
const shotMiss = new Audio(shot_miss);
fireShot.load();
shotHit.load();

const revealCPUShips = () => {
  for (const ship of computer.gameboard.fleet) {
    for (let i = 0; i < ship.length; i++) {
      let x = ship.x;
      let y = ship.y;
      if (ship.axis === "x") {
        x = x + i;
      } else {
        y = y + i;
      }
      let element = cpuGB.querySelector( `[data-x="${x}"][data-y="${y}"]`);
      element.classList.add("hasShip");
      element.setAttribute("data-name", `${ship.name}`);
    }
  }
};

const game = () => {
  let gameOver = false;
  let boardLocked = false;

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
   
    let x = e.target.getAttribute("data-x");
    let y = e.target.getAttribute("data-y");
  
    let before = countSunkShips(computer);
    fireShot.play();
    let attack = human.attack(computer, x, y);
   
    if (attack.success) {
      shotHit.play();
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
    fireShot.play();
    let attack = computer.randomAttack(human);
    if (attack.success) {
      shotHit.play()
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

  makeGameboard(cpuGB, playerTurn);
  revealCPUShips();
};

export { game }