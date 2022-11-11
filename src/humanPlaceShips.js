import {
  cpuGBcontainer,
  announcements,
  makeGameboard,
  playerGB,
  addCallbackToGameboard,
} from "./dom.js";
import { human } from "./gamePieces.js";



let setShip = false;

const setGridPosition = (e, ship) => {
  let x = e.target.id.slice(-1);
  let y = e.target.id.slice(-2, -1);
  if (ship.axis === "x") {
    if (x > 10 - ship.length) {
      return;
    }
  }
  if (ship.axis === "y") {
    if (y > 10 - ship.length) {
      return;
    }
  }
  // Clear the ship's position if it is already set
  let oldPosition =[...document.querySelectorAll(`.${ship.name}`)];
    oldPosition.forEach(e => {
      e.classList.remove(`${ship.name}`);
      e.classList.remove(`hasShip`);
  });
  ship.x = e.target.id.slice(-1);
  ship.y = e.target.id.slice(-2, -1);
  for (let i = 0; i < ship.length; i++) {
    if (ship.axis === "x") {
      let xcord = parseInt(ship.x) +i
      let cell = document.querySelector(`[data-x="${xcord}"][data-y="${ship.y}"]`);
      cell.classList.add("hasShip");
      cell.classList.add(`${ship.name}`);
    }
    if (ship.axis === "y") {
      let ycord = parseInt(ship.y) +i
      let cell = document.querySelector(`[data-x="${ship.x}"][data-y="${ycord}"]`);
      cell.classList.add("hasShip");
      cell.classList.add(`${ship.name}`);
    }
    setShip = !setShip;
    
  }
 // console.log(e.target);
 // console.log(ship);
};

const setOrientation = (e, ship) => {
  console.log(ship.axis)
   // Clear the ship's position if it is already set
   let oldPosition =[...document.querySelectorAll(`.${ship.name}`)];
   oldPosition.forEach(e => {
     e.classList.remove(`${ship.name}`);
     e.classList.remove(`hasShip`);
 });
 if (ship.axis === "x" && ship.y <= 10 - ship.length) {
  ship.axis = "y";
 }
 else if (ship.axis === "y"  && ship.x <= 10 - ship.length) {
  ship.axis = "x";
 }
 for (let i = 0; i < ship.length; i++) {
   if (ship.axis ==="x"){
    let xcord = parseInt(ship.x) +i;
    let cell = document.querySelector(`[data-x="${xcord}"][data-y="${ship.y}"]`);
    cell.classList.add("hasShip");
    cell.classList.add(`${ship.name}`);
   }
  
  if (ship.axis === "y") {
    let ycord = parseInt(ship.y) +i;
    let cell = document.querySelector(`[data-x="${ship.x}"][data-y="${ycord}"]`);
    cell.classList.add("hasShip");
    cell.classList.add(`${ship.name}`);
  }
 }
  console.log(ship);
};

const hoverEffect = (e, ship) => {
  if (setShip) return
  let x = e.target.id.slice(-1);
  let y = e.target.id.slice(-2, -1);
  if (ship.axis === "x") {
    if (x > 10 - ship.length) {
      return;
    }
  }
  if (ship.axis === "y") {
    if (y > 10 - ship.length) {
      return;
    }
  }
  // Clear the ship's position if it is already set
  let oldPosition =[...document.querySelectorAll(`.${ship.name}`)];
    oldPosition.forEach(e => {
      e.classList.remove(`${ship.name}`);
      e.classList.remove(`hasShip`);
  });
  ship.x = e.target.id.slice(-1);
  ship.y = e.target.id.slice(-2, -1);
  for (let i = 0; i < ship.length; i++) {
    if (ship.axis === "x") {
      let xcord = parseInt(ship.x) +i
      let cell = document.querySelector(`[data-x="${xcord}"][data-y="${ship.y}"]`);
      cell.classList.add("hasShip");
      cell.classList.add(`${ship.name}`);
    }
    if (ship.axis === "y") {
      let ycord = parseInt(ship.y) +i
      let cell = document.querySelector(`[data-x="${ship.x}"][data-y="${ycord}"]`);
      cell.classList.add("hasShip");
      cell.classList.add(`${ship.name}`);
    }
    
  }
 // console.log(e.target);
 // console.log(ship);
}

const humanPlaceShips = () => {
  // Hide enemy board
  cpuGBcontainer.style.display = "none";

  // Make the human gameboard once
  makeGameboard(playerGB);
  
  addCallbackToGameboard(playerGB, (e) => {
    setGridPosition(e, human.gameboard.fleet[0]);
  }, 'click');

  addCallbackToGameboard(playerGB, (e) => {
    setOrientation(e, human.gameboard.fleet[0]);
  }, 'dblclick');

  addCallbackToGameboard(playerGB, (e) => {
    hoverEffect(e, human.gameboard.fleet[0]);
  }, 'mouseover');


  // playerGB, test);
  //human.gameboard.fleet[0].x = null;
  //human.gameboard.fleet[0].y = null;

  let i = 0;
  //while (i< human.gameboard.fleet.length){

  if (
    human.gameboard.fleet[i].x !== null &&
    human.gameboard.fleet[i].y !== null
  ) {
    i++;
  }
  //}

  console.log(human.gameboard.fleet);
};

export { humanPlaceShips };
