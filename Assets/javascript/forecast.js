//declare global variables
var forecastDiv = $("#five-day-forecast-div");
//when the user clicks the search button,
//we're going to call a 16 day forecast API
function forecastWeather() {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial&mode=json&appid=349502f2a4f0d6ec4cf04d1a6f9b5eb3";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(res) {
    //create header that says 5 day forecast
    var newHeader = $("<h2>");
    newHeader.text("5-Day Forecast");
    forecastDiv.append(newHeader);
    //Create a div that is a flex box
    var flexDiv = $("<div>");
    flexDiv.addClass("flex-div");
    //use a for loop to create the date daily divs inside of the flex box div
    for (var i = 0; i < res.list.length; i += 8) {
      var newDailyDiv = $("<div>");
      newDailyDiv.addClass("daily-div");
      newDailyDiv.text(i);
      flexDiv.append(newDailyDiv);
    }
    forecastDiv.append(flexDiv);
  });
}
