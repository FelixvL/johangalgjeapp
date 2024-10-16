

// global variables
let usedLetters = [];
let wordToGuess;

function wordFetch() {
    fetch("Woordlijst.txt") //Ony the file itself has a capital letter.
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
    emptyWordDisplay();
}

function emptyWordDisplay() {
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
    let letterInput = document.getElementById("inputHangman").value;
    for (let x = 0; x < wordToGuess.length; x++) {
        if (wordToGuess[x] == letterInput) {
            lettersGuessed[x] = 1;
        }
    }
    emptyWordDisplay();
    document.getElementById("inputHangman").value = "";
}

function gameInput() {
    let wordLength = wordToGuess.length;
    input = document.getElementById("inputHangman").value;
    if (usedLetters.includes(input)) {
        alert("You have already used this letter.");
    }
    else if (input == wordToGuess) {
        alert("Congratulations, you have guessed the word!")
        restartGame();
    }
    else if (input == '') {
        alert("You did not chose a letter or word.");
    }
    else if (isLetter(input) == false) {
        alert("Only letters from the alfabet.");
    }
    else if (input.charAt(0) === input.charAt(1) && input.charAt(1) === input.charAt(2)) {
        alert("This is not a word.");
    }
    else if (input.length == wordLength) {
        alert("Nice try, but that is not the secret word.");
    }
    else if (input.length >= wordLength) {
        alert("That word is too long.")
    }
    else if (input.length >= 3 && input.length !== wordLength) {
        alert("That word is too short.")
    }
    else if (input.length >= 2) {
        alert("Only one letter or a word.");
    }
    else {
        usedLettersArray();
    }
    document.getElementById("inputHangman").value = ''; //Maak tekstvak leeg na input.
    letterInputOnScreen()
}

function isLetter(input) {
    return input.toLowerCase() != input.toUpperCase();
}

function usedLettersArray() {
    let addLetters = usedLetters.unshift(input);
    console.log(usedLetters);
    document.getElementById("usedLetterDisplay").innerHTML = usedLetters;
}

function restartGame() {
    document.getElementById("restartGame").innerHTML = "Je hebt gewonnen. Klik op genereer woord om opnieuw te starten !";
}