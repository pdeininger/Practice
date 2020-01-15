# Practice
weather dashboard
//create a function that takes search history from local storage and creates search history buttons as soon as the page loads
function historyButtons() {
  //get our array from local storage
  searchHistoryArray = JSON.parse(localStorage.getItem("searchHistory"));
  console.log(searchHistoryArray);
  //for loop to create buttons from the array
  for (var i = searchHistoryArray.length - 1; i >= 0; i--) {
    console.log("inside the for loop");
    // create a button for this index of the array
    var newButton = $("<button>");
    newButton.text(searchHistoryArray[i]);
    newButton.addClass("search-history-button");
    //create a click event for new button
    //put the button inside the search history div
    searchHistoryDiv.append(newButton);
  }
}

historyButtons();