var height = 6; // number of guesses
var width = 5;  // number of letters in a word
var row = 0;    // current guess number
var col = 0;    // current letter number
var gameOver = false;
var word = "SQUID";  // the word to guess

window.onload = function() {
    initialize();
}


function initialize() {

    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++){
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "P";
            document.getElementById("board").appendChild(tile);
        }
    }
}