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
  //console.log(x, y);
  let hit = computer.gameboard.fleet.filter(ship => 
    ship.x === String(x) && ship.y === String(y));
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

const revealCpuShips = () => { 
  for (const ship of computer.gameboard.fleet){
    let loc = null;
    for (let i = 0; i<ship.length; i++){
      let x = ship.x;
      let y = ship.y;
      if (ship.axis === 'x'){
        x = x + i
      } else {
        y = y + i;
      }
      loc = `cpuGB`+ x + y;
      let element = document.getElementById(`${loc}`)
      element.style.color = 'red';
      element.innerHTML  = '&#8226';
    }
  }
}

revealCpuShips();
