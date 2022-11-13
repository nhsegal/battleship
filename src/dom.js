import { Fleet } from "./gamePieces.js";

const playerGB = document.getElementById("playerGB");
const cpuGB = document.getElementById("cpuGB");
const cpuGBcontainer = document.getElementById("cpuGBcontainer");
const hitOrMiss = document.getElementById("hit-or-miss");
const announcements = document.getElementById("announcements");
const endGameMsg = document.querySelector("[data-end-game-message]");
const endGameScreen = document.getElementById("end-game-message");
const preGameFleet = document.getElementById("fleet");

const makeGameboard = (someDiv, callback = null) => {
  console.log("here");
  for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    let idNum = i;
    cell.setAttribute("data-x", idNum % 10);
    cell.setAttribute("data-y", Math.floor(idNum / 10));
    if (i < 10) {
      idNum = "0" + String(idNum);
    }
    cell.classList.add("cell");

    cell.id = someDiv.id + idNum;
    if (callback) {
      cell.addEventListener("click", callback);
    }
    someDiv.append(cell);
  }
};

const addCallbackToGameboard = (gameBoardDiv, func, type) => {

    const cells = [
      ...gameBoardDiv.querySelectorAll(`#${gameBoardDiv.id}> .cell`),
    ];
    cells.forEach((cell) => {
      cell.addEventListener(type, func);
    });
  
};

const removeCallbackFromGameboard = (gameBoardDiv, func, type) => {
  const cells = [
    ...gameBoardDiv.querySelectorAll(`#${gameBoardDiv.id}> .cell`),
  ];
  cells.forEach((cell) => {
    cell.removeEventListener(type, func)
  });
};

const makeFleet = (someDiv, callback = null) => {
  let fleetToPlace = Fleet();
  fleetToPlace.forEach((ship) => {
    const shipNameDiv = document.createElement("div");
    shipNameDiv.textContent = ship.name;
    shipNameDiv.setAttribute("data-name", `${ship.name}`);
    const shipBodyDiv = document.createElement("div");
    shipBodyDiv.draggable = true;
    shipBodyDiv.classList.add("ship");
    for (let i = 0; i < ship.length; i++) {
      shipBodyDiv.append(document.createElement("div"));
    }
    someDiv.append(shipNameDiv, shipBodyDiv);
  });
};

const displayAttack = (player, x, y, success) => {
  let loc = null;
  if (player === "computer") {
    loc = `playerGB` + x + y;
  }
  if (player === "human") {
    loc = `cpuGB` + x + y;
  }
  let element = document.getElementById(`${loc}`);
  if (success) {
    element.classList.add("hit");
  } else {
    element.classList.add("miss");
  }
};

export {
  makeGameboard,
  displayAttack,
  playerGB,
  cpuGB,
  hitOrMiss,
  announcements,
  endGameMsg,
  endGameScreen,
  makeFleet,
  preGameFleet,
  cpuGBcontainer,
  addCallbackToGameboard,
  removeCallbackFromGameboard
};
