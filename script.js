const container = document.getElementById('container');

function makeCells(numCells) {
  for (let i = 0; i < numCells * numCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cells');
    cell.style.width = 100 / numCells + `%`;
    // add mouseover event function
    container.appendChild(cell);
  }
}



makeCells(16);