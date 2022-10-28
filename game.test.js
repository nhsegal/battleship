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
    let testShip = testGameboard.placeShip(3, 1, 2, "y");
    expect(testShip.x).toBe(1);
    expect(testShip.y).toBe(2);
  });

  it("Should throw an error when ship placed out of bounds", () => {
    let testGameboard = game.Gameboard();
    expect(() => testGameboard.placeShip(4, -11, 2, "y")).toThrow(
      "Location out of bounds"
    );
    expect(() =>
      testGameboard
        .placeShip(3, 9, 2, "x")
        .toThrow("Ship partially out of bounds")
    );
  });

  it("Should register received attacks on head of ship", () => {
    let testGameboard = game.Gameboard();
    testGameboard.placeShip(4, 3, 2, "x");
    testGameboard.receiveAttack(3, 2);
    expect(testGameboard.shotRecord[0]).toEqual([3, 2]);
    expect(testGameboard.myShips[0].hitNumber).toBe(1);
  });
  it("Should register a missed shot", () => {
    let testGameboard = game.Gameboard();
    testGameboard.placeShip(4, 3, 2);
    testGameboard.receiveAttack(4, 2);
    expect(testGameboard.shotRecord[0]).toEqual([4, 2]);
    expect(testGameboard.myShips[0].hitNumber).toBe(0);
  });
  it("Should register received attacks on body of ship", () => {
    let testGameboard = game.Gameboard();
    testGameboard.placeShip(4, 3, 2, "x");
    testGameboard.placeShip(3, 1, 1, "y");
    testGameboard.receiveAttack(5, 2);
    testGameboard.receiveAttack(4, 2);
    testGameboard.receiveAttack(1, 2);
    expect(testGameboard.shotRecord[0]).toEqual([5, 2]);
    expect(testGameboard.myShips[0].hitNumber).toBe(2);
    expect(testGameboard.shotRecord[1]).toEqual([4, 2]);
    expect(testGameboard.myShips[1].hitNumber).toBe(1);
  });

  it("Should report whether all are sunk", () => {
    let testGameboard = game.Gameboard();
    testGameboard.placeShip(4, 3, 2, "x");
    testGameboard.placeShip(3, 1, 1, "y");

    testGameboard.receiveAttack(3, 2);
    testGameboard.receiveAttack(4, 2);
   testGameboard.receiveAttack(5, 2);
    testGameboard.receiveAttack(6, 2);
    expect(testGameboard.allSunk()).toBe(false);
    
    testGameboard.receiveAttack(1, 1);
    testGameboard.receiveAttack(1, 2);
    testGameboard.receiveAttack(1, 3);

    expect(testGameboard.allSunk()).toBe(true);

  })
});
