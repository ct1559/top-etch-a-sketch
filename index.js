const gridContainer = document.querySelector(".grid-container");

// Create 256 div elements
function createGrid() {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridContainer.appendChild(gridItem);

  // Cloning gridItem 255 times
  for (let i = 0; i < 255; i++) {
    gridContainer.appendChild(gridItem.cloneNode(true));
  }
}

// Create the 256 divs when page loads
document.body.onload = createGrid();

// Change background color when mouse hovers over a div
const gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach(function (currentValue, currentIndex, listObj) {
  currentValue.addEventListener("mouseenter", function (e) {
    console.log("change background color");
    e.target.style.backgroundColor = "black";
  });
});
