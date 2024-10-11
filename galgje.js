let pressed = document.querySelectorAll("input");
console.log(pressed);

// Woord om te testen 
// function wordGenerator() {
    
// }

function wordGeneration() {
    let gameWord = "secret"
    console.log(gameWord)
    let wordLength = gameWord.length;
    console.log(wordLength)
}

wordGeneration()
gameDisplay()

// global
let usedLetters = [];

// Checken en melden dat of- het woord fout is, of- er meer dan 1 letter is getypt of- er geen letter of iets anders dan een letter is gytypt.
function gameInput() {
    input = document.getElementById("inputHangman").value;
        if (usedLetters.includes(input)) {
            alert("You have already used this letter.")
        }
        else if (input == '') {
            alert("Type a letter or a word.");
        }
        // else if (input == ) {
        //     alert("Only one letter or a word");
        // }
        else if (isLetter(input) == false) {
            alert("Only letters from the alfabet");
        }
        // else if
        // alert("This is not the correct word")
        else {
            wordArray();
        }
    document.getElementById("inputHangman").value = ''; //Maak tekstvak leeg na input.
    gameDisplay()
    
}

gameDisplay()

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


let showButton = 0;

pressed.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        showButton = e.target.value;
        console.log(showButton);
        document.getElementById("showButtonPress").innerHTML =
            "Je hebt op knop " + showButton + " gedrukt";
    });
});
