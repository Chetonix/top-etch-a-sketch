const container = document.querySelector(".container");
const sketchPad = document.createElement("div");
let color = "rainbow";
let elementBefore = document.querySelector(".size-container");
let slider = document.querySelector('#sizeRange');

function createGrid(gridNumber) {
  for (let i = 0; (i < (gridNumber * gridNumber)); i++) {
    
      let div = document.createElement("div");
      // div.style.backgroundColor = "white";
      // div.style.height = "10px";
      // div.style.width = "10px";
      div.classList.add("square");
      sketchPad.appendChild(div);
    }
    sketchPad.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
      // container.appendChild(sketchPad);
    elementBefore.parentNode.insertBefore(sketchPad, elementBefore);
}

function pixelSize() {
  createGrid(this.value);
}

slider.addEventListener('mouseup', pixelSize);

createGrid(16);

sketchPad.classList.add("sketch-pad");
let squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  // console.log(square);
  square.addEventListener("mouseenter", applyColor);
});

function applyColor() {
  if (color === "rainbow") {
    let randomColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random()} )`;
    // console.log(this);
    this.style.backgroundColor = randomColor;
  }
  if (color === "eraser") {
    this.style.backgroundColor = "white";
  }
}
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", eraseAll);

function eraseAll() {
  squares.forEach((square) => {
    // console.log(square);
    square.style.backgroundColor = "white";
  });
}

const eraser = document.querySelector(".erase");
eraser.addEventListener("click", () => (color = "eraser"));

// function eraseSquare() {
//   erase = true;
// }

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", () => {color = "rainbow"});