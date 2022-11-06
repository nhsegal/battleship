import { mouseAttack } from "./gamePlay";

const playerGB = document.getElementById("playerGB");
const cpuGB = document.getElementById("cpuGB");

const makeGameboard = (someDiv) => {
  for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    let idNum = i;
    if (i < 10) {
      idNum = "0" + String(idNum);
    }
    cell.id = someDiv.id + idNum;
    cell.textContent = idNum;
    cell.addEventListener("click", mouseAttack, { once: true });
    someDiv.append(cell);
  }
};

const displayAttack = (player, x, y, success) => {
  let loc = null;
  if (player === 'computer') {
   loc = `playerGB` + x + y;
  }
  if (player === 'human') {
    loc = `cpuGB` + x + y;
  }
  let element = document.getElementById(`${loc}`);
  if (success) {
    element.style.color = "red";
  }
  else {
    element.style.color = "blue";
  }
  element.innerHTML = "&#8226";
}



export { makeGameboard, playerGB, cpuGB, displayAttack }