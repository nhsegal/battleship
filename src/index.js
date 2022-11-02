//import game from './gamePlay';
import './styles.css';

const playerGameboard = document.getElementById('playerGameboard');
const cpuGameboard = document.getElementById('cpuGameboard');

const makeGameboard = function (someDiv){
  for (let i = 0; i<100; i++){
    let cell = document.createElement("div");
    cell.id = someDiv.id+i;
    //cell.addEventListener("click", null, options);
    someDiv.append(cell);
  }
}

makeGameboard(playerGameboard);
makeGameboard(cpuGameboard);