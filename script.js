let submitColourButton = document.getElementById("submit-colour-change");
let colourSelector = document.getElementById("background-colour-selector");
let body = document.getElementsByTagName("body")[0];


submitColourButton.addEventListener("click", () => {
    let newColour = colourSelector.value;
    body.style.backgroundColor = newColour;
});