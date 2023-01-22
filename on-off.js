const divEl = document.getElementById("thing");
const noticeEl = document.getElementById("notice");

function divFill () {
    if (divEl.classList.length === 0) {
        divEl.classList.add("on")
        noticeEl.innerText = "on";
    } else if (divEl.classList.length === 1) {
        divEl.classList.remove("on");
        noticeEl.innerText = "off";
    } else {
        console.log("trouble"); 
    }
}

divEl.addEventListener('click', divFill);

