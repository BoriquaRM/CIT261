function createFunction() {
	var liElement = document.createElement("li");
	var text = document.createTextNode("Thing");
	liElement.appendChild(text);
	
	var list = document.getElementById("pID1");
	list.insertBefore(liElement, list.childNodes[0]);
}

function removeFunction() {
	var list = document.getElementById("pID1");
	list.removeChild(list.childNodes[0]);
}