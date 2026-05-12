const date = new Date();

document.addEventListener("DOMContentLoaded", loadDate);

let giorno = document.getElementById(date.getDay());

function loadDate(){

    giorno.classList.add("evidenziaGiorno");
}