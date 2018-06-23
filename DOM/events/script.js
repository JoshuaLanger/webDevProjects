var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	li.appendChild(btn);
	var btnX = document.createTextNode("X");
	btn.appendChild(btnX);
	li.appendChild(document.createTextNode(" " + input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function crossListElement(event) {
	event.target.classList.toggle("done");
}

function deleteListElement(event) {
	if (event.target.tagName === "BUTTON") {
		ul.removeChild(event.target.parentNode);
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", crossListElement);
ul.addEventListener("click", deleteListElement);