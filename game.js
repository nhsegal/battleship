const Ship = (len, xi, yi, _axis) => {
  let _hitNumber = 0;
  const x = xi;
  const y = yi;
  const axis = _axis;
  let length = len;
  const hit = () => {
    _hitNumber = _hitNumber+1;
  };
  const isSunk = () => {
    if (_hitNumber >= length) { return true}
    return false
  };
  return {
    length,
    x,
    y,
    axis,
    get hitNumber() {return _hitNumber},
    get sunk() {return _sunk},
    hit,
    isSunk
  };
};

const Gameboard = () => {
  const myShips =[];
  const placeShip = (len, xi, yi, axis) => {
    const newShip = Ship(len, xi, yi, axis);
    myShips.push(newShip);
    return newShip;
  }

  const shotRecord = [];

  const receiveAttack = (x,y) => {
    shotRecord.push([x,y])
    myShips.forEach((ship) => {
      if (ship.axis === 'x') {
        if (x >= ship.x && x < ship.x + ship.length && y === ship.y) {
          ship.hit();
        }
      }
      else if (ship.axis === 'y') {
        if (x === ship.x && y >= ship.y && y < ship.y + ship.length) {
          ship.hit();
        }
      }
    })
  }
  return {
    myShips,
    placeShip,
    shotRecord,
    receiveAttack
  }
}

module.exports = {
  Ship,
  Gameboard
};