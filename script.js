var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var typeOfGrad = "";

function tc() {
    return css.textContent = body.style.background + ";";
}
function colors() {
    return color1.value + "," + color2.value + ")"
}

function revColors() {
    return color2.value + "," + color1.value + ")"
}

function updColor() {
    body.style.background = typeOfGrad + colors();
    tc()
}

gradHor();

function gradHor() {
    typeOfGrad = "linear-gradient(to right,";
        body.style.background = typeOfGrad + colors();
        tc()
}

color1.addEventListener("input", updColor);
color2.addEventListener("input", updColor);

function crEl() {
    return document.createElement("button")
}

const box = document.createElement("div");
box.id = "box";
document.body.appendChild(box);

var button1 = crEl();
var txt1 = document.createTextNode("🢀");
button1.className="btn"
button1.appendChild(txt1);
box.appendChild(button1);

function set90degLinGradient() {
    typeOfGrad = "linear-gradient(90deg, "
    body.style.background = typeOfGrad + colors();
    tc();
}

var button2 = crEl();
var txt2 = document.createTextNode("🢁");
button2.className="btn"
button2.appendChild(txt2);
box.appendChild(button2);

function set180degLinGradient() {
    typeOfGrad = "linear-gradient(180deg, "
    body.style.background = typeOfGrad + colors();
    tc();
}

var button3 = crEl();
var txt3 = document.createTextNode("🢃");
button3.className="btn"
button3.appendChild(txt3);
box.appendChild(button3);

function set0degLinGradient() {
    typeOfGrad = "linear-gradient(0deg, "
    body.style.background = typeOfGrad + colors();
    tc();
}

var button4 = crEl();
var txt4 = document.createTextNode("🢂");
button4.className="btn"
button4.appendChild(txt4);
box.appendChild(button4);

function set270degLinGradient() {
    typeOfGrad = "linear-gradient(270deg, "
    body.style.background = typeOfGrad + colors();
    tc();
}

const box2 = document.createElement("div");
box2.id = "box2";
document.body.appendChild(box2);

var button5 = crEl();
var txt5 = document.createTextNode("🢆");
button5.className="btn"
button5.appendChild(txt5);
box2.appendChild(button5);

function set315degLinGradient() {
    typeOfGrad = "linear-gradient(315deg, "
    body.style.background = typeOfGrad + colors();
    tc();
}

var button6 = crEl();
var txt6 = document.createTextNode("🢅");
button6.className="btn"
button6.appendChild(txt6);
box2.appendChild(button6);

function set225degLinGradient() {
    typeOfGrad = "linear-gradient(225deg, "
    body.style.background = typeOfGrad + colors();
    tc();
}

var button7 = crEl();
var txt7 = document.createTextNode("🢄");
button7.className="btn"
button7.appendChild(txt7);
box2.appendChild(button7);

function set135degLinGradient() {
    typeOfGrad = "linear-gradient(135deg, "
    body.style.background = typeOfGrad + colors();
    tc();
}

var button8 = crEl();
var txt8 = document.createTextNode("🢇");
button8.className="btn"
button8.appendChild(txt8);
box2.appendChild(button8);

function set45degLinGradient() {
    typeOfGrad = "linear-gradient(45deg, "
    body.style.background = typeOfGrad + colors();
    tc();
}

//Random Colors Button
var button = crEl();
var txt = document.createTextNode("Random colors");
button.className="btn"
button.appendChild(txt);
body.appendChild(button);

function randomize(){
    for (var i = 0; i < 1; i++)
    var r = Math.round(Math.random()*256);
    var g = Math.round(Math.random()*256);
    var b = Math.round(Math.random()*256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function getRandomRgb() {
    return randomize();
}
 
function getRandomRgb2() {
    return randomize();
}

function randomGradient() {
    body.style.background = typeOfGrad + getRandomRgb() + ", " + getRandomRgb2() + ")";
    css.textContent = body.style.background +";";
}

button.addEventListener("click", randomGradient);

var button9 = crEl();
var txt9 = document.createTextNode("Radial Gradient");
button9.className="btn"
button9.appendChild(txt9);
body.appendChild(button9);

function setRadialGradient() {
    typeOfGrad = "radial-gradient("
    body.style.background= typeOfGrad + colors();
    tc()
}

var button10 = crEl();
var txt10 = document.createTextNode("Rainbow Gradient");
button10.className="btn"
button10.appendChild(txt10);
body.appendChild(button10);

function rainbowGradient() {
    body.style.background = "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)";
    tc();
}

button1.addEventListener("click", set90degLinGradient);
button2.addEventListener("click", set180degLinGradient);
button3.addEventListener("click", set0degLinGradient);
button4.addEventListener("click", set270degLinGradient);
button5.addEventListener("click", set315degLinGradient);
button6.addEventListener("click", set225degLinGradient);
button7.addEventListener("click", set135degLinGradient);
button8.addEventListener("click", set45degLinGradient);
button9.addEventListener("click", setRadialGradient);
button10.addEventListener("click", rainbowGradient);