const container = document.getElementById('container');

function makeCells(numCells) {
  for (let i = 0; i < numCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cells');
    // add mouseover event function
    container.appendChild(cell);
  }
}

// run makeCells function

// const container = document.querySelector('.container');

// function makeCells(numCells) {
//   for (let i = 0; i < numCells; i++) {
//     let cells = document.createElement('div');
//     cells.classList.add('cells')
//     container.appendChild(cells);
//   }
// }

// makeCells(32);