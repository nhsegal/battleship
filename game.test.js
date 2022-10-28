const game = require("./game");

describe('Ship factory', ()=> {
  it('Should return an object with length, hitNumber', ()=> {
    let testShip = game.Ship(3);
    expect(testShip.length).toEqual(3);
    expect(testShip.hitNumber).toEqual(0);
  
  })

  it('Should register hits', ()=> {
    let testShip = game.Ship(4);
    testShip.hit();
    testShip.hit();
    expect(testShip.hitNumber).toEqual(2);
  })

  it('Should be sunk if hitNumber >= length', ()=>{
    let testShip = game.Ship(2);
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
  })

  it('Should not be sunk if hitNumber < length', ()=>{
    let testShip = game.Ship(2);
    testShip.hit();
    expect(testShip.isSunk()).toBe(false);
  })

})
