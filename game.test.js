const game = require("./game");

describe("Ship factory", () => {
  it("Should return an object with length, hitNumber", () => {
    let testShip = game.Ship(3);
    expect(testShip.length).toEqual(3);
    expect(testShip.hitNumber).toEqual(0);
  });

  it("Should register hits", () => {
    let testShip = game.Ship(4);
    testShip.hit();
    testShip.hit();
    expect(testShip.hitNumber).toEqual(2);
  });

  it("Should be sunk if hitNumber >= length", () => {
    let testShip = game.Ship(2);
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
  });

  it("Should not be sunk if hitNumber < length", () => {
    let testShip = game.Ship(2);
    testShip.hit();
    expect(testShip.isSunk()).toBe(false);
  });
});

describe("Gameboard factory", () => {
  it("Should return a ship with correct position", () => {
    let testGameboard = game.Gameboard();
    let testShip = testGameboard.placeShip(3, 1, 2, 'y');
    expect(testShip.x).toBe(1);
    expect(testShip.y).toBe(2);
  });
 it("Should register received attacks on head of ship", () =>{
    let testGameboard = game.Gameboard();
    testGameboard.placeShip(4, 3, 2, 'x');
    testGameboard.receiveAttack(3,2);
    expect(testGameboard.shotRecord[0]).toEqual([3,2]);
    expect(testGameboard.myShips[0].hitNumber).toBe(1);
  })
  it("Should register a missed shot", () =>{
    let testGameboard = game.Gameboard();
    testGameboard.placeShip(4, 3, 2);
    testGameboard.receiveAttack(4,2);
    expect(testGameboard.shotRecord[0]).toEqual([4,2]);
    expect(testGameboard.myShips[0].hitNumber).toBe(0);
  })
  it("Should register received attacks on body of ship", () =>{
    let testGameboard = game.Gameboard();
    testGameboard.placeShip(4, 3, 2, 'x');
    testGameboard.placeShip(3, 1, 1, 'y');
    testGameboard.receiveAttack(5,2);
    testGameboard.receiveAttack(1,2);
    expect(testGameboard.shotRecord[0]).toEqual([5,2]);
    expect(testGameboard.myShips[0].hitNumber).toBe(1);
    expect(testGameboard.shotRecord[1]).toEqual([1,2]);
    expect(testGameboard.myShips[1].hitNumber).toBe(1);
  })
});
