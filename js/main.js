const mainBoard = document.getElementById("board");
const startBoard = document.getElementById("btn-start");
const clearBoard = document.getElementById("btn-remove");
const wrapperBoard = document.getElementById('wrapper-board')

const makeBoard = () => {
  mainBoard.style.boxShadow = '  -1em 0 .4em olive'
  mainBoard.style.visibility = "visible";
  for (row = 1; row < 16; row++) {
    const makeBoardCell = document.createElement("div");
    makeBoardCell.classList.add("cell");
    mainBoard.appendChild(makeBoardCell);
    for (column = 1; column < 16; column++) {
      const makeBoardCol = document.createElement("div");
      makeBoardCol.classList.add("cell");
      mainBoard.appendChild(makeBoardCol);
    }
   
  }
};

startBoard.addEventListener("click", (e) => {
  makeBoard();
  startBoard.disabled = true;
  clearBoard.disabled = false;
  mainBoard.onmouseover = function (event) {
    /* let currentElem = null; */
    /* if (currentElem) return */
    let target = event.target.closest(".cell");
    if (!target) return;
    /* if (!mainBoard.contains(target)) return; */
    /* currentElem = target; */
    target.style.backgroundColor = "black";
  };
});


clearBoard.addEventListener('click', (e) => {
  startBoard.disabled = false
  clearGrid()
})



function clearGrid() {
  wrapperBoard.removeChild('mainBoard')
/*   mainBoard.style.boxShadow = 'none'
  mainBoard.style.visibility = "hidden"; */
}









/* gridContainer.style.gridTemplateColumns = (`repeat(${squaresPerSide}, 1fr`);
gridContainer.style.gridTemplateRows = (`repeat(${squaresPerSide}, 1fr`);
let numberOfCells = squaresPerSide * squaresPerSide;
for(let i = 0; i<numberOfCells; i++) {
  cell[i] = document.createElement('div');
  cell[i].classList.add('cell');
  cell[i].dataset.darken = 0; //keeps track of current step (0-9) for 'Incrementally Darken'
  cell[i].style = 'background-color: rgba(255, 255, 255, 1)'; //redundant, but deals with override of css styling
  cell[i].addEventListener('click', activatePen);
  gridContainer.appendChild(cell[i]);
}
} */
