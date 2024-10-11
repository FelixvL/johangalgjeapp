let pressed = document.querySelectorAll("input");
console.log(pressed);

// Woord om te testen 
// function wordGenerator() {
    
// }

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
        // else if (input != alphanumeric) {
        //     alert("Only alphabetic letters");;
        // }
        // else
        // alert("This is not the correct word")
    document.getElementById("inputHangman").value = ''; //Maak tekstvak leeg na input.
    wordArray();
}

function wordArray() {
    let gameWord = "secret"
    let wordLength = gameWord.length;
    let addLetters = usedLetters.unshift(input);
    console.log(usedLetters);
    document.getElementById("usedLetterDisplay").innerHTML = usedLetters
}

// Display om te tonen op het scherm
function gameDisplay() {

}

function gameMain() {
    inputCheck
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
