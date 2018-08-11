#Trivia Game


Created a psychic game where the user tries to guess a random letter in 9 guesses.

# Link to deployed site


[Website](https://atton88.github.io/Trivia-Game/)

[GitHub Profile](https://github.com/atton88)

# Images

![About Me](\assets\images\1.PNG)

# technology used

- HTML
- CSS
- JavaScript
- Bootstrap CDN
- jQuery


# code snippets

Appending radio buttons was pretty crazy at first, but I ended up finding a way to make it readable and simple
```
for (j = 0; j < questions[i].z.length; j++) {
    var tempInput = $("<input>"); //temp div to hold new div

    // add attributes to input (radio, name, value)
    tempInput.attr("type", "radio");
    tempInput.attr("name", "radio"+i);  
    tempInput.attr("data-answer", questions[i].z[j]);
    
    //append the tempDiv and text to form
    tempForm.append(tempInput);
    tempForm.append(tempInput.attr("data-answer"));
}
    }
});
```
//check for correct and incorrect answers
for (var i = 0; i < questions.length; i++) {
    console.log($("input[name=radio"+i+"]:checked").attr("data-answer"));
    console.log(questions[i].a);
    if (questions[i].a === $("input[name=radio"+i+"]:checked").attr("data-answer")) {
        correct++;
    }
    else if ($("input[name=radio"+i+"]:checked").attr("data-answer")){
        incorrect++;
    }
    console.log($("input[name=radio"+i+"]:checked"));
        }

// clear appended elements
$("#timerDiv").empty();
$("#questions").empty();
    }
```

# Learning points
- More learning with jQuery and attributes
- Learned to append and add attributes more neatly
- Learned to use radio buttons and get values from them
- Learned to change the html entirely and build it back up in javascript

# Author 
[Andrew Ton](https://github.com/atton88)