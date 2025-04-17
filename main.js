const container = document.querySelector("#container");
const btnReset = document.querySelector("#reset");
const picker0 = document.querySelector("#picker0");
const picker1 = document.querySelector("#picker1");
const picker2 = document.querySelector("#picker2");
const picker3 = document.querySelector("#picker3");

const CONTAINER_WIDTH = 512;
const COLOR_0 = "#c5caa4";
const COLOR_1 = "#8c926b";
const COLOR_2 = "#4a5138";
const COLOR_3 = "#181818";

let mouseIsDown = false;
let currentColor = COLOR_0;

function drawGrid(squaresPerSide) {
    let size = CONTAINER_WIDTH / squaresPerSide;
    let numberCells = squaresPerSide ** 2;
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.style.height = size + "px";
    newCell.style.width = size + "px";
    for (let i = 0; i < numberCells; i++) {
        container.appendChild(newCell.cloneNode(true));
    }
    const cellList = document.querySelectorAll(".cell");
    cellList.forEach(
        (cell) => {
            cell.addEventListener("mousedown", (e) => {
                mouseIsDown = true;
                e.target.style.background = currentColor;
            });
            cell.addEventListener("mouseover", (e) => {
                if (mouseIsDown) {
                    e.target.style.background = currentColor;
                }
            })
        }
    );
}

picker0.addEventListener("click", () => {
    currentColor = COLOR_0;
    picker0.style.border = "8px double black";
    picker1.style.border = "4px solid black";
    picker2.style.border = "4px solid black";
    picker3.style.border = "4px solid black";
})
picker1.addEventListener("click", () => {
    currentColor = COLOR_1;
    picker0.style.border = "4px solid black";
    picker1.style.border = "8px double black";
    picker2.style.border = "4px solid black";
    picker3.style.border = "4px solid black";
})
picker2.addEventListener("click", () => {
    currentColor = COLOR_2;
    picker0.style.border = "4px solid black";
    picker1.style.border = "4px solid black";
    picker2.style.border = "8px double black";
    picker3.style.border = "4px solid black";
})
picker3.addEventListener("click", () => {
    currentColor = COLOR_3;
    picker0.style.border = "4px solid black";
    picker1.style.border = "4px solid black";
    picker2.style.border = "4px solid black";
    picker3.style.border = "8px double black";
})

window.addEventListener("mouseup", () => {
    mouseIsDown = false;
})

btnReset.addEventListener("click", () => {
    let squaresPerSide = 16;
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    drawGrid(squaresPerSide);
});

drawGrid(16);