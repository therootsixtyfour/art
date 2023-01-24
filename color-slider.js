const redSlider = document.getElementById("red-slider");
const blueSlider = document.getElementById("blue-slider");
const greenSlider = document.getElementById("green-slider");
const aSlider = document.getElementById("a-slider");

const redValue = document.getElementById("red-value");
const blueValue = document.getElementById("blue-value");
const greenValue = document.getElementById("green-value");
const aValue = document.getElementById("a-value");

const colorMe = document.getElementById("color-me");
const bodyEl = document.getElementsByTagName("body");

redValue.innerText = redSlider.value;
blueValue.innerText = blueSlider.value;
greenValue.innerText = greenSlider.value;
aValue.innerText = aSlider.value;

let userRed = "0";
let userBlue = "0";
let userGreen= "0";
let userA = "1"

colorDiv(); 

function colorDiv() {
    colorMe.style.backgroundColor = `rgba(${userRed}, ${userGreen}, ${userBlue}, ${userA})`
}

redSlider.oninput = function() {
    redValue.innerText = this.value;
    userRed = this.value;
    colorDiv();
}

greenSlider.oninput = function() {
    greenValue.innerText = this.value;
    userGreen = this.value;
    colorDiv();
}

blueSlider.oninput = function() {
    blueValue.innerText = this.value;
    userBlue = this.value;
    colorDiv();
}

aSlider.oninput = function() {
    aValue.innerText = this.value;
    userA = this.value;
    colorDiv();
}