//declare global variables
var searchHistoryDiv = $("#search-history-div");
var searchInput = $("#Search-input");
var searchButton = $("#search-button");
var city;

//create a click event for the search button
searchButton.on("click", function() {
  //take the string that the user entered in the search input
  city = searchInput.val();
  //create a button labeled with the user's string
  var newButton = $("<button>");
  newButton.text(city);
  newButton.addClass("search-history-button");
  //put the button inside the search history div
  searchHistoryDiv.prepend(newButton);
});
