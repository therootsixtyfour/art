const divEl = document.getElementById("thing");

function fillDiv () {
    divEl.classList.add("on");
    console.log("keydown");
}

divEl.addEventListener('click', divFill);


function divFill () {
    if (divEl.classList.length === 1) {
        divEl.classList.add("on")
        console.log("on");
    } else if (divEl.classList.length === 2) {
        divEl.classList.remove("on");
        console.log("off");
    } else {
        console.log("trouble"); 
    }
}