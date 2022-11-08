const Ship = (len, name = null, xi = null, yi = null, _axis = null) => {
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
      (axis === "x" && xi > boardLength - 1 - ship.length) ||
      (axis === "y" && yi > boardLength - 1 - ship.length)
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

    ship.x = xi;
    ship.y = yi;
    ship.axis = axis;
    for (let i = 0; i < ship.length; i++) {
      if (axis === "x") {
        occupiedSquares.push({ x: ship.x + i, y: ship.y });
      } else {
        occupiedSquares.push({ x: ship.x, y: ship.y + i });
      }
    }
    return ship;
  };
  const shotRecord = [];
  const receiveAttack = (x, y) => {
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
  const attack = (opponent, x, y) => {
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
  return computer.attack(enemy, x, y)
  
};

// Remove this after testing
human.randomAttack = function (enemy) {
  let x = Math.floor(Math.random() * enemy.gameboard.boardLength);
  let y = Math.floor(Math.random() * enemy.gameboard.boardLength);
  while (
    enemy.gameboard.shotRecord.filter((e) => e.x === x && e.y === y).length != 0
  ) {
    x = Math.floor(Math.random() * enemy.gameboard.boardLength);
    y = Math.floor(Math.random() * enemy.gameboard.boardLength);
  }
  return human.attack(enemy, x, y)
};

// isBlocked() helps computer place its ships
function isBlocked(ship, axis, xpos, ypos, occSqArr) {
  let coOrdinatesToTest = [];
  if (axis === "x") {
    for (let i = 0; i < ship.length; i++) {
      coOrdinatesToTest.push({ x: xpos + i, y: ypos });
    }
  } else if (axis === "y") {
    for (let i = 0; i < ship.length; i++) {
      coOrdinatesToTest.push({ x: xpos, y: ypos + i });
    }
  }
  for (let i = 0; i < coOrdinatesToTest.length; i++) {
    if (
      occSqArr.filter(
        (e) => e.x === coOrdinatesToTest[i].x && e.y === coOrdinatesToTest[i].y
      ).length > 0
    ) {
      return true;
    }
  }
  return false;
}

computer.randomlyPlaceShips();
human.randomlyPlaceShips();

export { Ship, Gameboard, Player, computer, human };
