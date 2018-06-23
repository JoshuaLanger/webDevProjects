var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var rand = document.querySelector(".rand");
var body = document.getElementById("gradient");

function getInputColors() {
	setGradient(color1.value, color2.value);
}

function getRandColors() {
	var randArray = [];
	for (var i=0; i<6; i++) {
		var num = Math.floor(Math.random() * 256);
		randArray.push(num);
	}
	var randColor1 = `rgb(${randArray[0]}, ${randArray[1]}, ${randArray[2]})`;
	var randColor2 = `rgb(${randArray[3]}, ${randArray[4]}, ${randArray[5]})`;
	setGradient(randColor1, randColor2);
}

function setGradient(c1, c2) {
	body.style.background = 
	`linear-gradient(to right, ${c1}, ${c2})`;

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", getInputColors);

color2.addEventListener("input", getInputColors);

rand.addEventListener("click", getRandColors);