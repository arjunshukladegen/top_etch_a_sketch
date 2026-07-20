// Create a 16x16 grid of square divs.

// Select container for the grid
const container = document.querySelector("#grid-container");

// Testing tool (for console.log)
let counter = 0;
let gridSize = 16;

// Reset Button
resetButton = document.querySelector("#reset");

// Edit Button
editButton = document.querySelector("#edit");

// For loop, rows and cols
for (let rows = 0; rows < 16; rows++) {
  let rowDiv = document.createElement("div");
  rowDiv.className = "row-div";
  container.append(rowDiv);

  for (let col = 0; col < 16; col++) {
    let squareDiv = document.createElement("div");
    squareDiv.className = "box-div";
    counter = counter + 1;
    rowDiv.append(squareDiv);
    console.log(`(COL) Box #${counter} completed`);
  }
}

const display = document.querySelector("#display");
display.textContent = `${gridSize} x ${gridSize} Grid`;

const allBoxes = document.querySelectorAll(".box-div");
allBoxes.forEach((div) => {
  div.addEventListener("mouseenter", function (e) {
    div.style.backgroundColor = "#000000";
  });
});
