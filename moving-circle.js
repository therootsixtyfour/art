const circleEl = document.createElement("div");
circleEl.classList.add("circle");

const canvasEl = document.getElementById("canvas");

function addCircle() {
    circleEl.style.marginTop = "100px";
    canvasEl.style.marginLeft = "100px"
    canvasEl.appendChild(circleEl);
}

addCircle();

/* find xy coordinates of pointer, make the circle there.
delete on move. */
