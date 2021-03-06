//declare global variables
var currentWeatherDiv = $("#current-weather-div");

//when the user clicks the search button...
//we will call the weather API
function currentWeather() {
  //create a query URL & API key
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&mode=json&appid=349502f2a4f0d6ec4cf04d1a6f9b5eb3";
  $.ajax({
    url: queryURL,
    method: "GET",
    error: function() {
      alert("Error:  City not found.");
    }
  }).then(function(response) {
    //we will take the results of the API
console.log(response)
console.log(response.wind.speed)

    //From the results, we will populate city, date, icon, temperature, humidity, wind speed and UV Index
    //city and the date
    var currentHeading = $("<h2>");
    currentHeading.text(
      response.name + " (" + moment.unix(response.dt).format("MM/DD/YYYY") + ")"
    );
    currentHeading.addClass("display-inline");
    var weatherIcon = $(
      '<img src="http://openweathermap.org/img/wn/' +
        response.weather[0].icon +
        '@2x.png">'
    );
    var currentTemp = $("<p>");
    currentTemp.text("Temperature: " + response.main.temp.toFixed(0) + "°F");

    var currentHumidity = $("<p>");
    currentHumidity.text("Humidity: " + response.main.humidity + "%");

    var currentWind = $("<p>");
    currentWind.text("Wind Speed: " + response.wind.speed.toFixed(1) + " MPH");
    
    currentWeatherDiv.append(currentHeading);
    currentWeatherDiv.append(weatherIcon);
    currentWeatherDiv.append(currentTemp);
    currentWeatherDiv.append(currentHumidity);
    currentWeatherDiv.append(currentWind);
    //This is where you would add temperature, humidity, wind speed & uv index
    cityAndDateEl.text(response.name + " (" + date + ")");
    cityAndDateEl.append(
      $(
        '<img src="https://openweathermap.org/img/wn/' +
          response.weather[0].icon +
          '.png">'
      )
    );
    currentTempEl.text("Temperature: " + response.main.temp.toFixed(0) + "°F");
    currentHumidityEl.text("Humidity: " + response.main.humidity + "%");
    currentWindEl.text(
    "Wind Speed: " + response.wind.speed.toFixed(1) + " MPH"
    );

  });
}
