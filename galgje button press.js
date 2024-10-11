let pressed = document.querySelectorAll("input");
console.log(pressed);

let showButton = 0;

pressed.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        showButton = e.target.value;
        console.log(showButton);
        document.getElementById("showButtonPress").innerHTML =
            "Je hebt op knop " + showButton + " gedrukt";
    });
});
