// JS page for Topic 1
// David Olsen, CIT261, BYU-I Online
// Comments are helpful guides within the code, and offer no susbstance to the code imbedded. They are made using double-slashes, but only apply to the line on which it is written. Even if word-wrap is enabled, this comment still only shows up on line 3.

// #1 Loops

	// for
		function for1() {
			document.getElementById("pID1aa").innerHTML = "''99 Bottles Song''<hr class='red'>";
			var content = "";
			var x;
			for (x = 99; x > 96; x--) {
				content += "<b>" + x + "</b> bottles of beer on the wall,<br><b>" + x + "</b> bottles of beer!<br>Take one down, pass it around,<br><i>" + [x-1] + "</i> bottles of beer on the wall!<br><hr>";
				document.getElementById("pID1a").innerHTML = content;
			}
			document.getElementById("buttonID1a").style = "display:none;";
			document.getElementById("pID1ab").innerHTML = "And so on...";
		}
	
	// for/in
		function forIn1() {
			var content = "";
			var person = {name1: "David", name2: "Olsen"}; 
			var age = 33;
			var x;
			for (x in person) {
				content += person[x] + " ";
				document.getElementById("pID1b").innerHTML = "My name is " + content + ", and I am " + age + " years old.";
			}
			document.getElementById("buttonID1b").style = "display:none;";
		}
	
	// for/of

			var sneks = ['Nagini', 'Watsina', 'Lizzy'];
			var s;
			function forOf1() {
				for (s of sneks) {
					document.getElementById("pID1c").innerHTML = sneks + ". But the smallest is " + s + ".";
				}
			document.getElementById("buttonID1c").style = "display:none;";
		}
		
		function forOf2() {
			var sneks = ['Nagini', 'Watsina', 'Lizzy'];
			var x;
			for (x of sneks) {
				document.write(x + "<br >");
			}
		document.write("<br>You may want to refresh the page...");
		}
	
	
	// while
		function while1() {
			var x = 1;
			while(x < 8) {
				var showLoop = document.getElementById('pID1d');
				showLoop.innerHTML += "I can count to " + x + "<br>";
				x++;
			}
			document.getElementById("buttonID1d").style = "display:none;";
		}
	
	
	// do/while
		function doWhile1() {
			var text = ""
			var i = 0;
			do {
				text += "The number is " + i + "<br>";
				i++;
			}
			while (i < 6);
			document.getElementById("pID1e").innerHTML = text;
			document.getElementById("buttonID1e").style = "display:none;";
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
			document.getElementById("buttonID5").innerHTML = "What's the Ultimate Question...???";
			var btn = document.getElementById('buttonID5');
				btn.onclick = function () {
					document.getElementById('buttonID5').remove();
					this.remove();
					document.getElementById("pID5").innerHTML = "No idea."; 
				}
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