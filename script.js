var css = document.querySelector("h3");
var color = document.querySelector(".color");
var body = document.getElementById("background");

function setBackground ()
{
    body.style.background = color.value;
    css.textContent = body.style.background + ";";
}

color.addEventListener("input", setBackground);