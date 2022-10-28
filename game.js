const Ship = (len, xi, yi, _axis) => {
  let _hitNumber = 0;
  const x = xi;
  const y = yi;
  const axis = _axis;
  let length = len;
  const hit = () => {
    _hitNumber = _hitNumber + 1;
  };
  const isSunk = () => {
    if (_hitNumber >= length) {
      return true;
    }
    return false;
  };
  return {
    length,
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

const Gameboard = () => {
  const boardLength = 10;
  const myShips = [];
  const placeShip = (len, xi, yi, axis) => {
    if (xi < 0 || xi > boardLength - 1 || yi < 0 || yi > boardLength - 1) {
      throw new Error("Location out of bounds");
    }
    if (
      (axis === "x" && xi > boardLength - 1 - len) ||
      (axis === "y" && yi > boardLength - 1 - len)
    ) {
      throw new Error("Ship partially out of bounds");
    }
    const newShip = Ship(len, xi, yi, axis);
    myShips.push(newShip);
    return newShip;
  };

  const shotRecord = [];
  const receiveAttack = (x, y) => {
    shotRecord.push([x, y]);
    myShips.forEach((ship) => {
      if (ship.axis === "x") {
        if (x >= ship.x && x < ship.x + ship.length && y === ship.y) {
          ship.hit();
        }
      } else if (ship.axis === "y") {
        if (x === ship.x && y >= ship.y && y < ship.y + ship.length) {
          ship.hit();
        }
      }
    });
  };
  const allSunk = () => {
    return myShips.every((ship) => ship.isSunk())
  };


  return {
    myShips,
    placeShip,
    shotRecord,
    receiveAttack,
    allSunk,
  };
};

module.exports = {
  Ship,
  Gameboard,
};
