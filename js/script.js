let isDarkmode = false

document.getElementById("darkmodebtn").addEventListener("click", function(){
    darkmodetoggle()
})

function darkmodetoggle(){
    if(!isDarkmode){ lightmode() } 
    else{ darkmode() } 
    isDarkmode = !isDarkmode
}

function darkmode(){
    document.getElementById("darkmodebtn").innerHTML = "light mode"
    console.log("darkmode")
    document.getElementsByTagName("h1").item(0).classList.add("darkmodetext")
    document.getElementsByClassName("contenitore").item(0).classList.add("darkmodebg")
    document.getElementsByTagName("p").item(0).classList.add("darkmodetext")
    document.getElementsByTagName("p").item(1).classList.add("darkmodetext")
    document.getElementsByTagName("table").item(0).classList.add("darkmodetable")
    let trs = document.getElementsByTagName("tr")
    for(let i = 0; i<trs.item(0).children.length; i++) trs.item(0).children.item(i).classList.add("darkmodetext")
    for(let i = 0; i<trs.length; i++) trs.item(i).children.item(0).classList.add("darkmodetext")
}

function lightmode(){
    document.getElementById("darkmodebtn").innerHTML = "dark mode"
    console.log("lightmode")
    document.getElementsByTagName("h1").item(0).classList.remove("darkmodetext")
    document.getElementsByClassName("contenitore").item(0).classList.remove("darkmodebg")
    document.getElementsByTagName("p").item(0).classList.remove("darkmodetext")
    document.getElementsByTagName("p").item(1).classList.remove("darkmodetext")
    document.getElementsByTagName("table").item(0).classList.remove("darkmodetable")
    let trs = document.getElementsByTagName("tr")
    for(let i = 0; i<trs.item(0).children.length; i++) trs.item(0).children.item(i).classList.remove("darkmodetext")
    for(let i = 0; i<trs.length; i++) trs.item(i).children.item(0).classList.remove("darkmodetext")
}