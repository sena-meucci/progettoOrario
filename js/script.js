document.addEventListener("DOMContentLoaded", function(){DataLoader();} );

function DataLoader(){
    const date = new Date();
    const days = ["Domenica","Lunedi","Martedi","Mercoledi","Giovedi","Venerdi","Sabato"];
    let day = days[date.getDay()];
    let intestazioneGiorni = document.getElementById("giorniScolastici");
    const listaGiorni =  Array.from(intestazioneGiorni.childNodes);
    listaGiorni.forEach(element => {
        console.log(element);
        if(element.innerHTML == day){
            element.classList.add("highlight");
        }
    });
}