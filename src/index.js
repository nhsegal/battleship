import "./styles.css";
import { computer, human } from "./gamePieces.js";
import { 
  game
} from "./gamePlay.js";

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

game()
// Need to code reset


//revealPlayerShips();
//makeFleet(preGameFleet)

