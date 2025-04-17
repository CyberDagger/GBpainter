const container = document.querySelector("#container");
const btnReset = document.querySelector("#reset");

const CONTAINER_WIDTH = 512;

let mouseIsDown = false;

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
                e.target.style.background = "black";
            });
            cell.addEventListener("mouseover", (e) => {
                if (mouseIsDown) {
                    e.target.style.background = "black";
                }
            })
        }
    );
}

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