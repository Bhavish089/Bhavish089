const grid = document.getElementById('grid');
const cols = Math.ceil(window.innerWidth / 60);
const rows = Math.ceil(window.innerHeight / 60) + 2;

function createRow() {
  const row = document.createElement('div');
  row.className = 'grid-row';
  for (let i = 0; i < cols; i++) {
    const cell = document.createElement('div');
    cell.className = 'grid-cell';
    row.appendChild(cell);
  }
  return row;
}

// Initial fill
for (let i = 0; i < rows; i++) {
  grid.appendChild(createRow());
}

// Animate upward infinitely
let offset = 0;
function animate() {
  offset += 1;
  grid.style.transform = `translateY(-${offset}px)`;

  if (offset % 60 === 0) {
    grid.appendChild(createRow());
    grid.removeChild(grid.firstChild);
  }

  requestAnimationFrame(animate);
}
animate();

let thslider = document.getElementsByClassName(".switch")

thslider.onclick = function() {
  alert("working");
}