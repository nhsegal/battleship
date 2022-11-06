//import game from './gamePlay';
import "./styles.css";
import { computer, human } from "./gamePieces.js";

const playerGB = document.getElementById("playerGB");
const cpuGB = document.getElementById("cpuGB");

const makeGameboard = function (someDiv) {
  for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    let idNum = i;
    if (i < 10) {
      idNum = "0" + String(idNum);
    }
    cell.id = someDiv.id + idNum;
    cell.textContent = idNum;
    cell.addEventListener("click", displayAttack, { once: true });
    someDiv.append(cell);
  }
};

const displayAttack = function (e) {
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
  } else {
    e.target.style.color = "white";
  }
  e.target.innerHTML = "X";
  console.log(human.attack(computer, x, y));
};

makeGameboard(playerGB);
makeGameboard(cpuGB);

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

revealCpuShips();
