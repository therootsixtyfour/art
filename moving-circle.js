const circleEl = document.createElement("span");
circleEl.classList.add("circle");

const canvasEl = document.getElementById("canvas");

function addCircle(x, y) {
    circleEl.style.marginTop = y + "px";
    circleEl.style.marginLeft = x + "px";
    canvasEl.appendChild(circleEl);
}

canvasEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    console.log(xPos, yPos);
    addCircle(xPos, yPos);
})