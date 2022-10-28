const Ship = (len) => {
  let _hitNumber = 0;
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
    get hitNumber() {return _hitNumber},
    get sunk() {return _sunk},
    hit,
    isSunk
  };
};

let testShip = Ship(4);
console.log(testShip.hitNumber)
testShip.hit()
//console.log(testShip)

module.exports = {
  Ship
};