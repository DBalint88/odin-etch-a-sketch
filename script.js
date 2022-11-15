let currentSketchBox = document.getElementById("current-sketch-box");
const densityButton = document.getElementById("density-button");
const resetButton = document.getElementById("reset-button");
const main = document.getElementById("main");
let density = 16;
let sketchCell;


populateSketchBox();

densityButton.addEventListener("click", getGridDensity);

function getGridDensity () {
    density = prompt("Please enter a number between 1 & 100.");
    if (!(density <= 100 && density >= 0) || !(Number.isInteger(density))) {
        density = 16
        alert("Invalid entry. Please enter an integer between 1 & 100.")
    }
    changeGrid(density);
    populateSketchBox(density);
}

function changeGrid (density = 16) {
    currentSketchBox.removeAttribute("id");
    currentSketchBox.remove();
    currentSketchBox = document.createElement('div');
    currentSketchBox.classList.add("sketch-box");
    currentSketchBox.id = "current-sketch-box";
    currentSketchBox.style.gridTemplateColumns = "repeat(" + density + ", " + 960/density + "px)";
    currentSketchBox.style.gridTemplateRows = "repeat(" + density + ", " + 960/density + "px)"; 
    main.appendChild(currentSketchBox);
}

function populateSketchBox (density = 16) {
    for (let i = 0; i < density*density; i++) {
        let newCell = document.createElement('div');
        newCell.classList.add("sketch-cell");
        newCell.style.width = 960 / density + "px";
        newCell.style.height = 960 / density + "px";
        currentSketchBox.appendChild(newCell);
    }
    sketchCell = document.getElementsByClassName('sketch-cell');
    for (const cell of sketchCell) {
        cell.addEventListener("mouseover", draw);
    }
}

function draw () {
    this.style.backgroundColor = "black";
}

