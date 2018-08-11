// Andrew Ton
// Assignment 6 - Gif Search
// app.js


// Check that DOM is loaded
$(document).ready(function() {

    // Create global variables
    var gifList = ["Cinemagraph", "City", "Water", "Islands", "Beach", "Underwater"];


    function generateButtons() {

        // Clear existing buttons
        $("#buttons-view").empty();

        for (var i = 0; i < gifList.length; i++) {
            // Then dynamicaly generating buttons for each search tag in the array
            var newButton = $("<button>");
            // Adding a class of movie-btn to our button
            newButton.addClass("gif-btn");
            // Adding a data-attribute, if statement to skip value add for 'cinemagraph' button since the string of cinemagraph will be appended later
            if (i != 0) { 
                newButton.val(gifList[i]);
            }
            // Providing the initial button text
            newButton.text(gifList[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(newButton);
          }

    }

    // add tag on-click event to add new tag button
    $("#add-tag").on("click", function(){
        event.preventDefault();
        gifList.push($("#tag-input").val());
        $("#tag-input").val(""); // clear search
        generateButtons();  
    })


    $("body").on("click", ".gif-btn", function(){
        console.log(this);
        var apiKey = "7WGHnvkB9WUox4GqyHbzvKyWt3EtvFbL";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=api_key=dc6zaTOxFJmzC&api_key=" + apiKey + "&q=" + this.value + " cinemagraph";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            // console.log(response); //test response object
            var resultsArray = response.data;
            console.log(resultsArray);
            
            //clear current gifs
            $("#gif-view").empty();

            // append gifs
            for (var i = 0; i < resultsArray.length; i++) {
            var tempDiv = $("<img>").attr("src", resultsArray[i].images.fixed_height.url);
            $("#gif-view").append(tempDiv);
            }
          })
    })



generateButtons();
});