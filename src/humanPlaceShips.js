import {
  cpuGBcontainer,
  announcements,
  makeGameboard,
  playerGB,
  addCallbackToGameboard,
  removeCallbackFromGameboard,
} from "./dom.js";
import { human, isBlocked } from "./gamePieces.js";

let setShip = false;
const changeShipButton = document.getElementById("changeShip");
let shipIndex = 0;
let currentShip = human.gameboard.fleet[shipIndex];
let escape = false;

// On click callback
const setGridPosition = (e, ship) => {
  let x = e.target.id.slice(-1);
  let y = e.target.id.slice(-2, -1);

  // If the ship is placed and user is not clicking on head of that ship, ignore it
  // Otherwise remove the ship from the occupied array and scrub it off the board
  if (setShip) {
    if (
      !(
        e.target.getAttribute("data-x") == ship.x &&
        e.target.getAttribute("data-y") == ship.y
      )
    ) {
      return;
    } else {
      setShip = false;
      for (let i = 0; i < ship.length; i++) {
        human.gameboard.occupiedSquares.pop();
      }
      let allCells = [...document.querySelectorAll(".cell")];
      allCells.forEach((e) => {
        if (e.dataset.ship === `${ship.name}`) {
          console.log("removing");
          e.classList.remove("set");
        }
      });
      return;
    }
  }

  // If the ship can't fit, don't place it
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
  // If the ship overlaps with another ship, don't place it, just exit
  if (isBlocked(ship, ship.axis, x, y, human.gameboard.occupiedSquares)) {
    console.log(human.gameboard.occupiedSquares);
    console.log(x, y);
    console.log("blocked");
    return;
  }
  /*
  let allCells = [...document.querySelectorAll(".cell")];
  allCells.forEach((e) => {
    if (e.dataset.ship === `${ship.name}`) {
      e.classList.remove("set");
    }
  });
  */
  setShip = true;
  // Place ship, mark the board

  human.gameboard.placeShip(ship.name, x, y, ship.axis);

  for (let i = 0; i < ship.length; i++) {
    let cell = null;
    if (ship.axis === "x") {
      let xcord = parseInt(ship.x) + i;
      cell = document.querySelector(`[data-x="${xcord}"][data-y="${ship.y}"]`);
    }
    if (ship.axis === "y") {
      let ycord = parseInt(ship.y) + i;
      cell = document.querySelector(`[data-x="${ship.x}"][data-y="${ycord}"]`);
    }
    if (i === 0) {
      cell.classList.add("head");
    }
    cell.classList.add("hasShip");
    console.log("adding set");
    escape = true;
    cell.classList.add("set");
    cell.dataset.ship = `${ship.name}`;
  }
  setShip = true;
  changeShipButton.disabled = false;
  return;
};

// Named wrappers necessary so callback can be removed and can take a parameter
const setGridPositionWrapper = (e) => {
  setGridPosition(e, currentShip);
};

// On double-click
const setOrientation = (e, ship) => {
  /*
  if (setShip) {
    setShip = false;
    if (
      e.target.getAttribute("data-x") == ship.x &&
      e.target.getAttribute("data-y") == ship.y
    ) {
      /// Problem below!!
      for (let i = 0; i < ship.length; i++) {
        human.gameboard.occupiedSquares.pop();
      }
    }
  }
  // Clear the ship's position if it is already set
  let allCells = [...document.querySelectorAll(".cell")];
  allCells.forEach((e) => {
    if (e.dataset.ship === `${ship.name}`) {
      e.classList.remove(`set`);
    }
  });

  if (ship.axis === "x" && ship.y <= 10 - ship.length) {
    ship.axis = "y";
  } else if (ship.axis === "y" && ship.x <= 10 - ship.length) {
    ship.axis = "x";
  }
  for (let i = 0; i < ship.length; i++) {
    if (ship.axis === "x") {
      let xcord = parseInt(ship.x) + i;
      let cell = document.querySelector(
        `[data-x="${xcord}"][data-y="${ship.y}"]`
      );
      if (i === 0) {
        cell.classList.add("head");
      }
      cell.classList.add("hasShip");
      cell.dataset.ship = `${ship.name}`;
    }
    if (ship.axis === "y") {
      let ycord = parseInt(ship.y) + i;
      let cell = document.querySelector(
        `[data-x="${ship.x}"][data-y="${ycord}"]`
      );
      if (i === 0) {
        cell.classList.add("head");
      }
      cell.classList.add("hasShip");
      cell.dataset.ship = `${ship.name}`;
    }
  }
  */
};
const setOrientationWrapper = (e) => {
  setOrientation(e, currentShip);
};

// On hover
const hoverEffect = (e, ship) => {
  // If ship is placed, no hover effect
  if (setShip) return;
  //console.log(e.target);

  // If the ship can't fit, no hover effect
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

  // If the ship overlaps, no effect
  if (isBlocked(ship, ship.axis, x, y, human.gameboard.occupiedSquares)) return;

  // Clear the ship's position if it is already set
  let oldPosition = [...document.querySelectorAll(`[data-ship=${ship.name}]`)];
  oldPosition.forEach((e) => {
    if (e.dataset.ship === `${ship.name}`) {
      delete e.dataset.ship;
      e.classList.remove(`hasShip`);
      e.classList.remove(`head`);
    }
  });
  ship.x = e.target.id.slice(-1);
  ship.y = e.target.id.slice(-2, -1);
  for (let i = 0; i < ship.length; i++) {
    if (ship.axis === "x") {
      let xcord = parseInt(ship.x) + i;
      let cell = document.querySelector(
        `[data-x="${xcord}"][data-y="${ship.y}"]`
      );
      if (i === 0) {
        cell.classList.add("head");
      }
      cell.classList.add("hasShip");
      cell.dataset.ship = `${ship.name}`;
    }
    if (ship.axis === "y") {
      let ycord = parseInt(ship.y) + i;
      let cell = document.querySelector(
        `[data-x="${ship.x}"][data-y="${ycord}"]`
      );
      if (i === 0) {
        cell.classList.add("head");
      }
      cell.classList.add("hasShip");
      cell.dataset.ship = `${ship.name}`;
    }
  }
};
const hoverEffectWrapper = (e) => {
  hoverEffect(e, currentShip);
};

// On button press
const getNextShip = () => {
  console.log(human.gameboard.fleet);
  removeCallbackFromGameboard(playerGB, setGridPositionWrapper, "click");
  removeCallbackFromGameboard(playerGB, setOrientationWrapper, "dblclick");
  removeCallbackFromGameboard(playerGB, hoverEffectWrapper, "mouseover");
  shipIndex++;

  if (shipIndex == human.gameboard.fleet.length - 1) {
    changeShipButton.textContent = "Finish";
  }
  if (shipIndex == human.gameboard.fleet.length) {
    console.log("DONE!");
    return;
  }
  currentShip = human.gameboard.fleet[shipIndex];

  changeShipButton.disabled = true;
   addCallbackToGameboard(playerGB, setGridPositionWrapper, "click");
   addCallbackToGameboard(playerGB, setOrientationWrapper, "dblclick");
   addCallbackToGameboard(playerGB, hoverEffectWrapper, "mouseover");
  setShip = false;
  escape = false;
};

changeShipButton.addEventListener("click", getNextShip);

const humanPlaceShips = () => {
  // Hide enemy board
  cpuGBcontainer.style.display = "none";

  // Make the human gameboard once
  makeGameboard(playerGB);

  addCallbackToGameboard(playerGB, setGridPositionWrapper, "click");

  addCallbackToGameboard(playerGB, setOrientationWrapper, "dblclick");

  addCallbackToGameboard(playerGB, hoverEffectWrapper, "mouseover");
};

export { humanPlaceShips };