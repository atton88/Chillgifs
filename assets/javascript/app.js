// Andrew Ton
// Assignment 6 - Gif Search
// app.js


// on click, enlarges or add to slideshow queue
// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
// carousel

// Under every gif, display its rating (PG, G, so on).
// music switch

// Check that DOM is loaded
$(document).ready(function() {

    // Create global variables
    var gifList = ["Cinemagraph", "Seattle", "City", "Water", "Islands", "Beach", "Underwater", "Stream", "Clouds"];


    // Create Buttons
    function generateButtons() {

        // Clear existing buttons
        $("#buttons-view").empty();

        ////////////////////
        // Create Buttons //
        ////////////////////
        for (var i = 0; i < gifList.length; i++) {
            // Then dynamicaly generating buttons for each search tag in the array
            var newButton = $("<button>");
            // Adding a class of movie-btn to our button
            newButton.addClass("gif-btn shadow mr-1 mb-2 rounded border border-light text-info bg-dark");
            newButton.css("text-shadow", "1px 1px black");
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
        generateButtons();  
        generateGifs($("#tag-input").val());
        $("#tag-input").val(""); // clear search
    })

    // on-click of button
    $("body").on("click", ".gif-btn", function(){   
        console.log(this);
        generateGifs($(this).val());
    })

    // clear the current gifs
    $("#clearBtn").on("click", function() {
        $("#gif-view").empty();
    })

    // pulls gifs with search parameter as argument
    function generateGifs(str) {
        var apiKey = "7WGHnvkB9WUox4GqyHbzvKyWt3EtvFbL";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=api_key=dc6zaTOxFJmzC&api_key=" + apiKey + "&q=" + str + " cinemagraph";
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

            /////////////////
            // Append Gifs //
            /////////////////
            for (var i = 0; i < resultsArray.length; i++) {
            var tempDiv = $("<img>").attr("src", resultsArray[i].images.fixed_height.url);
            tempDiv.addClass("mr-2 mb-2 rounded shadow border border-dark");
            $("#gif-view").append(tempDiv);
            }
          })
    }
    
    function changeMusic() {
        var musicList = [
            {html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/pBAw6DhIZoA?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
            name:  "LoFi / ChillHop - UnsignedMusicz"},
            {html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ytJb-xDl69U?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
            name: "LoFi Hip-Hop - ChilledCow"},
            {html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/LsBrT6vbQa8?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
            name: "LoFi Hip-Hop - Chillhop Music"}
        ]


    }




generateButtons();
});