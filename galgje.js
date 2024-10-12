// use https://github.com/FelixvL/johangalgjeapp/blob/main/galgje.js to impor words.
function wordGeneration() {
    let gameWord = "secret"
    console.log(gameWord)
    let wordLength = gameWord.length;
    console.log(wordLength)
}

//globals
wordGeneration();
gameDisplay();


// global variables
let usedLetters = [];

// Checken en melden dat of- het woord fout is, of- er meer dan 1 letter is getypt of- er geen letter of iets anders dan een letter is gytypt.
function gameInput(gameWord, wordLength) {
    input = document.getElementById("inputHangman").value;
    if (usedLetters.includes(input)) {          //Check if letter was already used
        alert("You have already used this letter.");
    }
    else if (input == gameWord) {               //Check if word is correctly guessed and restart game
        alert("Congratulations, you have guessed the word!")
        restartGame();
    }
    else if (input == '') {                     //Check if empty
        alert("Type a letter or a word.");
    }
    else if (input.charAt(0) === input.charAt(1) && input.charAt(1) === input.charAt(2)) {
        alert("This is not a word.");
    }
    else if (isLetter(input) == false) {        //Check if it is a letter using isLetter function
        alert("Only letters from the alfabet.");
    } //CHECK THIS ONE. NOT WORKING!!!
    // else if (input.length == wordLength) { //Check length of chosen gameword with guess.
    //     alert("Nice try, but that is not the secret word.");
    // }
    else if (input.length >= 1) {
        alert("Only one letter or a word");
    }
    else {
        wordArray();
    }
    document.getElementById("inputHangman").value = ''; //Maak tekstvak leeg na input.
    gameDisplay()
}

function isLetter(input) {  // Checkt of het wel een letter is.
    return input.toLowerCase() != input.toUpperCase();
}

function wordArray() {
    let addLetters = usedLetters.unshift(input);
    console.log(usedLetters);
    document.getElementById("usedLetterDisplay").innerHTML = usedLetters
}

// Display om te tonen op het scherm
function gameDisplay(wordLength, gameWord) {
    let letterGuesses = 0
    let wordGuesses = 0
    let blankLetters = wordLength * "_"
    // console.log(blankLetters)
}

function gameMain(gameWord) {

}

function restartGame() {

}
