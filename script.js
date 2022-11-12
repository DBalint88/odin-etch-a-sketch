let sketchBox = document.getElementById("sketch-box");


for (let i=0; i<256; i++) {
    let newCell = document.createElement('div');
    newCell.classList.add("sketch-cell");
    sketchBox.appendChild(newCell);
}

let sketchCell = document.getElementsByClassName('sketch-cell');

for (const cell of sketchCell) {
    cell.addEventListener("mouseover", draw);
}

function draw () {
    this.style.backgroundColor = "black";
}