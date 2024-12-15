const colorBox = document.querySelector(".color-box");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

const rendomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
const colorChange = function () {
    colorBox.style.background = `${rendomColor()}`
}
let setInter;
start.addEventListener("click", function () {
   setInter = setInterval(colorChange, 1000);
})
stop.addEventListener("click", function () {
    clearInterval(setInter);
    setInter = null;
})