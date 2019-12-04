if (place = " ") {
	place = "????";
	document.getElementById('city').innerHTML = place;
}

var place = prompt("Enter a city in the world to get current weather information.");

let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=imperial&appid=a04e508674b6db51e279599363753e7a";
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
	let weatherData = JSON.parse(weatherRequest.responseText);
	console.log(weatherData);

	/*Shows the city name and country code*/
		document.getElementById('city').innerHTML = weatherData.name + ", " + weatherData.sys.country;
	/*Temps, Humidity, Wind Speed*/
	/*This picks out the various temperature readings under the .main array*/
		document.getElementById('temp').innerHTML = weatherData.main.temp.toFixed(0) + "&deg;F";
		document.getElementById('lowtemp').innerHTML = weatherData.main.temp_min.toFixed(0) + " - ";
		document.getElementById('hightemp').innerHTML = weatherData.main.temp_max.toFixed(0) + "&deg;F";
		document.getElementById('humidity').innerHTML = weatherData.main.humidity + "%";
		document.getElementById('windspeed').innerHTML = weatherData.wind.speed.toFixed(0) + " mph";
	/*Description of weather*/
	/*This selects the 'description' of the sky, under the .weather array*/
		document.getElementById('desc').innerHTML = weatherData.weather[0].description;
	/*Weather Icon*/
	/*This picks out a premade icon on the JSON to reflect a visual for the weather description*/
		let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
		let desc = weatherData.weather[0].description;
		document.getElementById('img').setAttribute('src', icon);
		document.getElementById('img').setAttribute('alt', desc);
		document.getElementById('img').setAttribute('title', desc);
}