
import {
  cpuGBcontainer,
  announcements,
  makeGameboard,
  playerGB,
  addCallbackToGameboard,
  removeCallbackFromGameboard,
} from "./dom.js";
import { human, isBlocked } from "./gamePieces.js";
  console.log('here')
  let setShip = false;
  const changeShipButton = document.getElementById("changeShip");
  let shipIndex = 0;
  let currentShip = human.gameboard.fleet[shipIndex];
  
  // On click
  const setGridPosition = (e, ship) => {
   
    let x = e.target.id.slice(-1);
    let y = e.target.id.slice(-2, -1);

     // If the ship is placed and user not clicking on head of that ship, ignore it
     // Otherwise remove the ship from the occupied array and scrub it off the board 
     if (setShip) {
      if (e.target.getAttribute('data-x') == ship.x  && e.target.getAttribute('data-y') == ship.y) {
        console.log('jackpot');
        for (let i = 0; i<ship.length; i++){
          console.log(human.gameboard.occupiedSquares.pop());

        }
      }
      else {
        return
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
    // If the ship overlaps with another ship, don't place it
    if (isBlocked(ship, ship.axis, x,y, human.gameboard.occupiedSquares)){
      return;
    }

    // Clear the ship's position if it is already set
    let oldPosition = [...document.querySelectorAll(`.${ship.name}`)];
    console.log(oldPosition)
    oldPosition.forEach((e) => {
      e.classList.remove(`${ship.name}`);
      e.classList.remove("hasShip");
      e.classList.remove("head");
     // human.gameboard.occupiedSquares.filter( (entry) => (entry.x != oldPosition.x)  )
    });
  

    human.gameboard.placeShip(ship.name, x, y, ship.axis);
    console.log(human.gameboard.occupiedSquares)

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
      cell.classList.add(`${ship.name}`);
      cell.classList.toggle("set");
      setShip = !setShip;
    }
  };
  const setGridPositionWrapper = (e) => {
    setGridPosition(e, currentShip);
  };
  
  // On double-click
  const setOrientation = (e, ship) => {
    // Clear the ship's position if it is already set
    let oldPosition = [...document.querySelectorAll(`.${ship.name}`)];
    oldPosition.forEach((e) => {
      e.classList.remove(`${ship.name}`);
      e.classList.remove(`hasShip`);
      e.classList.remove(`head`);
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
        cell.classList.add(`${ship.name}`);
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
        cell.classList.add(`${ship.name}`);
      }
    }
    console.log(ship);
  };
  const setOrientationWrapper = (e) => {
    setOrientation(e, currentShip);
  };
  
  // On hover
  const hoverEffect = (e, ship) => {
    if (setShip) return;
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
    let oldPosition = [...document.querySelectorAll(`.${ship.name}`)];
    oldPosition.forEach((e) => {
      e.classList.remove(`${ship.name}`);
      e.classList.remove(`hasShip`);
      e.classList.remove(`head`);
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
        cell.classList.add(`${ship.name}`);
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
        cell.classList.add(`${ship.name}`);
      }
    }
  };
  const hoverEffectWrapper = (e) => {
    hoverEffect(e, currentShip);
  };
  
  // On button press
  const getNextShip = () => {
    removeCallbackFromGameboard(playerGB, setGridPositionWrapper, "click");
    removeCallbackFromGameboard(playerGB, setOrientationWrapper, "dblclick");
    removeCallbackFromGameboard(playerGB, hoverEffectWrapper, "mouseover");
    shipIndex++;
    console.log(human.gameboard.fleet.length);
    if (shipIndex >= human.gameboard.fleet.length) {
      console.log("DONE!");
      return;
    }
    currentShip = human.gameboard.fleet[shipIndex];
    setShip = false;
    addCallbackToGameboard(playerGB, setGridPositionWrapper, "click");
    addCallbackToGameboard(playerGB, setOrientationWrapper, "dblclick");
    addCallbackToGameboard(playerGB, hoverEffectWrapper, "mouseover");
  };
  
  changeShipButton.addEventListener("click", getNextShip);
  
  const humanPlaceShips = () => {
    // Hide enemy board
    cpuGBcontainer.style.display = "none";
  
    // Make the human gameboard once
    makeGameboard(playerGB);
  
    addCallbackToGameboard(
      playerGB,
      (e) => {
        setGridPosition(e, currentShip);
      },
      "click"
    );
  
    addCallbackToGameboard(
      playerGB,
      (e) => {
        setOrientation(e, currentShip);
      },
      "dblclick"
    );
  
    addCallbackToGameboard(
      playerGB,
      (e) => {
        hoverEffect(e, currentShip);
      },
      "mouseover"
    );
  };

  export { humanPlaceShips };
  

