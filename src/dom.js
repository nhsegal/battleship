const playerGB = document.getElementById("playerGB");
const cpuGB = document.getElementById("cpuGB");

const makeGameboard = (someDiv, callback) => {
  for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    let idNum = i;
    if (i < 10) {
      idNum = "0" + String(idNum);
    }
    cell.id = someDiv.id + idNum;
    cell.textContent = idNum;
    cell.addEventListener("click", 
    callback, 
      { once: true }
    );
    someDiv.append(cell);
  }
}


const mouseAttack = function (e) {
  let yloc = parseInt(e.target.id.slice(-2)) % 10;
  let xloc = Math.floor(parseInt(e.target.id.slice(-2)) / 10);
  displayAttack(human, xloc, yloc, human.attack(computer, xloc, yloc));
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

export { makeGameboard, displayAttack, playerGB, cpuGB }