
    function cambiaTema(){

        let body = document.body;
        let bottone = document.getElementById("temaBtn");

        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");

        if(body.classList.contains("dark-mode")){
            bottone.innerHTML = "Light";
            bottone.classList.remove("btn-dark");
            bottone.classList.add("btn-light");
        }
        else{
            bottone.innerHTML = "Dark";
            bottone.classList.remove("btn-light");
            bottone.classList.add("btn-dark");
        }

    }