import "./styles.css";
import { playGame } from './gamePlay';
import { computer, human } from "./gamePieces.js";
import { makeGameboard, playerGB, cpuGB } from "./dom";


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

makeGameboard(playerGB);
makeGameboard(cpuGB);

revealCpuShips();
// 
playGame();

