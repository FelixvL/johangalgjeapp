

// global variables
let usedLetters = [];
let wordToGuess;

function wordFetch() {
    fetch("woordlijst.txt")
        .then(response => response.text())
        .then(data => getRandomWord(data))
        .catch(error => console.error('Error loading word list:', error));
}

function getRandomWord(woordlijst) { // ??? Werkt dit zo dat je bij de .then.... getRandomWord(data) hem hier gewoon woordlijst noemt/defined ???).
    const wordList = woordlijst.split('\n').map(word => word.trim());
    let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    document.getElementById("secretWord").innerHTML = randomWord;
    wordToGuess = randomWord;
    lettersGuessed = new Int32Array(wordToGuess.length);    //A Typed Array (not an actual Array) for storing binary data in memory.
    toonUnderscores();
}

function toonUnderscores() {
    let eindString = "";
    for (let x = 0; x < wordToGuess.length; x++) {
        if (lettersGuessed[x] == 1) {
            eindString += " " + wordToGuess[x];
        } else {
            eindString += " _";
        }
    }
    document.getElementById("wordDisplay").innerHTML = eindString;
}

function letterInputOnScreen() {
    let letterInput = document.getElementById("invoerletter").value;
    for (let x = 0; x < hetteradenwoord.length; x++) {
        if (wordToGuess[x] == letterInput) {
            lettersGuessed[x] = 1;
        }
    }
    toonUnderscores();
    document.getElementById("invoerletter").value = "";
}

function gameInput() {
    let wordLength = wordToGuess.length;
    console.log(wordLength)
    input = document.getElementById("inputHangman").value;
    if (usedLetters.includes(input)) { //LETTER ALREADY USED?
        alert("You have already used this letter.");
    }
    else if (input == wordToGuess) { //IS WORD GUESSED?
        alert("Congratulations, you have guessed the word!")
        restartGame();
    }
    else if (input == '') { //NO EMPTY INPUT
        alert("You did not chose a letter or word.");
    }
    else if (isLetter(input) == false) { //ALFABET OR NOT?
        alert("Only letters from the alfabet.");
    }
    else if (input.charAt(0) === input.charAt(1) && input.charAt(1) === input.charAt(2)) {
        alert("This is not a word."); //IS IT A WORD?
    }
    else if (input.length == wordLength) { //GUESS IS WRONG
        alert("Nice try, but that is not the secret word.");
    }
    else if (input.length >= wordLength) { //WORD TOO LONG
        alert("That word is too long.")
    }
    else if (input.length >= 3 && input.length !== wordLength) {
        alert("That word is too short.") //WORD TOO SHORT
    }
    else if (input.length >= 2) { //TOO MUCH INPUT
        alert("Only one letter or a word.");
    }
    else {
        usedLettersArray();
    }
    document.getElementById("inputHangman").value = ''; //Maak tekstvak leeg na input.
    letterInputOnScreen()
}

function isLetter(input) {  // Checkt of het wel een letter is.
    return input.toLowerCase() != input.toUpperCase();
}

function usedLettersArray() {
    let addLetters = usedLetters.unshift(input);
    console.log(usedLetters);
    document.getElementById("usedLetterDisplay").innerHTML = usedLetters;
}