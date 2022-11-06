var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

setGradient();

function setGradient() {
        body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
        css.textContent = body.style.background +";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
//Random Colors Button
var button = document.createElement("button");
var txt = document.createTextNode("Random colors");
button.className="btn"
button.appendChild(txt);
body.appendChild(button);

function randomize(){
    for (var i = 0; i < 1; i++)
    var num = Math.round(Math.random()*256);
    var num2 = Math.round(Math.random()*256);
    var num3 = Math.round(Math.random()*256);
    var r = num;
    var g = num2;
    var b = num3;
    return 'rgb('+r+', '+g+', '+b+')';
}

function getRandomRgb() {
    return randomize();
}
 
function getRandomRgb2() {
    return randomize();
}

function setGradient2() {
    body.style.background="linear-gradient(to right, "+getRandomRgb()+", "+getRandomRgb2()+")";
    css.textContent = body.style.background +";";
}

button.addEventListener("click", setGradient2);

// var button2 = document.createElement("button");
// var txt2 = document.createTextNode("Radial Gradient");
// button2.appendChild(txt2);
// body.appendChild(button2);

// function setRadialGradient() {
//     body.style.background="radial-gradient("+color1.value+", "+color2.value+") no-repeat center center fixed";
//     css.textContent = body.style.background +";";
// }

// var button3 = document.createElement("button");
// var txt3 = document.createTextNode("Linear Gradient");
// button3.appendChild(txt3);
// body.appendChild(button3);

// function setLinearGradient() {
//     body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
//     css.textContent = body.style.background +";";
// }


// button2.addEventListener("click", setRadialGradient);
// button3.addEventListener("click", setLinearGradient);