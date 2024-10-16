let usedLetters = [];
let hetteradenwoord;
let geradelettersarray;

function wordGeneration() {
    fetch("woordlijst.txt")
        .then(response => response.text())
        .then(data => kiesRandomWoord(data))
        .catch(error => console.error('Error loading word list:', error));
}
function kiesRandomWoord(woordenlijst){
        const wordList = woordenlijst.split('\n').map(word => word.trim());
        let randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        console.log(randomWord);
        hetteradenwoord = randomWord;
        geradelettersarray = new Int32Array(hetteradenwoord.length);
        toonUnderscores();
}
function gameStart() {
    wordGeneration();
}

window.onload = gameStart;

function toonUnderscores(){
    let eindString = "";
    for(let x = 0 ; x < hetteradenwoord.length ; x++){
        if(geradelettersarray[x] == 1){
            eindString += " "+hetteradenwoord[x];
        }else{
            eindString += " _";
        }
    }
    document.getElementById("woordensectie").innerHTML = eindString;

}
function invoerletter_verwerken(){
    let ingevoerde_letter = document.getElementById("invoerletter").value;
    for(let x = 0; x < hetteradenwoord.length; x++){
        if(hetteradenwoord[x] == ingevoerde_letter){
            geradelettersarray[x] = 1;
        }
    }
    toonUnderscores();
    document.getElementById("invoerletter").value = "";
}