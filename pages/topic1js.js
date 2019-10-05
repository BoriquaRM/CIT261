// JS page for Topic 1
// David Olsen, CIT261, BYU-I Online
// Comments are helpful guides within the code, and offer no susbstance to the code imbedded. They are made using double-slashes, but only apply to the line on which it is written. Even if word-wrap is enabled, this comment still only shows up on line 3.

// #1 Loops
		function function1() {
			var x = 0;
			while(x < 4) {
				var showLoop = document.getElementById('loopID');
				showLoop.innerHTML += "Loop " + x + "." + "<br>";
				x++;
			}
			document.getElementById("buttonID1").style = "display:none;";
		}

// #2 Conditional Statements
		function function2() {
			var response;
			var user = prompt("What's your name?");
			if (confirm && user == "") {
				response = "Come on, you've gotta have a name.";
			}
			else if (user == "asdf" || user == 123) {
				response = "Dude, '" + user + "' is not a name.";
			}
			else if (user == "Yoda") {
				response = "Mmmm, Jedi master, you are.";
			} 
			else if (user == null || user == "") {
				response = "Well fine then...";
			} 
			else {
				response = "Hello " + user + "!";
			}
			document.getElementById("pID2").innerHTML = response;
		}

// #3 Functions
		//Range of numbers to pick from
var pick = {
range: 1000,
roll: function () {
var randomNumber = Math.floor(Math.random() * this.range) + 1;
return randomNumber;
}
}
//Shows the number generated
function showNumber(number) {
var numberResult = document.getElementById('numberResult');
numberResult.innerHTML = number;
}
//Clickable button
var button = document.getElementById('button3');
//Clicking button runs "function()"
button.onclick = function() {
var result = pick.roll();
showNumber(result);
}

// #4 Variables 
		// var a = 5;
		// var b = "Five";

// #5 Parameters 
		function theAnswer() {
			function function5(x, y) { 
				return x + y;
			}
			document.getElementById("pID5").innerHTML = function5(40, 2); 
			document.getElementById("buttonID5").style = "display:none;";
		}
		
// #6 Arrays 
		function array() {
			var bestThings = ["Sneks", " Chips", " Hot Sauce"];
			document.getElementById("pID6").innerHTML = bestThings; 
			document.getElementById("buttonID6").style = "display:none;";
		}

// #7 Associative Arrays
		var foodPop = ["Chips", " Salsa", " Nachos", " Cake", " Cookies", " Chocolate"];
		document.getElementById("pID7a").innerHTML = foodPop;
		function arrayAssA() {
			foodPop.pop();
			document.getElementById("pID7a").innerHTML = foodPop;
			if (foodPop.length < 1 || foodPop == undefined) {
				document.getElementById("pID7a").innerHTML = "All gone.";
			}
		}
		var foodShift = ["Chips", " Salsa", " Nachos", " Cake", " Cookies", " Chocolate"];
		document.getElementById("pID7b").innerHTML = foodShift;
		function arrayAssB() {
			foodShift.shift();
			document.getElementById("pID7b").innerHTML = foodShift;
			if (foodShift.length < 1 || foodShift == undefined) {
				document.getElementById("pID7b").innerHTML = "All gone.";
			}
		}