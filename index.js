document.body.onload = createGrid();

// Create 256 div elements
function createGrid() {
  const gridContainer = document.querySelector(".grid-container");
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridContainer.appendChild(gridItem);

  console.log(gridContainer);

  // Cloning gridItem 255 times
  for (let i = 0; i < 255; i++) {
    gridContainer.appendChild(gridItem.cloneNode(true));
  }
}
