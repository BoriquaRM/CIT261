var content = '{"name1":"David", "name2":"Olsen", "age":33, "city":"Phoenix", "state":"AZ", "food":"Nachos"}'
var obj = JSON.parse(content);
document.getElementById("pID1").innerHTML = "Hello, my name is " + obj.name1 + " " + obj.name2 + ", I am " + obj.age + " years old, I live in " + obj.city + ", " + obj.state + ", and my favorite food is " + obj.food + ".";


var obj2 = {"name1":"David", "name2":"Olsen", "age":33, "city":"Phoenix", "state":"AZ", "food":"Nachos"};
var myJSON = JSON.stringify(obj2);
document.getElementById("pID2").innerHTML = myJSON;