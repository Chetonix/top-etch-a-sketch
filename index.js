const container = document.querySelector(".container");
const sketchPad = document.createElement("div");
let color = "rainbow";
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let div = document.createElement("div");
    // div.style.backgroundColor = "white";
    // div.style.height = "10px";
    // div.style.width = "10px";
    div.classList.add("square");
    sketchPad.appendChild(div);
    container.appendChild(sketchPad);
  }
}

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
