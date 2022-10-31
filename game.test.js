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
    let testShip = testGameboard.placeShip("Cruiser", 1, 2, "y");
    expect(testShip.x).toBe(1);
    expect(testShip.y).toBe(2);
  });
  it("Should throw an error when ship placed out of bounds", () => {
    let testGameboard = game.Gameboard();
    expect(() => testGameboard.placeShip("Battleship", -11, 2, "y")).toThrow(
      "Location out of bounds"
    );
    expect(() =>
      testGameboard
        .placeShip("Submarine", 9, 2, "x")
        .toThrow("Ship partially out of bounds")
    );
  });
  it("Should throw an error when ships have same position", () => {
    let testGameboard = game.Gameboard();
    testGameboard.placeShip("Battleship", 1, 2, "y");
    expect(() =>
      testGameboard
        .placeShip("Submarine", 3, 2, "x")
        .toThrow("Another ship is in the way");
    );
  });
/*
  it("Should throw an error when ships overlap", () => {
    let testGameboard = game.Gameboard();
    testGameboard.placeShip("Battleship", 1, 2, "y");
    expect(() =>
      testGameboard
        .placeShip("Submarine", 0, 3, "x")
        .toThrow("Another ship is in the way")
    );
  });
  */

  it("Should register received attacks on head of ship", () => {
    let testGameboard = game.Gameboard();
    testGameboard.placeShip("Battleship", 3, 2, "x");
    testGameboard.receiveAttack(3, 2);
    let boat = testGameboard.fleet.filter(
      (item) => item.name === "Battleship"
    )[0];
    expect(testGameboard.shotRecord[0]).toEqual([3, 2]);
    expect(boat.hitNumber).toBe(1);
  });
  it("Should register a missed shot", () => {
    let testGameboard = game.Gameboard();
    testGameboard.placeShip("Battleship", 3, 2);
    testGameboard.receiveAttack(4, 2);
    expect(testGameboard.shotRecord[0]).toEqual([4, 2]);
    expect(testGameboard.fleet[0].hitNumber).toBe(0);
  });
  it("Should register received attacks on body of ship", () => {
    let testGameboard = game.Gameboard();
    testGameboard.placeShip("Battleship", 3, 2, "x");
    testGameboard.placeShip("Submarine", 1, 1, "y");
    testGameboard.receiveAttack(5, 2);
    testGameboard.receiveAttack(4, 2);
    testGameboard.receiveAttack(1, 2);
    expect(testGameboard.shotRecord[0]).toEqual([5, 2]);
    expect(testGameboard.fleet[1].hitNumber).toBe(2);
    expect(testGameboard.shotRecord[1]).toEqual([4, 2]);
    expect(testGameboard.fleet[3].hitNumber).toBe(1);
  });
  it("Should report whether all are sunk", () => {
    let testGameboard = game.Gameboard();
    testGameboard.placeShip("Carrier", 1, 1, "y");
    testGameboard.placeShip("Battleship", 2, 2, "y");
    testGameboard.placeShip("Cruiser", 3, 3, "y");
    testGameboard.placeShip("Submarine", 4, 4, "y");
    testGameboard.placeShip("Destroyer", 5, 5, "y");

    testGameboard.receiveAttack(1, 1);
    testGameboard.receiveAttack(1, 2);
    testGameboard.receiveAttack(1, 3);
    testGameboard.receiveAttack(1, 4);
    testGameboard.receiveAttack(1, 5);
    expect(testGameboard.allSunk()).toBe(false);

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

    expect(testGameboard.allSunk()).toBe(true);
  });
});

describe("Player factory", () => {
  const testPlayer1 = game.Player();
  const testPlayer2 = game.Player();
  testPlayer1.gameboard.placeShip("Destroyer", 0, 0, "x");
  testPlayer2.gameboard.placeShip("Carrier", 1, 1, "y");
  describe("Attack method", () => {
    it("Should register successful attacks", () => {
      expect(testPlayer1.attack(testPlayer2, 1, 3)).toBe(true);
    });
    it("Should register unsucessful attacks", () => {
      expect(testPlayer1.attack(testPlayer2, 2, 3)).toBe(false);
    });
    it("Should prevent redundant attacks", () => {
      expect(() => testPlayer1.attack(testPlayer2, 1, 3)).toThrow(
        "Attack redundant"
      );
    });
  });
});

describe("Computer Player", () => {
  describe("Should always place its fleet legally", () => {
    it("Should place the head in bounds", () => {
      for (const ship of game.computer.gameboard.fleet) {
        expect(
          ship.x >= 0 &&
            ship.y >= 0 &&
            ship.x < game.computer.gameboard.boardLength &&
            ship.y < game.computer.gameboard.boardLength
        );
      }
    });
    it("Should place each ship fully in bounds", () => {
      for (const ship of game.computer.gameboard.fleet) {
        if ((ship.axis = "x")) {
          expect(ship.x + ship.length < game.computer.gameboard.boardLength);
        }
        if ((ship.axis = "y")) {
          expect(ship.y + ship.length < game.computer.gameboard.boardLength);
        }
      }
    });

    it("Should not have overlapping ships", () => {
      for (const ship of game.computer.gameboard.fleet) {
        expect();
      }
    });
  });
});
