const divEl = document.getElementById("thing");
const noticeEl = document.getElementById("notice");

function divFill () {
    if (divEl.classList.length === 0) {
        divEl.classList.add("on")
        noticeEl.innerText = "status: on";
    } else if (divEl.classList.length === 1) {
        divEl.classList.remove("on");
        noticeEl.innerText = "status: off";
    } else {
        console.log("trouble"); 
    }
}

divEl.addEventListener('click', divFill);