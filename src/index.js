import "./styles.css";
import { human } from "./gamePieces.js";
import { 
  makeGameboard, 
  announcements,
  endGameMsg,
  endGameScreen,
  makeFleet,
  preGameFleet
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




makeGameboard(playerGB);
revealPlayerShips();
makeFleet(preGameFleet)

