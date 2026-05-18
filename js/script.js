function dark(){
      document.body.classList.toggle("dark-mode");

    const btn = document.getElementById("darkModeBtn");

    if (document.body.classList.contains("dark-mode")) {
        btn.innerText = "Light Mode";
    } else {
        btn.innerText = "Dark Mode";
    }
}