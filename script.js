const container = document.getElementById('container');
const newGrid = document.getElementById('new-grid');
const clearGrid = document.getElementById('clear-grid');

function makeCells(numCells) {
  for (let i = 0; i < numCells * numCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cells');
    cell.style.width = 100 / numCells + `%`;
    // add mouseover event function
    cell.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'black';
    });
    container.appendChild(cell);
  }
}

// function that makes the hover event listener for the cells

// function that creates a new grid of cells

// function that clears grid





makeCells(16);