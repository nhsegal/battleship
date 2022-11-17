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

const revealCPUShips = () => {
  for (const ship of computer.gameboard.fleet) {
    for (let i = 0; i < ship.length; i++) {
      let { x } = ship;
      let { y } = ship;
      if (ship.axis === "x") {
        x += i;
      } else {
        y += i;
      }
      const element = cpuGB.querySelector(`[data-x="${x}"][data-y="${y}"]`);
      element.classList.add("hasShip");
      element.setAttribute("data-name", `${ship.name}`);
    }
  }
};

const game = () => {
  let gameOver = false;
  let boardLocked = false;

  const countSunkShips = function (player) {
    let count = 0;
    const list = [];
    player.gameboard.fleet.forEach((ship) => {
      if (ship.isSunk()) {
        list.push(ship.name);
        count++;
      }
    });
    return { count, list };
  };

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

    const x = e.target.getAttribute("data-x");
    const y = e.target.getAttribute("data-y");

    const before = countSunkShips(computer);
    const attack = human.attack(computer, x, y);
    setTimeout(()=>{
      if (attack.success) {
        hitOrMiss.textContent = "You hit the enemy!";
        displayAttack("human", attack.x, attack.y, true);
        const after = countSunkShips(computer);
        if (after.count > before.count) {
          const newlySunk = after.list
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
    },1000);

    setTimeout(computerTurn, 2500);
  };

  const computerTurn = function () {
    const before = countSunkShips(human);
    const attack = computer.strategicAttack(human);
    console.log(attack);
    setTimeout(()=> {
      if (attack.success) {
        hitOrMiss.textContent = "You've been hit!";
        displayAttack("computer", attack.x, attack.y, true);
        const after = countSunkShips(human);
        if (after.count > before.count) {
          const newlySunk = after.list
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
    }
    , 1000);
  
  };

  makeGameboard(cpuGB, playerTurn);
  // revealCPUShips();
};

export { game };
