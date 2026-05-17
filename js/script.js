let btn = document.getElementById("btnDark");

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        attivaDark();
    } else {
        disattivaDark();
    }
});

function attivaDark() {
    console.log("La Dark Mode è stata attivata!");
}

function disattivaDark() {
    console.log("La Dark Mode è stata disattivata!");
}