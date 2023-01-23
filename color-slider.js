const redSlider = document.getElementById("red-slider");
const blueSlider = document.getElementById("blue-slider");
const greenSlider = document.getElementById("green-slider");

const redValue = document.getElementById("red-value");
const blueValue = document.getElementById("blue-value");
const greenValue = document.getElementById("green-value");

const colorMe = document.getElementById("color-me");
const bodyEl = document.getElementsByTagName("body");

redValue.innerText = redSlider.value;
blueValue.innerText = blueSlider.value;
greenValue.innerText = greenSlider.value;

let userRed = "0";
let userBlue = "0";
let userGreen= "0";

console.log(`rgb(${userRed}, ${userBlue}, ${userGreen})`)

redSlider.oninput = function() {
    redValue.innerText = this.value;
    userRed = this.value;
    console.log(userRed);
    colorMe.style.backgroundColor = `rgb(${userRed}, ${userBlue}, ${userGreen})`
}

blueSlider.oninput = function() {
    blueValue.innerText = this.value;
    userBlue = this.value;
    colorMe.style.backgroundColor = `rgb(${userRed}, ${userBlue}, ${userGreen})`

}

greenSlider.oninput = function() {
    greenValue.innerText = this.value;
    userGreen = this.value;
    colorMe.style.backgroundColor = `rgb(${userRed}, ${userBlue}, ${userGreen})`

}

/* how to make background of element with variables? */


