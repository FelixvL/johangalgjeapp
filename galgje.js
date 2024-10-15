//VRAAG Ik kom er niet achter waarom alles 2 keer loopt

// HAALT RANDOM WOORD UIT TXT FILE 
function wordGeneration() {
    fetch("woordlijst.txt", {
    })
        .then(response => response.text())
        .then(data => {
            const wordList = data.split('\n').map(word => word.trim());
            let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
            console.log(randomWord);
            document.getElementById("secretWord").innerHTML = "Testwoord: " + randomWord; //VRAAG!!!!! Werkt niet zonder de "tekst" en alleen de variabele toont het niks in de innerHTML. moet ik een andere inner gebruiken?
            hetteradenwoord = randomWord;
            gameDisplay(randomWord);
        })
        .catch(error => console.error('Error loading word list:', error));
}

function globals() {

}

// global variables
let usedLetters = [];
let hetteradenwoord;
let wordLength = hetteradenwoord.length;

function gameStart() {
    wordGeneration();
    console.log("start");
}



//globals
gameStart();
gameDisplay();

// Checken en melden dat of- het woord fout is, of- er meer dan 1 letter is getypt of- er geen letter of iets anders dan een letter is gytypt.
function gameInput() {
    console.log(hetteradenwoord)
    input = document.getElementById("inputHangman").value;
    if (usedLetters.includes(input)) {          //Check if letter was already used
        alert("You have already used this letter.");
    }
    else if (input == hetteradenwoord) {               //Check if word is correctly guessed and restart game
        alert("Congratulations, you have guessed the word!")
        restartGame();
    }
    else if (input == '') {                     //Check if empty
        alert("You did not chose a letter or word.");
    }
    else if (isLetter(input) == false) {        //Check if it is a letter using isLetter function
        alert("Only letters from the alfabet.");
    }
    else if (input.charAt(0) === input.charAt(1) && input.charAt(1) === input.charAt(2)) {
        alert("This is not a word.");
    }
    else if (input.length == wordLength) { //Check length of chosen gameword with guess.
        alert("Nice try, but that is not the secret word.");
    }
    else if (input.length >= 2 && input.length !== wordLength) {
        alert("That word is too short.")
    }
    else if (input.length >= 2) {
        alert("Only one letter or a word.");
    }
    else {
        usedLettersArray();
    }
    document.getElementById("inputHangman").value = ''; //Maak tekstvak leeg na input.
    gameDisplay()
}

function isLetter(input) {  // Checkt of het wel een letter is.
    return input.toLowerCase() != input.toUpperCase();
}

function usedLettersArray() {
    let addLetters = usedLetters.unshift(input);
    console.log(usedLetters);
    document.getElementById("usedLetterDisplay").innerHTML = usedLetters;
}

// Display om te tonen op het scherm
function gameDisplay(wordLength, randomWord) {
    let letterGuesses = 0
    let wordGuesses = 0
    let blankLetters = wordLength * "_"
    // console.log(blankLetters)
}

function gameMain(randomWord) {

}

function restartGame() {

}
