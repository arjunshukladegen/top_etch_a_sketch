// Create a 16x16 grid of square divs.

// Select container for the grid
const container = document.querySelector("#grid-container");

// Testing tool (for console.log)
let started = false;
let gridSize = 16;

function reloadUI(gridSize) {
  // Get rid of anything previously left behind
  container.innerHTML = "";

  // Create grid
  for (let rows = 0; rows < gridSize; rows++) {
    let rowDiv = document.createElement("div");
    rowDiv.className = "row-div";
    container.append(rowDiv);

    for (let col = 0; col < gridSize; col++) {
      let squareDiv = document.createElement("div");
      squareDiv.className = "box-div";
      rowDiv.append(squareDiv);
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
}

errorMessage = document.querySelector("#error");

// Reset Button
resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", (e) => {
  reloadUI(gridSize);
});

// Edit Button
editButton = document.querySelector("#edit");

editButton.addEventListener("click", () => {
  gridSize = prompt("Enter new pixel width");
  if (gridSize > 100 || gridSize < 1) {
    errorMessage.textContent = `Error: Cannot display ${gridSize} x ${gridSize}`;
    gridSize = 16;
    reloadUI(gridSize);
  } else {
    errorMessage.textContent = "";
    reloadUI(gridSize);
  }
});

reloadUI(gridSize);
