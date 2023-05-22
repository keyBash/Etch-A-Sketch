const mainBoard = document.getElementById("board");
const startBoard = document.getElementById("btn-start");

const makeBoard = () => {
  mainBoard.style.visibility = "visible";
  for (row = 1; row < 16; row++) {
    const makeBoardCell = document.createElement("div");
    makeBoardCell.classList.add("cell");

    for (column = 1; column < 16; column++) {
      const makeBoardCol = document.createElement("div");
      makeBoardCol.classList.add("cell");
      mainBoard.appendChild(makeBoardCol);
    }
    mainBoard.appendChild(makeBoardCell);
  }
};

startBoard.addEventListener("click", (e) => {
  makeBoard();

  mainBoard.onmouseover = function (event) {
    let currentElem = null;
    /* if (currentElem) return */
    let target = event.target.closest(".cell");
    if (!target) return
    if (!mainBoard.contains(target)) return;
    currentElem = target;
    target.style.backgroundColor = "black";
  };
});
