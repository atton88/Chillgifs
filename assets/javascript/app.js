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
            newButton.addClass("gif-btn btn shadow mr-2 mb-2 rounded border border-light text-info bg-dark hvr-grow");
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

    // on-click of add button
    $("#buttons-view").on("click", ".gif-btn", function(){   
        event.preventDefault();
        generateGifs($(this).val());
        // $(this).attr("class", "gif-btn btn shadow mr-2 mb-2 rounded border border-light text-info bg-light hvr-grow");
    })

    // enlarge picture on click and reduce pic on re-click
    $("#content").on("click", ".gif", function(){
        console.log(this);
        if ($(this).attr("src") === $(this).attr("data-original")) {
            $(this).attr("src", $(this).attr("data-small"));

        } else {
            $(this).attr("src", $(this).attr("data-original"));
        }
    })

    // pulls gifs with search parameter as argument
    function generateGifs(str) {

        var apiKey = "7WGHnvkB9WUox4GqyHbzvKyWt3EtvFbL";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=api_key=dc6zaTOxFJmzC&limit=100&api_key=" + apiKey + "&q=" + str + " cinemagraph";

        // for remembering active search

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {

            var resultsArray = response.data;
            
            //clear current gifs and collapse menus
            $("#gif-view").empty();
            $('#collapseButton').collapse("hide");
            $('#collapseMusic').collapse("hide");

            /////////////////
            // Append Gifs //
            /////////////////
            for (var i = 0; i < resultsArray.length; i++) {
                var tempDiv = $("<img>").attr("src", resultsArray[i].images.fixed_height.url);
                tempDiv.attr("data-small", resultsArray[i].images.fixed_height.url);
                tempDiv.attr("data-original", resultsArray[i].images.original.url);
                tempDiv.attr("data-rating", resultsArray[i].rating);
                tempDiv.attr("data-still", resultsArray[i].images.fixed_height_still.url);
                tempDiv.attr("data-rating", resultsArray[i].rating);
                tempDiv.addClass("mr-2 mb-2 rounded shadow border border-dark gif");
                $("#gif-view").append(tempDiv);
            }
          })
    }
    
    ///////////////////////
    // Styling functions //
    ///////////////////////

    // on-click of page, close collapse window
    $("#content").on("click", function(){   
        $('#collapseButton').collapse("hide");
        $('#collapseMusic').collapse("hide");
    })

    // clear the current gifs
    $("#clearBtn").on("click", function() {
        $("#gif-view").empty();
    })

    // Clicking title, clears gifs
    $("h1").on("click", function() {
        $("#gif-view").empty();
    })

    // buttons open on hover
    $(".collapseButtonMain").hover(
        function() {
            $('#collapseButton').collapse("show");
                 }
    );

    // music opens on hover
    $(".musicButtonMain").hover(
        function() {
            $('#collapseMusic').collapse("show");
                 }
    );

    // changes music on click
    $("#music-view").on("click", ".musicBtn", function(){   
        event.preventDefault();
        $("#music").empty();
        $("#music").append($(this).val());
        // change color and active states of music icons
        for (var i=1; i < 4; i++) {
            $("#mbtn"+i).attr("class", "musicBtn btn btn-dark hvr-grow");
            $("#icon"+i).attr("class", "far fa-play-circle fa-2x text-secondary");
            if (parseInt(this.id.charAt(4)) === i) {
                $("#icon"+i).attr("class", "fas fa-play-circle fa-2x text-info");
            }  
        }
        $(this).addClass("active");
    })

generateButtons();
$('#collapseButton').collapse("show");
});