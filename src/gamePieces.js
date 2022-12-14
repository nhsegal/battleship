import fire_shot from "./fire_shot.mp3";
import shot_hit from "./shot_hit.mp3";
import shot_miss from "./shot_miss.mp3";

const fireShot = new Audio(fire_shot);
const shotHit = new Audio(shot_hit);
const shotMiss = new Audio(shot_miss);
fireShot.load();
shotHit.load();
shotMiss.load();

function playFire() {
  return new Promise((res) => {
    fireShot.play();
    fireShot.onended = res;
  });
}
async function playSound(result) {
  const audio = fireShot;
  await playFire(audio);
  if (result === true) {
    shotHit.play();
  } else {
    shotMiss.play();
  }
}

const Ship = (len, name = null, xi = null, yi = null, _axis = "x") => {
  let _hitNumber = 0;
  const x = xi;
  const y = yi;
  const axis = _axis;
  const length = len;
  const hit = () => {
    _hitNumber += 1;
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

const Fleet = () => [
  Ship(5, "Carrier"),
  Ship(4, "Battleship"),
  Ship(3, "Cruiser"),
  Ship(3, "Submarine"),
  Ship(2, "Destroyer"),
];

const Gameboard = () => {
  const boardLength = 10;
  const fleet = Fleet();
  const occupiedSquares = [];
  const placeShip = (name, xi, yi, axis) => {
    const ship = fleet.filter((item) => item.name === name)[0];
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

    ship.x = parseInt(xi, 10);
    ship.y = parseInt(yi, 10);
    ship.axis = axis;

    // If the ship is already in the array, modify it.
    if (occupiedSquares.filter((e) => e.name === ship.name).length > 0) {
      const shipStart = occupiedSquares.filter((e) => e.name === ship.name)[0];
      for (let i = 0; i < ship.length; i++) {
        if (axis === "x") {
          shipStart.x = ship.x + 1;
          shipStart.y = ship.y;
        } else {
          shipStart.x = ship.x;
          shipStart.y = ship.y + 1;
        }
      }
      return ship;
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
    x = parseInt(x, 10);
    y = parseInt(y, 10);

    let success = false;
    for (const ship of fleet) {
      if (ship.axis === "x") {
        if (x >= ship.x && x < ship.x + ship.length && y === ship.y) {
          ship.hit();
          success = true;
          playSound(true);
          shotRecord.push({ x, y, success });
          return success;
        }
      } else if (ship.axis === "y") {
        if (x === ship.x && y >= ship.y && y < ship.y + ship.length) {
          ship.hit();
          success = true;
          playSound(true);
          shotRecord.push({ x, y, success });
          return success;
        }
      }
    }

    playSound(false);
    shotRecord.push({ x, y, success });
    return success;
  };
  const allSunk = () => fleet.every((ship) => ship.isSunk());

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

// isBlocked() helps computer place its ships
function isBlocked(ship, axis, xpos, ypos, occSqArr) {
  const coOrdinatesToTest = [];
  if (axis === "x") {
    for (let i = 0; i < ship.length; i++) {
      coOrdinatesToTest.push({
        x: parseInt(xpos, 10) + i,
        y: parseInt(ypos, 10),
      });
    }
  } else if (axis === "y") {
    for (let i = 0; i < ship.length; i++) {
      coOrdinatesToTest.push({
        x: parseInt(xpos, 10),
        y: parseInt(ypos, 10) + i,
      });
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

const Player = (_name = null) => {
  const name = _name;
  const gameboard = Gameboard();
  const attack = (opponent, _x, _y) => {
    const x = parseInt(_x, 10);
    const y = parseInt(_y, 10);
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
        .length !== 0
    ) {
      throw new Error("Attack redundant");
    }
    return { success: opponent.gameboard.receiveAttack(x, y), x, y };
  };

  const randomlyPlaceShips = () => {
    gameboard.fleet.forEach((ship) => {
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

const human = Player("You");
const computer = Player("Computer");

// Give computer an attack strategy
computer.randomAttack = (enemy) => {
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

computer.strategicAttack = (enemy) => {
  const inBounds = (e) => {
    return e.x >= 0 && e.x < 10 && e.y >= 0 && e.y < 10;
  };
  const notTaken = (e) => {
    for (let i = 0; i < length; i++) {
        if (
          enemy.gameboard.shotRecord[i].x === e.x &&
          enemy.gameboard.shotRecord[i].y === e.y
        ) {
          return false;
        }
      }
      return true;
  };
  let length = enemy.gameboard.shotRecord.length;
  let goodMovesArr = enemy.gameboard.shotRecord.filter(e => e.success);
  let lastGoodMove = goodMovesArr[goodMovesArr.length-1];
  if (length === 0 || goodMovesArr.length === 0) {
    return computer.randomAttack(enemy);
  }
  let adjacentCells = [
    { x: parseInt(lastGoodMove.x, 10) - 1, y: parseInt(lastGoodMove.y, 10) },
    { x: parseInt(lastGoodMove.x, 10) + 1, y: parseInt(lastGoodMove.y, 10) },
    { x: parseInt(lastGoodMove.x, 10), y: parseInt(lastGoodMove.y, 10) - 1 },
    { x: parseInt(lastGoodMove.x, 10), y: parseInt(lastGoodMove.y, 10) + 1 },
  ];
  let goodNextMoves = adjacentCells.filter(inBounds).filter(notTaken);
  let i = goodMovesArr.length-1;
  while (goodNextMoves.length < 1 && i > 0){
    i--;
    lastGoodMove = goodMovesArr[i];
    adjacentCells = [
      { x: parseInt(lastGoodMove.x, 10) - 1, y: parseInt(lastGoodMove.y, 10) },
      { x: parseInt(lastGoodMove.x, 10) + 1, y: parseInt(lastGoodMove.y, 10) },
      { x: parseInt(lastGoodMove.x, 10), y: parseInt(lastGoodMove.y, 10) - 1 },
      { x: parseInt(lastGoodMove.x, 10), y: parseInt(lastGoodMove.y, 10) + 1 },
    ];
    goodNextMoves = adjacentCells.filter(inBounds).filter(notTaken);
  }

  if (goodNextMoves.length > 0) {
    let move = goodNextMoves[(goodNextMoves.length * Math.random()) | 0];
    return computer.attack(enemy, move.x, move.y);
  } else {
    return computer.randomAttack(enemy);
  }
}
  

computer.randomlyPlaceShips();
// human.randomlyPlaceShips();

export { Ship, Fleet, Gameboard, Player, computer, human, isBlocked };
