const button = document.getElementById("themeToggle");
const table = document.querySelector("table");
const titolo = document.querySelector(".titolo");

button.addEventListener("click", function () {

    if (document.body.style.backgroundColor == "black") {

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        table.style.color = "black";
        titolo.style.color = "black";

        button.textContent = "Dark Mode";
    }

    else {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        table.style.color = "white";
        titolo.style.color = "white";

        button.textContent = "Light Mode";
    }

});