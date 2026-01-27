const container = document.querySelector('.container');

function makeCells(numCells) {
  for (let i = 0; i < numCells; i++) {
    let cells = document.createElement('div');
    cells.classList.add('cells')
    container.appendChild(cells);
  }
}

makeCells(100);