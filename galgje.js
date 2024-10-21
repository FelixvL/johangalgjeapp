window.onload = wordFetch();

// global variables
let usedLetters = [];
let wordToGuess;
let lettersGuessed;
let maxAttempts = 7;
let wrongGuesses = 0;

function wordFetch() {
    fetch("Woordlijst.txt")
        .then(response => response.text())
        .then(data => getRandomWord(data))
        .catch(error => console.error('Error loading word list:', error));
}

function getRandomWord(woordlijst) {
    const wordList = woordlijst.split('\n').map(word => word.trim());
    let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    document.getElementById("secretWord").innerHTML = randomWord; // Alleen om te testen
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
    let letterInput = document.getElementById("inputHangman").value.toLowerCase();
    let correctGuess = false;

    for (let x = 0; x < wordToGuess.length; x++) {
        if (wordToGuess[x] == letterInput) {
            lettersGuessed[x] = 1;
            correctGuess = true;
        }
    }

    if (!correctGuess) {
        wrongGuesses++;
        updateHangmanImage();

        if (wrongGuesses >= maxAttempts) {
            document.getElementById("gameStatus").innerHTML = `Game Over! Het woord was "${wordToGuess}".`;
            document.getElementById("inputHangman").disabled = true;  // Disable further input
            return;
        } else {
            document.getElementById("gameStatus").innerHTML = `Onjuist! Je hebt nog ${maxAttempts - wrongGuesses} pogingen over.`;
        }
    } else {
        emptyWordDisplay();
    }


    if (!document.getElementById("wordDisplay").innerHTML.includes("_")) {
        document.getElementById("gameStatus").innerHTML = "Gefeliciteerd! Je hebt het woord geraden.";
        document.getElementById("inputHangman").disabled = true;
    }

    document.getElementById("inputHangman").value = "";
}

function updateHangmanImage() {
    const hangmanImage = document.getElementById("imageStages");
    hangmanImage.src = `images/Stage${Math.min(wrongGuesses, maxAttempts)}.png`;
}

function gameInput() {
    let input = document.getElementById("inputHangman").value.toLowerCase();
    document.getElementById("gameStatus").innerHTML = '';

    if (input === '') {
        document.getElementById("gameStatus").innerHTML = "Er is niks getypt.";
    } else if (usedLetters.includes(input)) {
        document.getElementById("gameStatus").innerHTML = "Deze letter is al gebruikt.";
    } else if (input === wordToGuess) {
        document.getElementById("gameStatus").innerHTML = "Gefeliciteerd, je hebt gewonnen door het woord te raden!";
        restartGame();
    } else if (input.length === 1) {
        usedLetters.push(input);
        letterInputOnScreen();
    } else if (input.length === wordToGuess.length) {

        wrongGuesses++;
        updateHangmanImage();
        document.getElementById("gameStatus").innerHTML = `Fout woord! Je hebt nog ${maxAttempts - wrongGuesses} pogingen.`;
    } else if (input.length < wordToGuess.length) {
        document.getElementById("gameStatus").innerHTML = "Dat woord is te kort.";
    } else {
        document.getElementById("gameStatus").innerHTML = "Dat woord is te lang.";
    }

    document.getElementById("inputHangman").value = '';
}

function isLetter(input) {
    return input.toLowerCase() != input.toUpperCase();
}

function restartGame() {
    console.log("Spel Herstarten...");
    // Additional logic for restarting the game can go here.
}

function checkEnterPress(e) {
    if (e.keyCode == 13) {
        gameInput();
    }
}

function handleButtonClick(letter) {
    const inputField = document.getElementById("inputHangman");
    inputField.value = letter; // Set the input value to the clicked letter
    gameInput(); // Call the game input function
}

// Optional: Adding keyboard event listeners for real keyboard presses
document.addEventListener('keydown', function (e) {
    if (e.key.length === 1 && /^[a-zA-Z]$/.test(e.key)) { // Check if it's a single letter
        const inputField = document.getElementById("inputHangman");
        inputField.value = e.key.toUpperCase(); // Set the input value to the pressed key
        gameInput(); // Call the game input function
    }
});

// function checkKeyPress(e) {
//     console.log("Yes", e.keyCode)
//     if (e.keyCode == 81) {
//         gameInput();
//     } else if (e.keyCode == 87) {
//         gameInput();
//     } else if (e.keyCode == 69) {
//         gameInput();
//     } else if (e.keyCode == 82) {
//         gameInput();
//     } else if (e.keyCode == 84) {
//         gameInput();
//     } else if (e.keyCode == 89) {
//         gameInput();
//     } else if (e.keyCode == 85) {
//         gameInput();
//     } else if (e.keyCode == 73) {
//         gameInput();
//     } else if (e.keyCode == 79) {
//         gameInput();
//     } else if (e.keyCode == 80) {
//         gameInput();
//     } else if (e.keyCode == 65) {
//         gameInput();
//     } else if (e.keyCode == 83) {
//         gameInput();
//     } else if (e.keyCode == 68) {
//         gameInput();
//     } else if (e.keyCode == 70) {
//         gameInput();
//     } else if (e.keyCode == 71) {
//         gameInput();
//     } else if (e.keyCode == 72) {
//         gameInput();
//     } else if (e.keyCode == 74) {
//         gameInput();
//     } else if (e.keyCode == 75) {
//         gameInput();
//     } else if (e.keyCode == 76) {
//         gameInput();
//     } else if (e.keyCode == 90) {
//         gameInput();
//     } else if (e.keyCode == 88) {
//         gameInput();
//     } else if (e.keyCode == 67) {
//         gameInput();
//     } else if (e.keyCode == 86) {
//         gameInput();
//     } else if (e.keyCode == 66) {
//         gameInput();
//     } else if (e.keyCode == 78) {
//         gameInput();
//     } else if (e.keyCode == 77) {
//         gameInput();
//     } else {
//         (console.log("Virtual Keyboard Error"))
//     }
// }