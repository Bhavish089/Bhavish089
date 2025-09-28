"use strict";

var grid = document.getElementById('grid');
var cols = Math.ceil(window.innerWidth / 60);
var rows = Math.ceil(window.innerHeight / 60) + 2;

function createRow() {
  var row = document.createElement('div');
  row.className = 'grid-row';

  for (var i = 0; i < cols; i++) {
    var cell = document.createElement('div');
    cell.className = 'grid-cell';
    row.appendChild(cell);
  }

  return row;
} // Initial fill


for (var i = 0; i < rows; i++) {
  grid.appendChild(createRow());
} // Animate upward infinitely


var offset = 0;

function animate() {
  offset += 1;
  grid.style.transform = "translateY(-".concat(offset, "px)");

  if (offset % 60 === 0) {
    grid.appendChild(createRow());
    grid.removeChild(grid.firstChild);
  }

  requestAnimationFrame(animate);
}

animate();
var thslider = document.getElementsByClassName(".switch");

thslider.onclick = function () {
  alert("working");
};