import { computer, human } from "./gamePieces.js";

const playGame = function () {
  let turn = 0;
  while (!human.gameboard.allSunk() && !computer.gameboard.allSunk())
  if (turn % 2 === 0) {
    let before = countSunkShips(computer);
    if (human.randomAttack(computer)) {
      console.log("You hit the enemy!");
      let after = countSunkShips(computer);
      if (after.count > before.count) {
        let newlySunk = after.list
          .filter((name) => !before.list.includes(name))[0]
          .toLowerCase();
        console.log(`You sunk a ${newlySunk}!`);
      }
      if (computer.gameboard.allSunk()) {
        console.log("You won!");
        return turn;
      }
    } else {
      console.log("You missed!");
    }
    turn++;
  } else {
    let before = countSunkShips(human);
    if (computer.randomAttack(human)) {
      console.log("You've been hit!");
      let after = countSunkShips(human);
      if (after.count > before.count) {
        let newlySunk = after.list
          .filter((name) => !before.list.includes(name))[0]
          .toLowerCase();
        console.log(`They sunk your ${newlySunk}!`);
      }
      if (human.gameboard.allSunk()) {
        console.log("You lost!");
        return turn;
      }
    } else {
      console.log("They missed!");
    }
    turn++;
  }
};

//if gameend
// announce result, allow for newgame/reset

const countSunkShips = function (player) {
  let count = 0;
  let list = [];
  player.gameboard.fleet.forEach(
    (ship) => {
      if (ship.isSunk()) {
        list.push(ship.name);
        count++;
      }
    }
  )
  return { count, list };
};

const attackThroughConsole = function (player){

}

playGame();