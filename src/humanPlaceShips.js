import { cpuGBcontainer, announcements,  makeGameboard, playerGB, addClickCallbackToGameboard } from "./dom.js";
import { human } from "./gamePieces.js";

// MakeGameboard adds an event click listener 
// but I need a mouseover listener as well

/*
const showShipToPlace = (ship) => {
  announcements.textContent = `Place your ${ship.name.toLowercase()}.`;
  if (ship.axis === 'x') {

  }
}
*/

const setGridPosition = (e, ship) => {
  let x = e.target.id.slice(-1);
  let y= e.target.id.slice(-2,-1);
  if (ship.axis === 'x') {
    if (x > 10 - ship.length) {
      return
    }
  }

  if (ship.axis === 'y') {
    if (y > 10 - ship.length) {
      return
    }
  }
  ship.x= e.target.id.slice(-1);
  ship.y= e.target.id.slice(-2,-1);
  console.log(ship)
}

const setOrientation = (ship) => {
  if (ship.axis === 'x') {
    ship.axis = 'y';
  }
  if (ship.axis === 'y') {
    ship.axis = 'y';
  }
  console.log(ship)
}

const humanPlaceShips = () => {
  // Hide enemy board
  cpuGBcontainer.style.display = "none";

  // Make the human gameboard once
  makeGameboard(playerGB);
  addClickCallbackToGameboard(playerGB, (e) => {setGridPosition(e,human.gameboard.fleet[0])})
    
   // playerGB, test);
  //human.gameboard.fleet[0].x = null;
  //human.gameboard.fleet[0].y = null;
  
  let i = 0; 
  //while (i< human.gameboard.fleet.length){
 
   
    if (human.gameboard.fleet[i].x !== null && human.gameboard.fleet[i].y !== null) {
      i++;
    }
  //}
  
  console.log(human.gameboard.fleet)


  
};

export { humanPlaceShips };
