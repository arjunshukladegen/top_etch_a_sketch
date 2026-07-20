// Create a 16x16 grid of square divs.

// Options: 'default'
let colorMode = "default";

// Returns hex code of random color selection
// color = `${rainbowTheme[randomNum]}`;

// Colors
const rainbowTheme = {
  1: "#E63946",
  2: "#F3722C",
  3: "#F9C80E",
  4: "#90BE6D",
  5: "#43AA8B",
  6: "#0FBFCF",
  7: "#277DA1",
  8: "#5E60CE",
  9: "#9B5DE5",
  10: "#F15BB5",
};

// Returns random number from 1-10, for color theme/modes
function randomColor() {
  // Gets a random number from 1 to 10
  let randomNum = (Math.round(Math.random() * 100) % 10) + 1;
  return randomNum;
}

function pickColor(colorMode) {
  if (colorMode === "colors") {
    return randomColor();
  } else if (colorMode === "trueRandom") {
    return "#000000";
  } else {
    return "#000000";
  }
}

// Select container for the grid
const container = document.querySelector("#grid-container");

// Default Values
let gridSize = 16;
const inputValue = document.querySelector("#size-input");
inputValue.value = gridSize;

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
      if (div.style.backgroundColor === "") {
        div.style.backgroundColor = pickColor(colorMode);
      }
    });
  });
}

// Error Message
let errorMessage = document.querySelector("#error");

// Colors Button
let colorButton = document.querySelector("#color");

colorButton.addEventListener("click", (e) => {
  e.preventDefault();
});

// Reset Button
let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", (e) => {
  e.preventDefault();

  reloadUI(gridSize);
});

// Edit Button
const editButton = document.querySelector("#edit");

editButton.addEventListener("click", (e) => {
  e.preventDefault();

  gridSize = inputValue.value;
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
