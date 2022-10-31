/// Use some sort of spread operator or destructuring to 
/// change fleet so there is no properites key, just name 
/// and the returned values of ship

const Ship = (len, name=null, xi=null, yi=null, _axis=null) => {
  let _hitNumber = 0;
  const x = xi;
  const y = yi;
  const axis = _axis;
  let length = len;
  const hit = () => {
    _hitNumber = _hitNumber + 1;
    return _hitNumber
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
  const placeShip = (name, xi, yi, axis) => {
    let ship = fleet.filter( (item) => item.name === name )[0];
  
    if (xi < 0 || xi > boardLength - 1 || yi < 0 || yi > boardLength - 1) {
      throw new Error("Location out of bounds");
    }
    if (
      (axis === "x" && xi > boardLength - 1 - ship.length) ||
      (axis === "y" && yi > boardLength - 1 - ship.length)
    ) {
      throw new Error("Ship partially out of bounds");
    }
    ship.x = xi;
    ship.y = yi;
    ship.axis = axis;
    return ship
  };
  const shotRecord = [];
  const receiveAttack = (x, y) => {
    shotRecord.push([x, y]);
    let success = false;
    fleet.forEach((ship) => {
      if (ship.axis === "x") {
        if ((x >= ship.x) && (x < ship.x + ship.length) && (y === ship.y)) {
          ship.hit()  
          console.log("hit")       
          success = true;
          return success
        }
      } else if (ship.axis === "y") {
        if (x === ship.x && y >= ship.y && y < ship.y + ship.length) {
          ship.hit();
          success = true;
          return success
        }
      }
    });
    return success;
  };
  const allSunk = () => {
    return fleet.every((ship) => ship.isSunk());
  };

  return {
    fleet,
    placeShip,
    shotRecord,
    receiveAttack,
    allSunk,
    boardLength,
  };
};

const Player = () => {
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
      opponent.gameboard.shotRecord.filter((e) => e[0] === x && e[1] === y)
        .length != 0
    ) {
      throw new Error("Attack redundant");
    }
    return opponent.gameboard.receiveAttack(x, y);
  };
  return {
    gameboard,
    attack,
  };
};





let testGameboard = Gameboard();
testGameboard.placeShip("Carrier", 1, 1, "x");
testGameboard.placeShip("Battleship", 2, 2, "x");
testGameboard.placeShip("Cruiser", 3, 3, "x");
testGameboard.placeShip("Submarine", 4, 4, "x");
testGameboard.placeShip("Destroyer", 5, 5, "x");
testGameboard.receiveAttack(1, 1);
testGameboard.receiveAttack(1, 1);
testGameboard.receiveAttack(1, 3);
testGameboard.receiveAttack(1, 4);
testGameboard.receiveAttack(1, 5);

/*
testGameboard.receiveAttack(2, 2);
testGameboard.receiveAttack(2, 3);
testGameboard.receiveAttack(2, 4);
testGameboard.receiveAttack(2, 4);

testGameboard.receiveAttack(3, 3);
testGameboard.receiveAttack(3, 4);
testGameboard.receiveAttack(3, 5);

testGameboard.receiveAttack(4, 4);
testGameboard.receiveAttack(4, 5);
testGameboard.receiveAttack(4, 6);

testGameboard.receiveAttack(5, 5);
testGameboard.receiveAttack(5, 6);
*/
//console.log(typeof(testGameboard.fleet[0].x))

module.exports = {
  Ship,
  Gameboard,
  Player,
};
