/* grid can be x squared */

const gridContainerEl = document.getElementById("grid-container");

/*  want user input for grid size... 
    or make it different based on screens?
*/

let n = 8;

function makeGrid(n) {
    /** make rows and columns */
    gridContainerEl.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    gridContainerEl.style.gridTemplateColumns = `repeat(${n}, 1fr)`;

    /** make items to go into grid  */
    for (let index = 0; index < (Math.pow(n, 2)); index++) {
        const gridItemEl = document.createElement("div");
        gridItemEl.classList.add("grid-item", `grid${index}`);
        gridContainerEl.appendChild(gridItemEl);
    }
}


makeGrid(n);