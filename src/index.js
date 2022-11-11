//import css from "./styles.css";
import { humanPlaceShips } from "./humanPlaceShips.js";
import { game } from "./gamePlay.js";

humanPlaceShips()

//game()




/*
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
*/
//revealPlayerShips();
//makeFleet(preGameFleet)

