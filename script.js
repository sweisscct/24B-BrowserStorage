let submitColourButton = document.getElementById("submit-colour-change");
let colourSelector = document.getElementById("background-colour-selector");
let body = document.getElementsByTagName("body")[0];

body.style.backgroundColor = localStorage.getItem("background-colour");


submitColourButton.addEventListener("click", () => {
    let newColour = colourSelector.value;
    body.style.backgroundColor = newColour;

    localStorage.setItem("background-colour", newColour);
});

/*
    Exercise
    Include an input that will change the text size on screen
    Persist this setting
*/