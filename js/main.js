let color = 'black'
let click = true

function makeBoard(size) {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

makeBoard(50);

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector(".error").style.display = "none";
        makeBoard(input);
    } else {
        document.querySelector(".error").style.display = "flex";
    }
}

function colorSquare() {
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`; // From stackoverflow
        }
        this.style.backgroundColor = color
    }
}


function changeColor(choise) {
    color = choise
}

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
  if(e.target.tagName != "BUTTON"){
      click = !click
      if(click){
          document.querySelector('.mode').textContent = "Mode: You are risuete 👀🖌"
      } else {
          document.querySelector('.mode').textContent = "Mode: You are  not risuete (❁´◡`❁)"
      }
  }
})