const gridContainer = document.querySelector(".grid-container");

// Function to remove all children of container
function removeChildren() {
  let child = gridContainer.lastElementChild;
  while (child) {
    gridContainer.removeChild(child);
    child = gridContainer.lastElementChild;
  }
}

// Create 256 div elements
function createGrid(num) {
  let baseNum = Math.sqrt(num + 1);
  gridContainer.style.gridTemplateColumns = `repeat(${baseNum}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${baseNum}, 1fr)`;
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridContainer.appendChild(gridItem);

  console.log(`Num = ${num}`);

  // Cloning gridItem 255 times
  for (let i = 0; i < num; i++) {
    gridContainer.appendChild(gridItem.cloneNode(true));
  }
  colorDiv();
}

// Create 256 divs (16x16) by default
if (!gridContainer.lastElementChild) {
  createGrid(255);
}
//document.body.onload = createGrid(255);

// Change background color when mouse hovers over a div
function colorDiv() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(function (currentValue, currentIndex, listObj) {
    currentValue.addEventListener("mouseenter", function (e) {
      console.log("change background color");
      e.target.style.backgroundColor = "black";
    });
  });
}

// Change grid size
const gridBtn = document.querySelector("#adjust-grid-btn");
gridBtn.addEventListener("click", () => {
  let userInput;
  do {
    userInput = parseInt(
      prompt("Enter desired number of squares per side (max 100)")
    );
  } while (isNaN(userInput) || userInput < 1 || userInput > 100);

  removeChildren();
  createGrid(Math.pow(userInput, 2) - 1);
});
