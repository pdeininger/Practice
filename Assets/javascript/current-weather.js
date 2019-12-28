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
    console.log(response);
    //From the results, we will populate city, date, icon, temperature, humidity, wind speed and UV Index
  });
}
