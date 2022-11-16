/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCallbackToGameboard": () => (/* binding */ addCallbackToGameboard),
/* harmony export */   "announcements": () => (/* binding */ announcements),
/* harmony export */   "cpuGB": () => (/* binding */ cpuGB),
/* harmony export */   "cpuGBcontainer": () => (/* binding */ cpuGBcontainer),
/* harmony export */   "displayAttack": () => (/* binding */ displayAttack),
/* harmony export */   "endGameMsg": () => (/* binding */ endGameMsg),
/* harmony export */   "endGameScreen": () => (/* binding */ endGameScreen),
/* harmony export */   "hitOrMiss": () => (/* binding */ hitOrMiss),
/* harmony export */   "makeFleet": () => (/* binding */ makeFleet),
/* harmony export */   "makeGameboard": () => (/* binding */ makeGameboard),
/* harmony export */   "playerGB": () => (/* binding */ playerGB),
/* harmony export */   "preGameFleet": () => (/* binding */ preGameFleet),
/* harmony export */   "removeCallbackFromGameboard": () => (/* binding */ removeCallbackFromGameboard)
/* harmony export */ });
/* harmony import */ var _gamePieces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamePieces.js */ "./src/gamePieces.js");


const playerGB = document.getElementById("playerGB");
const cpuGB = document.getElementById("cpuGB");
const cpuGBcontainer = document.getElementById("cpuGBcontainer");
const hitOrMiss = document.getElementById("hit-or-miss");
const announcements = document.getElementById("announcements");
const endGameMsg = document.querySelector("[data-end-game-message]");
const endGameScreen = document.getElementById("end-game-message");
const preGameFleet = document.getElementById("fleet");



const makeGameboard = (someDiv, callback = null) => {
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
  let fleetToPlace = (0,_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.Fleet)();
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
  let parent = null;
  if (player === "computer") {
    parent = 'playerGB';
  }
  if (player === "human") {
    parent = 'cpuGB'
  }

  let whichBoard = document.getElementById(`${parent}`);
  let element = whichBoard.querySelector(`[data-x="${x}"][data-y="${y}"]`); 
  if (success) {
    element.classList.add("hit");
  } else {
    element.classList.add("miss");
  }
};




/***/ }),

/***/ "./src/gamePieces.js":
/*!***************************!*\
  !*** ./src/gamePieces.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fleet": () => (/* binding */ Fleet),
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "computer": () => (/* binding */ computer),
/* harmony export */   "human": () => (/* binding */ human),
/* harmony export */   "isBlocked": () => (/* binding */ isBlocked)
/* harmony export */ });
const Ship = (len, name = null, xi = null, yi = null, _axis = "x") => {
  let _hitNumber = 0;
  const x = xi;
  const y = yi;
  const axis = _axis;
  let length = len;
  const hit = () => {
    _hitNumber = _hitNumber + 1;
    return _hitNumber;
  };
  const isSunk = () => {
    if (_hitNumber >= length) {
      return true;
    }
    return false;
  };
  return {
    length,
    name,
    x,
    y,
    axis,
    get hitNumber() {
      return _hitNumber;
    },
    set setHits(val) {
      _hitNumber = val;
    },
    hit,
    isSunk,
  };
};

const Fleet = () => {
  return [
    Ship(5, "Carrier"),
    Ship(4, "Battleship"),
    Ship(3, "Cruiser"),
    Ship(3, "Submarine"),
    Ship(2, "Destroyer"),
  ];
};

const Gameboard = () => {
  const boardLength = 10;
  const fleet = Fleet();
  const occupiedSquares = [];
  const placeShip = (name, xi, yi, axis) => {
    let ship = fleet.filter((item) => item.name === name)[0];
    if (xi < 0 || xi > boardLength - 1 || yi < 0 || yi > boardLength - 1) {
      throw new Error("Location out of bounds");
    }
    if (
      (axis === "x" && xi > boardLength - ship.length) ||
      (axis === "y" && yi > boardLength - ship.length)
    ) {
      throw new Error("Ship partially out of bounds");
    }

    if (axis === "x") {
      for (let i = 0; i < ship.length; i++) {
        if (
          occupiedSquares.filter(
            (entry) => entry.x === xi + i && entry.y === yi
          ).length > 0
        ) {
          throw new Error("Another ship is in the way");
        }
      }
    }
    if (axis === "y") {
      for (let i = 0; i < ship.length; i++) {
        if (
          occupiedSquares.filter(
            (entry) => entry.x === xi && entry.y === yi + i
          ).length > 0
        ) {
          throw new Error("Another ship is in the way");
        }
      }
    }

    ship.x = parseInt(xi);
    ship.y = parseInt(yi);
    ship.axis = axis;

    // If the ship is already in the array, modify it.
    if (occupiedSquares.filter(e  => e.name === ship.name).length > 0) {
      let shipStart = occupiedSquares.filter(e=> e.name === ship.name)[0]
      for (let i = 0; i < ship.length; i++) {
        if (axis === "x") {
          shipStart.x = ship.x + 1;
          shipStart.y = ship.y;
        } else {
          shipStart.x = ship.x;
          shipStart.y = ship.y + 1;
        }
      }
      return ship
    }

    // Else push the ship to the array
    for (let i = 0; i < ship.length; i++) {
      if (axis === "x") {
        occupiedSquares.push({ x: ship.x + i, y: ship.y, name: ship.name });
      } else {
        occupiedSquares.push({ x: ship.x, y: ship.y + i, name: ship.name });
      }
    }
    return ship;
  };



  const shotRecord = [];
  const receiveAttack = (x, y) => {
    x = parseInt(x);
    y = parseInt(y);
    shotRecord.push({ x, y });
    let success = false;
    fleet.forEach((ship) => {
      if (ship.axis === "x") {
        if (x >= ship.x && x < ship.x + ship.length && y === ship.y) {
          ship.hit();
          success = true;
          return success;
        }
      } else if (ship.axis === "y") {
        if (x === ship.x && y >= ship.y && y < ship.y + ship.length) {
          ship.hit();
          success = true;
          return success;
        }
      }
    });
    return success;
  };
  const allSunk = () => {
    return fleet.every((ship) => ship.isSunk());
  };

  return {
    boardLength,
    fleet,
    occupiedSquares,
    placeShip,
    shotRecord,
    receiveAttack,
    allSunk,
  };
};

const Player = (_name = null) => {
  const name = _name;
  const gameboard = Gameboard();
  const attack = (opponent, _x, _y) => {
    let x = parseInt(_x);
    let y = parseInt(_y);
    if (
      x < 0 ||
      x >= opponent.gameboard.boardLength ||
      y < 0 ||
      y >= opponent.gameboard.boardLength
    ) {
      throw new Error("Attack out of bounds");
    }
    if (
      opponent.gameboard.shotRecord.filter((e) => e.x === x && e.y === y)
        .length != 0
    ) {
      throw new Error("Attack redundant");
    }
    return { success: opponent.gameboard.receiveAttack(x, y), x, y };
  };

  const randomlyPlaceShips = () => {
    gameboard.fleet.forEach((ship, index, arr) => {
      let orientation = Math.random();
      let xpos = null;
      let ypos = null;
      let axis = null;
      // Randomally pick an axis location that fits the ship
      if (orientation > 0.5) {
        axis = "x";
        xpos = Math.floor(
          Math.random() * (gameboard.boardLength - ship.length)
        );
        ypos = Math.floor(Math.random() * gameboard.boardLength);
      } else {
        axis = "y";
        xpos = Math.floor(Math.random() * gameboard.boardLength);
        ypos = Math.floor(
          Math.random() * (gameboard.boardLength - ship.length)
        );
      }

      // If it clashes with a placed ship repick by recursion
      while (isBlocked(ship, axis, xpos, ypos, gameboard.occupiedSquares)) {
        orientation = Math.random();
        if (orientation > 0.5) {
          axis = "x";
          xpos = Math.floor(
            Math.random() * (gameboard.boardLength - ship.length)
          );
          ypos = Math.floor(Math.random() * gameboard.boardLength);
        } else {
          axis = "y";
          xpos = Math.floor(Math.random() * gameboard.boardLength);
          ypos = Math.floor(
            Math.random() * (gameboard.boardLength - ship.length)
          );
        }
      }
      gameboard.placeShip(ship.name, xpos, ypos, axis);
    });
  };

  return {
    name,
    gameboard,
    attack,
    randomlyPlaceShips,
  };
};

let human = Player("You");
let computer = Player("Computer");

// Give computer an attack strategy
computer.randomAttack = function (enemy) {
  let x = Math.floor(Math.random() * enemy.gameboard.boardLength);
  let y = Math.floor(Math.random() * enemy.gameboard.boardLength);
  while (
    enemy.gameboard.shotRecord.filter((e) => e.x === x && e.y === y).length != 0
  ) {
    x = Math.floor(Math.random() * enemy.gameboard.boardLength);
    y = Math.floor(Math.random() * enemy.gameboard.boardLength);
  }
  //  Returns true if success
  return computer.attack(enemy, x, y);
};

// isBlocked() helps computer place its ships
function isBlocked(ship, axis, xpos, ypos, occSqArr) {
  let coOrdinatesToTest = [];
  if (axis === "x") {
    for (let i = 0; i < ship.length; i++) {
      coOrdinatesToTest.push({ x: parseInt(xpos) + i, y: parseInt(ypos) });
    }
  } else if (axis === "y") {
    for (let i = 0; i < ship.length; i++) {
      coOrdinatesToTest.push({ x: parseInt(xpos), y: parseInt(ypos) + i });
    }
  }
  for (let i = 0; i < coOrdinatesToTest.length; i++) {
    if (
      occSqArr.filter(
        (e) =>
          e.x == coOrdinatesToTest[i].x &&
          e.y == coOrdinatesToTest[i].y &&
          e.x !== null &&
          e.y !== null &&
          e.name !== ship.name
      ).length > 0
    ) {
      return true;
    }
  }
  return false;
}

computer.randomlyPlaceShips();
//human.randomlyPlaceShips();




/***/ }),

/***/ "./src/gamePlay.js":
/*!*************************!*\
  !*** ./src/gamePlay.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _gamePieces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamePieces.js */ "./src/gamePieces.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");




const revealCPUShips = () => {
  for (const ship of _gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.computer.gameboard.fleet) {
    for (let i = 0; i < ship.length; i++) {
      let x = ship.x;
      let y = ship.y;
      if (ship.axis === "x") {
        x = x + i;
      } else {
        y = y + i;
      }
      let element = _dom_js__WEBPACK_IMPORTED_MODULE_1__.cpuGB.querySelector( `[data-x="${x}"][data-y="${y}"]`);
      element.classList.add("hasShip");
      element.setAttribute("data-name", `${ship.name}`);
    }
  }
};

const game = () => {
  let gameOver = false;
  let boardLocked = false;

  const playerTurn = function (e) {
    if (gameOver) return;
    if (e.target.matches(".hit") || e.target.matches(".miss")) {
      return;
    }
    if (boardLocked) {
      return;
    }
    boardLocked = true;
    _dom_js__WEBPACK_IMPORTED_MODULE_1__.announcements.textContent = "";
   
    let x = e.target.getAttribute("data-x");
    let y = e.target.getAttribute("data-y");
  
    let before = countSunkShips(_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.computer);
    let attack = _gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.human.attack(_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.computer, x, y);
   
    if (attack.success) {
      _dom_js__WEBPACK_IMPORTED_MODULE_1__.hitOrMiss.textContent = "You hit the enemy!";
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayAttack)("human", attack.x, attack.y, true);
      let after = countSunkShips(_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.computer);
      if (after.count > before.count) {
        let newlySunk = after.list
          .filter((name) => !before.list.includes(name))[0]
          .toLowerCase();
        _dom_js__WEBPACK_IMPORTED_MODULE_1__.announcements.textContent = `You sunk a ${newlySunk}!`;
      }
      if (_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.computer.gameboard.allSunk()) {
        _dom_js__WEBPACK_IMPORTED_MODULE_1__.endGameMsg.textContent = "You won!";
        _dom_js__WEBPACK_IMPORTED_MODULE_1__.endGameScreen.classList.add("show");
        gameOver = true;
        return;
      }
    } else {
      _dom_js__WEBPACK_IMPORTED_MODULE_1__.hitOrMiss.textContent = "You missed!";
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayAttack)("human", attack.x, attack.y, false);
    }
    setTimeout(computerTurn, 1000);
  };

  const computerTurn = function () {
    let before = countSunkShips(_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.human);
    let attack = _gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.computer.randomAttack(_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.human);
    if (attack.success) {
      _dom_js__WEBPACK_IMPORTED_MODULE_1__.hitOrMiss.textContent = "You've been hit!";
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayAttack)("computer", attack.x, attack.y, true);
      let after = countSunkShips(_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.human);
      if (after.count > before.count) {
        let newlySunk = after.list
          .filter((name) => !before.list.includes(name))[0]
          .toLowerCase();
        _dom_js__WEBPACK_IMPORTED_MODULE_1__.announcements.textContent = `They sunk your ${newlySunk}!`;
      }
      if (_gamePieces_js__WEBPACK_IMPORTED_MODULE_0__.human.gameboard.allSunk()) {
        _dom_js__WEBPACK_IMPORTED_MODULE_1__.endGameMsg.textContent = "You lost!";
        _dom_js__WEBPACK_IMPORTED_MODULE_1__.endGameScreen.classList.add("show");
        gameOver = true;
        return;
      }
    } else {
      _dom_js__WEBPACK_IMPORTED_MODULE_1__.hitOrMiss.textContent = "They missed!";
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.displayAttack)("computer", attack.x, attack.y, false);
    }
    boardLocked = false;
  };

  const countSunkShips = function (player) {
    let count = 0;
    let list = [];
    player.gameboard.fleet.forEach((ship) => {
      if (ship.isSunk()) {
        list.push(ship.name);
        count++;
      }
    });
    return { count, list };
  };

  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.makeGameboard)(_dom_js__WEBPACK_IMPORTED_MODULE_1__.cpuGB, playerTurn);
  revealCPUShips();
};



/***/ }),

/***/ "./src/humanPlaceShips.js":
/*!********************************!*\
  !*** ./src/humanPlaceShips.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "humanPlaceShips": () => (/* binding */ humanPlaceShips)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamePieces.js */ "./src/gamePieces.js");
/* harmony import */ var _gamePlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamePlay.js */ "./src/gamePlay.js");




let setShip = false;
const changeShipButton = document.getElementById("changeShip");
let shipIndex = 0;
let currentShip = _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.fleet[shipIndex];

// On click callback
const setGridPosition = (e, ship) => {
  let x = e.target.getAttribute("data-x");
  let y = e.target.getAttribute("data-y");

  // If the ship is placed and user is not clicking on head of that ship, ignore it
  // Otherwise remove the ship from the occupied array and scrub it off the board
  if (setShip) {
    if (!(x == ship.x && y == ship.y)) {
      return;
    } else {
      setShip = false;
      changeShipButton.disabled = true;
      for (let i = 0; i < ship.length; i++) {
        _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.occupiedSquares.pop();
      }
      let allCells = [...document.querySelectorAll(".cell")];
      allCells.forEach((e) => {
        if (e.dataset.ship === `${ship.name}`) {
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
  if ((0,_gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.isBlocked)(ship, ship.axis, x, y, _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.occupiedSquares)) {
    console.log(_gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.occupiedSquares);
    console.log("blocked");
    return;
  }

  setShip = true;
  // Place ship, mark the board

  _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.placeShip(ship.name, x, y, ship.axis);

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
  if (
    e.target.getAttribute("data-x") == ship.x &&
    e.target.getAttribute("data-y") == ship.y &&
    setShip === true
  ) {
    /// Problem below!!
    setShip = false;
    changeShipButton.disabled = true;
    for (let i = 0; i < ship.length; i++) {
      _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.occupiedSquares.pop();
    }
  }

  // Clear the ship's position if it is already set
  let allCells = [...document.querySelectorAll(".cell")];
  allCells.forEach((e) => {
    if (e.dataset.ship === `${ship.name}`) {
      e.classList.remove(`set`);
      e.classList.remove("hasShip");
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
};

const setOrientationWrapper = (e) => {
  setOrientation(e, currentShip);
};

// On hover
const hoverEffect = (e, ship) => {
  // If ship is placed, no hover effect
  if (setShip) return;

  // If the ship can't fit, no hover effect
  let x = e.target.getAttribute("data-x");
  let y = e.target.getAttribute("data-y");

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
  if ((0,_gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.isBlocked)(ship, ship.axis, x, y, _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.occupiedSquares)) return;

  // Clear the ship's position if it is already set
  let oldPosition = [...document.querySelectorAll(`[data-ship=${ship.name}]`)];
  oldPosition.forEach((e) => {
    if (e.dataset.ship === `${ship.name}`) {
      delete e.dataset.ship;
      e.classList.remove(`hasShip`);
      e.classList.remove(`head`);
    }
  });
  ship.x = e.target.getAttribute("data-x");
  ship.y = e.target.getAttribute("data-y");

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
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.removeCallbackFromGameboard)(_dom_js__WEBPACK_IMPORTED_MODULE_0__.playerGB, setGridPositionWrapper, "click");
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.removeCallbackFromGameboard)(_dom_js__WEBPACK_IMPORTED_MODULE_0__.playerGB, setOrientationWrapper, "dblclick");
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.removeCallbackFromGameboard)(_dom_js__WEBPACK_IMPORTED_MODULE_0__.playerGB, hoverEffectWrapper, "mouseover");
  shipIndex++;

  if (shipIndex == _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.fleet.length - 1) {
    changeShipButton.textContent = "Finish";
  }
  if (shipIndex == _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.fleet.length) {
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.announcements.textContent = "";
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.announcements.classList.remove("instructions");
    changeShipButton.style.display = "none";
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.cpuGBcontainer.style.display = "block";
    let allCells = [...document.querySelectorAll(".cell")];
    allCells.forEach((e) => {
      e.classList.remove("head");
      e.classList.add("gameOn");
    });

    (0,_gamePlay_js__WEBPACK_IMPORTED_MODULE_2__.game)();
    return;
  }
  currentShip = _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.fleet[shipIndex];

  changeShipButton.disabled = true;
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addCallbackToGameboard)(_dom_js__WEBPACK_IMPORTED_MODULE_0__.playerGB, setGridPositionWrapper, "click");
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addCallbackToGameboard)(_dom_js__WEBPACK_IMPORTED_MODULE_0__.playerGB, setOrientationWrapper, "dblclick");
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addCallbackToGameboard)(_dom_js__WEBPACK_IMPORTED_MODULE_0__.playerGB, hoverEffectWrapper, "mouseover");
  setShip = false;
};

changeShipButton.addEventListener("click", getNextShip);

const instructions = () => {
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.announcements.innerHTML =
    "Click on a cell to place a ship. Clicking on the head of the most recently placed ship allows you to move it again. <br/> &nbsp <br/> Double-clicking changes the ship's oriention. <br/> &nbsp <br/>When you finish placing ships, attack your oopponent by clicking on their board.";
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.announcements.classList.add("instructions");
};

const humanPlaceShips = () => {
  // Hide enemy board
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.cpuGBcontainer.style.display = "none";
  instructions();

  // Make the human gameboard once
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.makeGameboard)(_dom_js__WEBPACK_IMPORTED_MODULE_0__.playerGB);
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addCallbackToGameboard)(_dom_js__WEBPACK_IMPORTED_MODULE_0__.playerGB, setGridPositionWrapper, "click");
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addCallbackToGameboard)(_dom_js__WEBPACK_IMPORTED_MODULE_0__.playerGB, setOrientationWrapper, "dblclick");
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addCallbackToGameboard)(_dom_js__WEBPACK_IMPORTED_MODULE_0__.playerGB, hoverEffectWrapper, "mouseover");
};

const restartButton = document.getElementById("restart-button");
const reset = () => {
  _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.occupiedSquares.length = 0;
  _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.shotRecord.length = 0;
  _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.computer.gameboard.occupiedSquares.length = 0;
  _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.computer.gameboard.shotRecord.length = 0;

  _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.fleet.forEach((ship) => {
    ship.x = null;
    ship.y = null;
    ship.setHits = 0;
  });
  _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.computer.gameboard.fleet.forEach((ship) => {
    ship.x = null;
    ship.y = null;
    ship.setHits = 0;
  });
  while (_dom_js__WEBPACK_IMPORTED_MODULE_0__.cpuGB.firstChild) {
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.cpuGB.removeChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.cpuGB.lastChild);
  }
  while (_dom_js__WEBPACK_IMPORTED_MODULE_0__.playerGB.firstChild) {
    _dom_js__WEBPACK_IMPORTED_MODULE_0__.playerGB.removeChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.playerGB.lastChild);
  }
  _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.computer.randomlyPlaceShips();
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.endGameScreen.classList.remove("show");
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.endGameMsg.textContent = "";
  _dom_js__WEBPACK_IMPORTED_MODULE_0__.hitOrMiss.textContent = "";
  setShip = false;
  shipIndex = 0;
  currentShip = _gamePieces_js__WEBPACK_IMPORTED_MODULE_1__.human.gameboard.fleet[shipIndex];
  changeShipButton.style.display = "block";
  changeShipButton.disabled = true;
  changeShipButton.textContent = "Get next ship";
  humanPlaceShips();
};

restartButton.addEventListener("click", reset);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _humanPlaceShips_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./humanPlaceShips.js */ "./src/humanPlaceShips.js");
//import css from "./styles.css";



(0,_humanPlaceShips_js__WEBPACK_IMPORTED_MODULE_0__.humanPlaceShips)();

})();

/******/ })()
;
//# sourceMappingURL=bundle5d4770c5b67e19682f01.js.map