document.getElementById("animateTDjs").style.color = "red";

function makeSmaller() {
	document.getElementById("animateTDjs").style.WebkitTransition = "all 2s";
	document.getElementById("animateTDjs").style.transition = "font-size 4s";
	document.getElementById("animateTDjs").style.fontSize = "20%";
}
function makeBigger() {
	document.getElementById("animateTDjs").style.WebkitTransition = "all 2s";
	document.getElementById("animateTDjs").style.transition = "font-size 4s";
	document.getElementById("animateTDjs").style.fontSize = "150%";
}
function makeNormal() {
	document.getElementById("animateTDjs").style.WebkitTransition = "all 2s";
	document.getElementById("animateTDjs").style.transition = "font-size 4s";
	document.getElementById("animateTDjs").style.fontSize = "85%"; 
}
function changeFont() {
	document.getElementById("animateTDjs").style.fontFamily = "Times New Roman";
}
function changeFontBack() {
	document.getElementById("animateTDjs").style.fontFamily = "Agency FB, serif";
}