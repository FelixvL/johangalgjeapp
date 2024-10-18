window.onload = wordFetch();

const hangmanImagesStages = [
    `
     ________
     |
     |
     |
     |
    /|\\
    `,
    `
     ________
     |      |
     |
     |
     |
    /|\\
    `,
    `
     ________
     |      |
     |     😟
     |
     |
    /|\\
    `,
    `
     ________
     |      |
     |     😮
     |      |
     |
    /|\\
    `,
    `
     ________
     |      |
     |     😲
     |     /|
     |
    /|\\
    `,
    `
     ________
     |      |
     |     😨
     |     /|\\
     |
    /|\\
    `,
    `
     ________
     |      |
     |     😱
     |     /|\\
     |     /
    /|\\
    `,
    `
     ________
     |      |
     |     💀
     |     /|\\
     |     / \\
    /|\\
    `
];

const hangmanWin = [
    `
     ________
     |
     |     
     |   \\😃/
     |      |
    /|\\    / \\
    `
];

// global variables
let usedLetters = [];
console.log(usedLetters);
let wordToGuess;
let lettersCorrect;
let tries = 0;

function wordFetch() {
    fetch("Woordlijst.txt")
        .then(response => response.text())
        .then(data => getRandomWord(data))
        .catch(error => console.error('Error loading word list:', error));
}

function getRandomWord(woordlijst) {
    const wordList = woordlijst.split('\n').map(word => word.trim());
    let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    document.getElementById("secretWord").innerHTML = randomWord;
    wordToGuess = randomWord;
    lettersGuessed = new Int32Array(wordToGuess.length);
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
    document.getElementById("gameStatus").innerHTML = ''; // ??? WAAROM WERKT DEZE HIER WEL EN NIET VLAK ERBOVEN ???
    if (usedLetters.includes(input)) {
        document.getElementById("gameStatus").innerHTML = "Deze letter is al gebruikt.";
    } else if (input == wordToGuess) {
        document.getElementById("gameStatus").innerHTML = "Gefeliciteerd, je hebt gewonnen door het woord te raden!";
        restartGame();
    } else if (input == '') {
        document.getElementById("gameStatus").innerHTML = "Er is niks getypt.";
    } else if (isLetter(input) == false) {
        document.getElementById("gameStatus").innerHTML = "Alleen letters uit het alfabet.";
    } else if (input.charAt(0) === input.charAt(1) && input.charAt(1) === input.charAt(2)) {
        document.getElementById("gameStatus").innerHTML = "Dit is geen woord.";
    } else if (input.length == wordLength) {
        document.getElementById("gameStatus").innerHTML = "Goed geprobeerd maar dat is niet het woord.";
    } else if (input.length >= wordLength) {
        document.getElementById("gameStatus").innerHTML = "Dat woord is te lang.";
    } else if (input.length >= 3 && input.length !== wordLength) {
        document.getElementById("gameStatus").innerHTML = "Dat woord is te kort.";
    } else if (input.length <= wordLength && input.length >= 2) {
        document.getElementById("gameStatus").innerHTML = "Typ alleen 1 letter of raad gelijk het woord."
        // } else if {
        //     document.getElementById("gameStatus").innerHTML = "Juist."
    } else {
        usedLettersArray();
        letterInputOnScreen()
        console.log(usedLetters);
    }
    document.getElementById("inputHangman").value = ''; //Maak tekstvak leeg na input.
}

function gameOver() {
    while (i > tries) {
        `text = + ${"Je hebt nog" + i + "pogingen"} `;
    }
    + 1; i++;
}

function checkEnterPress(e) {
    console.log("Yes", e.keyCode)
    if (e.keyCode == 13) {
        gameInput();
    }
}

function isLetter(input) {
    return input.toLowerCase() != input.toUpperCase();
}

function usedLettersArray() {
    console.log(usedLetters);
    let addLetters = usedLetters.push(input); // IS NOT AN ARRAY? IT COUNTS
    console.log(usedLetters);
    console.log(addLetters);
    // let stringArray = addLetters.join(" ");
    // console.log(stringArray);
    document.getElementById("usedLetterDisplay").innerHTML = usedLetters; // WHY DOES USEDLETTERS WORK HERE?
    // `document.getElementById("usedLetterDisplay").innerHTML = ${usedLetters.join} `;
}

function restartGame() {
    console.log("Empty All")
}

function checkKeyPress(e) {
    console.log("Yes", e.keyCode)
    if (e.keyCode == 81) {
        gameInput();
    } else if (e.keyCode == 87) {
        gameInput();
    } else if (e.keyCode == 69) {
        gameInput();
    } else if (e.keyCode == 82) {
        gameInput();
    } else if (e.keyCode == 84) {
        gameInput();
    } else if (e.keyCode == 89) {
        gameInput();
    } else if (e.keyCode == 85) {
        gameInput();
    } else if (e.keyCode == 73) {
        gameInput();
    } else if (e.keyCode == 79) {
        gameInput();
    } else if (e.keyCode == 80) {
        gameInput();
    } else if (e.keyCode == 65) {
        gameInput();
    } else if (e.keyCode == 83) {
        gameInput();
    } else if (e.keyCode == 68) {
        gameInput();
    } else if (e.keyCode == 70) {
        gameInput();
    } else if (e.keyCode == 71) {
        gameInput();
    } else if (e.keyCode == 72) {
        gameInput();
    } else if (e.keyCode == 74) {
        gameInput();
    } else if (e.keyCode == 75) {
        gameInput();
    } else if (e.keyCode == 76) {
        gameInput();
    } else if (e.keyCode == 90) {
        gameInput();
    } else if (e.keyCode == 88) {
        gameInput();
    } else if (e.keyCode == 67) {
        gameInput();
    } else if (e.keyCode == 86) {
        gameInput();
    } else if (e.keyCode == 66) {
        gameInput();
    } else if (e.keyCode == 78) {
        gameInput();
    } else if (e.keyCode == 77) {
        gameInput();
    } else {
        (console.log("Virtual Keyboard Error"))
    }
}