/* grid can be x squared */

const gridContainerEl = document.getElementById("grid-container");

// want user input for grid size...or make it different based on screens?

let n = 4;

function makeGrid(n) {
    /** make rows and columns */
    gridContainerEl.style.gridTemplateRows = `repeat(${n}, 1fr)`;
    gridContainerEl.style.gridTemplateColumns = `repeat(${n}, 1fr)`;

    /** make items to go into grid  */
    for (let index = 0; index < (Math.pow(n, 2)); index++) {
        const gridItemEl = document.createElement("div");
        gridItemEl.classList.add("grid-item");
        gridContainerEl.appendChild(gridItemEl);
    }
}

makeGrid(n);

// add event listener to color the blocks 
// The following three functions came from Nick @sorrellio on codepen
function getGridElementsPosition(index) {
    const gridEl = document.getElementById("grid-container");

    // our indexes are zero-based but gridColumns are 1-based, so subtract 1
    let offset = Number(window.getComputedStyle(gridEl.children[0]).gridColumnStart) - 1; 

    // if we haven't specified the first child's grid column, then there is no offset
    if (isNaN(offset)) {
        offset = 0;
    }
    const colCount = window.getComputedStyle(gridEl).gridTemplateColumns.split(" ").length;

    const rowPosition = Math.floor((index + offset) / colCount);
    const colPosition = (index + offset) % colCount;

    //Return an object with properties row and column
    return { row: rowPosition, column: colPosition };
}
  
function getNodeIndex(elm) {
    var c = elm.parentNode.children,
    i = 0;
    for (; i < c.length; i++) {
        if (c[i] == elm) return i;
        //just gives the list down the children, 0 indexed.
}}

function addClickEventsToGridItems() {
    let gridItems = document.getElementsByClassName("grid-item");
    for (let i = 0; i < gridItems.length; i++) {
      gridItems[i].onclick = (e) => {
        gridItems[i].style.backgroundColor = "black"; //this is my own addition
        let position = getGridElementsPosition(getNodeIndex(e.target));
        console.log(
          `Node position is row ${position.row}, column ${position.column}`
        );
      };
    }
  }
  
  
  addClickEventsToGridItems();