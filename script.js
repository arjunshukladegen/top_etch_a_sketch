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

// Colors
const pastelTheme = {
  1: "#F7A9A8",
  2: "#FBC99D",
  3: "#FDF0A8",
  4: "#B8E0C8",
  5: "#A0D8D3",
  6: "#ABC7E6",
  7: "#C9B6E4",
  8: "#E4B4D4",
  9: "#D6C3A9",
  10: "#F3E9DD",
};

// Colors
const forestTheme = {
  1: "#1B3A2F",
  2: "#3B6B4A",
  3: "#7A9B6E",
  4: "#4A3423",
  5: "#7B5E3B",
  6: "#B89968",
  7: "#E4D9BC",
  8: "#EFE8D6",
  9: "#C9A227",
  10: "#8C2F39",
};

// Colors
const oceanTheme = {
  1: "#0A2E4D",
  2: "#14507A",
  3: "#3A7CA5",
  4: "#0D6E6E",
  5: "#35A29F",
  6: "#7FD1C7",
  7: "#B8E6DF",
  8: "#E6CE9C",
  9: "#F2E6CC",
  10: "#E76F51",
};

// Colors
const twilightTheme = {
  1: "#2E1A47",
  2: "#55357A",
  3: "#8264B0",
  4: "#7A3B5E",
  5: "#B05A82",
  6: "#D98BAE",
  7: "#3B4A6B",
  8: "#6B7CA0",
  9: "#E0B14E",
  10: "#E7D9F0",
};

// Colors
const retroTheme = {
  1: "#8C3B1E",
  2: "#C05A2E",
  3: "#E08A4B",
  4: "#A8781E",
  5: "#D4A017",
  6: "#E8C35A",
  7: "#1E5C5A",
  8: "#3E8E88",
  9: "#EFE0C0",
  10: "#6B8E23",
};

function randomHex() {
  hexCode = "#";

  for (let i = 0; i < 6; i++) {
    // Random number from 0-15
    let randomNum = Math.round(Math.random() * 100) % 16;
    if (randomNum > 9) {
      if (randomNum === 10) {
        randomNum = "A";
      } else if (randomNum === 11) {
        randomNum = "B";
      } else if (randomNum === 12) {
        randomNum = "C";
      } else if (randomNum === 13) {
        randomNum = "D";
      } else if (randomNum === 14) {
        randomNum = "E";
      } else if (randomNum === 15) {
        randomNum = "F";
      }
    }
    hexCode = hexCode + randomNum;
  }
  return hexCode;
}

// Returns random number from 1-10, for color theme/modes
function randomColor() {
  // Gets a random number from 1 to 10
  let randomNum = (Math.round(Math.random() * 100) % 10) + 1;
  return randomNum;
}

function pickColor(colorMode) {
  if (colorMode === "rainbow") {
    return rainbowTheme[randomColor()];
  } else if (colorMode === "random") {
    return randomHex();
  } else if (colorMode === "pastel") {
    return pastelTheme[randomColor()];
  } else if (colorMode === "ocean") {
    return oceanTheme[randomColor()];
  } else if (colorMode === "retro") {
    return retroTheme[randomColor()];
  } else if (colorMode === "twilight") {
    return twilightTheme[randomColor()];
  } else if (colorMode === "forest") {
    return forestTheme[randomColor()];
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
const errorMessage = document.querySelector("#error");

// Colors Button
const colorButton = document.querySelector("#color");
const colorSelection = document.getElementById("color-select");
colorSelection.value = "default";

colorButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (colorMode === colorSelection.value) {
    errorMessage.textContent = `Theme was already selected.`;
  } else {
    colorMode = colorSelection.value;
  }
  reloadUI(gridSize);
});

// Reset Button
const resetButton = document.querySelector("#reset");

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
