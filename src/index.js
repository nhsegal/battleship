//import game from './gamePlay';
import './styles.css';
import { computer, human } from "./gamePieces.js";

const playerGB = document.getElementById('playerGB');
const cpuGB = document.getElementById('cpuGB');

const makeGameboard = function (someDiv){
  for (let i = 0; i<100; i++){
    let cell = document.createElement("div");
    let idNum = i;
    if (i < 10){
      idNum ='0'+String(idNum)
    }
    cell.id = someDiv.id+idNum;
    cell.textContent = idNum
    cell.addEventListener("click", displayAttack, { once: true});
    someDiv.append(cell);
  }
}

const displayAttack = function(e){
  console.log(`cell ${e.target.id} attacked`);
  let y = parseInt(e.target.id.slice(-2)) % 10;
  let x = Math.floor(parseInt(e.target.id.slice(-2))/10);
  console.log(x, y);
  console.log(computer.gameboard.fleet)
  let hit = computer.gameboard.fleet.filter(ship => 
    x == ship.x && y == ship.y);
  console.log(hit);
  if (hit.length > 0){
    e.target.style.color = 'red';
  }
  else {
    e.target.style.color = 'white';
  }   
  e.target.innerHTML = '&#8226';
}

makeGameboard(playerGB);
makeGameboard(cpuGB);