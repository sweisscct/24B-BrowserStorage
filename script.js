let submitColourButton = document.getElementById("submit-colour-change");
let colourSelector = document.getElementById("background-colour-selector");
let body = document.getElementsByTagName("body")[0];
let submitFontButton = document.getElementById("submit-font-size-change");
let fontSizeSelector = document.getElementById("font-size-selector");

body.style.backgroundColor = localStorage.getItem("background-colour");
body.style.fontSize = localStorage.getItem("font-size");

submitColourButton.addEventListener("click", () => {
    let newColour = colourSelector.value;
    body.style.backgroundColor = newColour;

    localStorage.setItem("background-colour", newColour);
});

submitFontButton.addEventListener("click", () => {
    let newSize = fontSizeSelector.value+"px";
    console.log(newSize);
    body.style.fontSize = newSize;

    localStorage.setItem("font-size", newSize);
})

/*
    Exercise
    Include an input that will change the text size on screen
    Persist this setting
*/