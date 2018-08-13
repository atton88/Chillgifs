#Trivia Game


Created a psychic game where the user tries to guess a random letter in 9 guesses.

# Link to deployed site


[Website](https://atton88.github.io/Trivia-Game/)

[GitHub Profile](https://github.com/atton88)

# Images

![About Me](\assets\images\capture1.PNG)
![About Me](\assets\images\capture2.PNG)


# technology used

- HTML
- CSS
- JavaScript
- Bootstrap CDN
- jQuery
- Giphy API
- Awesome Fonts (Icons)
- Google Fonts (Fonts)
- Hover.css (Button Animations)


# code snippets

Getting the response from the API and using the results to add data to the gifs was a big task, but ended up being relatively simple
```
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
```

Small if statement to for enlarging the gif on click and back
```
if ($(this).attr("src") === $(this).attr("data-original")) {
    $(this).attr("src", $(this).attr("data-small"));

} else {
    $(this).attr("src", $(this).attr("data-original"));
}
```

# Learning points
- More learning with jQuery and attributes
- Learned to read API documentation
- Learned to query API's and implement their return responses
- More learning with dynamic html changes
- Learned to use hover.css animations
- Learned to use the Bootstrap collapse buttons and functions

# Author 
[Andrew Ton](https://github.com/atton88)