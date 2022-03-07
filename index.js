const container = document.querySelector(".container");
const sketchPad = document.createElement("div");
let color = "rainbow";
let elementBefore = document.querySelector(".size-container");
let slider = document.querySelector('#sizeRange');
let userColorPicker = document.getElementById("input-color");
// let pixelSelection = document.getElementById("pixels");
let gridNumber = 16;
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
    
    container.appendChild(sketchPad);
    // elementBefore.parentNode.insertBefore(sketchPad, elementBefore);
    sketchPad.classList.add("sketch-pad");

    

}
createGrid(gridNumber);

let squares = document.querySelectorAll(".square");
// function pixelSize() {
//   createGrid(this.value);
// }

// slider.addEventListener('mouseup', pixelSize);


squares.forEach((square) => {
  // console.log(square);
  square.addEventListener("mouseenter", applyColor);
});
// sketchPad.classList.add("sketch-pad");
// let squares = document.querySelectorAll(".square");


function applyColor() {
  if (color === "rainbow") {
    let randomColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random()} )`;
    // console.log(this);
    this.style.backgroundColor = randomColor;
  }
  else if (color === "eraser") {
    this.style.backgroundColor = "white";
  }

  else {
    this.style.backgroundColor = color;
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

function pixelRemove () {
  let gridPixels = sketchPad.querySelectorAll('div');
  gridPixels.forEach(gridPixel => gridPixel.remove());
}

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", () => {color = "rainbow"});
userColorPicker.addEventListener("input", (event) => {color = event.target.value});
// userColorPicker.addEventListener("change", (event) => {color = event.target.value});
// pixelSelection.addEventListener("input", (event) => {gridNumber = event.target.value; pixelRemove() ;createGrid(gridNumber);});

