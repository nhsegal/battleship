import {
  cpuGBcontainer,
  announcements,
  makeGameboard,
  playerGB,
  addCallbackToGameboard,
  removeCallbackFromGameboard,
  cpuGB,
  endGameMsg,
  endGameScreen,
  hitOrMiss,
} from './dom.js';
import { computer, human, isBlocked } from './gamePieces.js';
import { game } from './gamePlay.js';

let setShip = false;
const changeShipButton = document.getElementById('changeShip');
let shipIndex = 0;
let currentShip = human.gameboard.fleet[shipIndex];

// On click callback
const setGridPosition = (e, ship) => {
  const x = e.target.getAttribute('data-x');
  const y = e.target.getAttribute('data-y');

  // If the ship is placed and user is not clicking on head of that ship, ignore it
  // Otherwise remove the ship from the occupied array and scrub it off the board
  if (setShip) {
    if (!(x == ship.x && y == ship.y)) {
      return;
    }
    setShip = false;
    changeShipButton.disabled = true;
    for (let i = 0; i < ship.length; i++) {
      human.gameboard.occupiedSquares.pop();
    }
    const allCells = [...document.querySelectorAll('.cell')];
    allCells.forEach((e) => {
      if (e.dataset.ship === `${ship.name}`) {
        e.classList.remove('set');
      }
    });
    return;
  }

  // If the ship can't fit, don't place it
  if (ship.axis === 'x') {
    if (x > 10 - ship.length) {
      return;
    }
  }
  if (ship.axis === 'y') {
    if (y > 10 - ship.length) {
      return;
    }
  }
  // If the ship overlaps with another ship, don't place it, just exit
  if (isBlocked(ship, ship.axis, x, y, human.gameboard.occupiedSquares)) {
    console.log('blocked');
    return;
  }

  setShip = true;
  // Place ship, mark the board

  human.gameboard.placeShip(ship.name, x, y, ship.axis);

  for (let i = 0; i < ship.length; i++) {
    let cell = null;
    if (ship.axis === 'x') {
      const xcord = parseInt(ship.x) + i;
      cell = document.querySelector(`[data-x="${xcord}"][data-y="${ship.y}"]`);
    }
    if (ship.axis === 'y') {
      const ycord = parseInt(ship.y) + i;
      cell = document.querySelector(`[data-x="${ship.x}"][data-y="${ycord}"]`);
    }
    if (i === 0) {
      cell.classList.add('head');
    }
    cell.classList.add('hasShip');

    cell.classList.add('set');
    cell.dataset.ship = `${ship.name}`;
  }
  setShip = true;
  changeShipButton.disabled = false;
};

// Named wrappers necessary so callback can be removed and can take a parameter
const setGridPositionWrapper = (e) => {
  setGridPosition(e, currentShip);
};

// On double-click
const setOrientation = (e, ship) => {
  if (
    e.target.getAttribute('data-x') == ship.x
    && e.target.getAttribute('data-y') == ship.y
    && setShip === true
  ) {
    /// Problem below!!
    setShip = false;
    changeShipButton.disabled = true;
    for (let i = 0; i < ship.length; i++) {
      human.gameboard.occupiedSquares.pop();
    }
  }

  // Clear the ship's position if it is already set
  const allCells = [...document.querySelectorAll('.cell')];
  allCells.forEach((e) => {
    if (e.dataset.ship === `${ship.name}`) {
      e.classList.remove('set');
      e.classList.remove('hasShip');
    }
  });

  if (ship.axis === 'x' && ship.y <= 10 - ship.length) {
    ship.axis = 'y';
  } else if (ship.axis === 'y' && ship.x <= 10 - ship.length) {
    ship.axis = 'x';
  }
  for (let i = 0; i < ship.length; i++) {
    if (ship.axis === 'x') {
      const xcord = parseInt(ship.x) + i;
      const cell = document.querySelector(
        `[data-x="${xcord}"][data-y="${ship.y}"]`,
      );
      if (i === 0) {
        cell.classList.add('head');
      }
      cell.classList.add('hasShip');
      cell.dataset.ship = `${ship.name}`;
    }
    if (ship.axis === 'y') {
      const ycord = parseInt(ship.y) + i;
      const cell = document.querySelector(
        `[data-x="${ship.x}"][data-y="${ycord}"]`,
      );
      if (i === 0) {
        cell.classList.add('head');
      }
      cell.classList.add('hasShip');
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
  const x = e.target.getAttribute('data-x');
  const y = e.target.getAttribute('data-y');

  if (ship.axis === 'x') {
    if (x > 10 - ship.length) {
      return;
    }
  }
  if (ship.axis === 'y') {
    if (y > 10 - ship.length) {
      return;
    }
  }

  // If the ship overlaps, no effect
  if (isBlocked(ship, ship.axis, x, y, human.gameboard.occupiedSquares)) return;

  // Clear the ship's position if it is already set
  const oldPosition = [...document.querySelectorAll(`[data-ship=${ship.name}]`)];
  oldPosition.forEach((e) => {
    if (e.dataset.ship === `${ship.name}`) {
      delete e.dataset.ship;
      e.classList.remove('hasShip');
      e.classList.remove('head');
    }
  });
  ship.x = e.target.getAttribute('data-x');
  ship.y = e.target.getAttribute('data-y');

  for (let i = 0; i < ship.length; i++) {
    if (ship.axis === 'x') {
      const xcord = parseInt(ship.x) + i;
      const cell = document.querySelector(
        `[data-x="${xcord}"][data-y="${ship.y}"]`,
      );
      if (i === 0) {
        cell.classList.add('head');
      }
      cell.classList.add('hasShip');
      cell.dataset.ship = `${ship.name}`;
    }
    if (ship.axis === 'y') {
      const ycord = parseInt(ship.y) + i;
      const cell = document.querySelector(
        `[data-x="${ship.x}"][data-y="${ycord}"]`,
      );
      if (i === 0) {
        cell.classList.add('head');
      }
      cell.classList.add('hasShip');
      cell.dataset.ship = `${ship.name}`;
    }
  }
};
const hoverEffectWrapper = (e) => {
  hoverEffect(e, currentShip);
};

// On button press
const getNextShip = () => {
  removeCallbackFromGameboard(playerGB, setGridPositionWrapper, 'click');
  removeCallbackFromGameboard(playerGB, setOrientationWrapper, 'dblclick');
  removeCallbackFromGameboard(playerGB, hoverEffectWrapper, 'mouseover');
  shipIndex++;

  if (shipIndex == human.gameboard.fleet.length - 1) {
    changeShipButton.textContent = 'Finish';
  }
  if (shipIndex == human.gameboard.fleet.length) {
    announcements.textContent = '';
    announcements.classList.remove('instructions');
    changeShipButton.style.display = 'none';
    cpuGBcontainer.style.display = 'block';
    const allCells = [...document.querySelectorAll('.cell')];
    allCells.forEach((e) => {
      e.classList.remove('head');
      e.classList.add('gameOn');
    });

    game();
    return;
  }
  currentShip = human.gameboard.fleet[shipIndex];

  changeShipButton.disabled = true;
  addCallbackToGameboard(playerGB, setGridPositionWrapper, 'click');
  addCallbackToGameboard(playerGB, setOrientationWrapper, 'dblclick');
  addCallbackToGameboard(playerGB, hoverEffectWrapper, 'mouseover');
  setShip = false;
};

changeShipButton.addEventListener('click', getNextShip);

const instructions = () => {
  announcements.innerHTML = "Click on a cell to place a ship. Clicking on the head of the most recently placed ship allows you to move it again. <br/> &nbsp <br/> Double-clicking changes the ship's oriention. <br/> &nbsp <br/>When you finish placing ships, attack your opponent by clicking on their board.";
  announcements.classList.add('instructions');
};

const humanPlaceShips = () => {
  // Hide enemy board
  cpuGBcontainer.style.display = 'none';
  instructions();

  // Make the human gameboard once
  makeGameboard(playerGB);
  addCallbackToGameboard(playerGB, setGridPositionWrapper, 'click');
  addCallbackToGameboard(playerGB, setOrientationWrapper, 'dblclick');
  addCallbackToGameboard(playerGB, hoverEffectWrapper, 'mouseover');
};

const restartButton = document.getElementById('restart-button');
const reset = () => {
  human.gameboard.occupiedSquares.length = 0;
  human.gameboard.shotRecord.length = 0;
  computer.gameboard.occupiedSquares.length = 0;
  computer.gameboard.shotRecord.length = 0;

  human.gameboard.fleet.forEach((ship) => {
    ship.x = null;
    ship.y = null;
    ship.setHits = 0;
  });
  computer.gameboard.fleet.forEach((ship) => {
    ship.x = null;
    ship.y = null;
    ship.setHits = 0;
  });
  while (cpuGB.firstChild) {
    cpuGB.removeChild(cpuGB.lastChild);
  }
  while (playerGB.firstChild) {
    playerGB.removeChild(playerGB.lastChild);
  }
  computer.randomlyPlaceShips();
  endGameScreen.classList.remove('show');
  endGameMsg.textContent = '';
  hitOrMiss.textContent = '';
  setShip = false;
  shipIndex = 0;
  currentShip = human.gameboard.fleet[shipIndex];
  changeShipButton.style.display = 'block';
  changeShipButton.disabled = true;
  changeShipButton.textContent = 'Get next ship';
  humanPlaceShips();
};

restartButton.addEventListener('click', reset);

export { humanPlaceShips };
