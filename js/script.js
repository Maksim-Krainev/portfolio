let switchMode = document.getElementById('theme-switcher')

switchMode.onclick = function (){
    let them = document.getElementById('theme')

    if(them.getAttribute("href") == "./css/dark-style.css"){
        them.href = "./css/white-style.css"
    } else{
        them.href = "./css/dark-style.css" 
    }
}