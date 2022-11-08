const playerGB = document.getElementById("playerGB");
const cpuGB = document.getElementById("cpuGB");
const hitOrMiss = document.getElementById("hit-or-miss");
const announcements = document.getElementById("announcements")
console.log(announcements)

const makeGameboard = (someDiv, callback = null) => {
  for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    cell.at
    let idNum = i;
    if (i < 10) {
      idNum = "0" + String(idNum);
    }
    cell.classList.add("cell");
    cell.setAttribute("data-cell", ""); 
    cell.id = someDiv.id + idNum;
    if (callback){
      cell.addEventListener("click", 
      callback//,  { once: true }
      );
    }
    someDiv.append(cell);
  }
}

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
    element.classList.add("hit");
  }
  else {
    element.classList.add("miss");
  }
}

export { makeGameboard, displayAttack, playerGB, cpuGB, hitOrMiss, announcements }