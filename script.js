const container = document.getElementById('container');
const newGridButton = document.getElementById('new-grid');
const clearGridButton = document.getElementById('clear-grid');
let cellCount = 0;

// function to make cells
function makeCells(numCells) {
  for (let i = 0; i < numCells * numCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cells');
    cell.style.width = 100 / numCells + `%`;
    cell.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'black';
    });
    container.appendChild(cell);
  }
  cellCount = numCells;
}

// function that clears grid
function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// function that creates a new grid of cells
function newGrid() {
  let newCellGrid = prompt('Enter a number between 1 and 100:');
  newCellGrid = parseInt(newCellGrid);
  if (newCellGrid >= 1 && newCellGrid <= 100) {
    makeCells(newCellGrid);
  } else {
    alert('Enter a number between 1 and 100');
  }
}

// button that resets current grid to white
clearGridButton.addEventListener('click', () => {
  clearGrid();
  makeCells(cellCount);
})

// button that creates new grid
newGridButton.addEventListener('click', () => {
  clearGrid();
  newGrid();
})

// default cell grid on page start
makeCells(16);