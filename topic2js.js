function objFunction() {
	var user = {
		fName : String(document.getElementById("fName").value),
		lName : String(document.getElementById("lName").value),
		age : String(document.getElementById("age").value),
		food : String(document.getElementById("food").value),
		allName : function() { 
			return this.fName + " " + this.lName; 
		}
	}
	document.getElementById("pID1").innerHTML = user.allName() + " is " + user.age + " years old, and enjoys eating " + user.food + ".";
}

function inheritanceFunction() {
	var user = new Object();
	user.first = document.getElementById("name1").value;
	user.last = document.getElementById("name2").value;
	document.getElementById("pID2").innerHTML = "Hello " + user.first + " " + user.last + ".";
}

function methodFunction1() {
	var user = new Object();
	user.first = "Charley";
	user.last = "the Unicorn";
	document.getElementById("pID4a").innerHTML = "Hello " + user.first + " " + user.last + " 1.";
}
function methodFunction2() {
	var user = new Object();
	user.first = "Charley";
	user.last = "the Unicorn";
	document.getElementById("pID4b").innerHTML = "Hello " + user["first"] + " " + user["last"] + " 2.";
}