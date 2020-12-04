const themeOneValues = {
    "displayColor": "rgb(167 208 201)",
    "colorAlpha": "rgb(38, 234, 185)",
    "colorShift": "rgb(162 213 232)",
    "bigButtonsColor": "rgb(132, 154, 165)",
    "alertButtons" : "rgb(75 210 176)",
    "smallButtons": "rgb(98 121 132)",
    "smallButtonsRouned": "rgb(181, 179, 189)",
    "bodyColor": "rgb(58 72 76)",
    "elipse": "rgb(181, 179, 189)"
};

const themeTwoValues = {
    "displayColor": "rgb(232 232 232)",
    "colorAlpha": "rgb(234 205 208)",
    "colorShift": "rgb(0 0 0)",
    "bigButtonsColor": "rgb(230 230 230)",
    "alertButtons" : "rgb(234 205 208)",
    "smallButtons": "rgb(228 228 228)",
    "smallButtonsRouned": "rgb(199 199 199)",
    "bodyColor": "rgb(255 255 255)",
    "elipse": "rgb(199 199 199)"
};

const themeThreeValues = {
    "displayColor": "rgb(179, 185, 110)",
    "colorAlpha": "rgb(194, 98, 108)",
    "colorShift": "rgb(157, 148, 71)",
    "bigButtonsColor": "rgb(128, 134, 137)",
    "alertButtons" : "rgb(194, 98, 108)",
    "smallButtons": "rgb(90, 94, 97)",
    "smallButtonsRouned": "rgb(181, 179, 189)",
    "bodyColor": "rgb(44, 55, 58)",
    "elipse": "rgb(181, 179, 189)"
};

//Funcion para cambiar el color de la calculadora:

if(localStorage.getItem("Theme")){
    let localStorageTheme = JSON.parse(localStorage.getItem("Theme"));
    changeColor(localStorageTheme)
}

function changeColor(par){
    let alphaColor = document.getElementsByClassName("letraRoja");
    let shiftColor = document.getElementsByClassName("letrasShift");
    let bigButtons = document.getElementsByClassName("botonGris");
    let alertButtons = document.getElementsByClassName("botonRojo");
    let smallButons = document.getElementsByClassName("botonNegro");
    let smallButtonsRouned = document.getElementsByClassName("botonGrisClaro")
    let body = document.getElementsByClassName("calculadora");
    let elipse = document.getElementsByClassName("elipse");
    document.getElementById("display").style.backgroundColor = par.displayColor;
    
    //Animacion
    body[0].style.display = "none";
    setTimeout(() => {body[0].style.display = "block";}, 10);
    
    //Cambiar colores:
    for(i = 0; i<shiftColor.length; i++){
        if(alphaColor.length > i){alphaColor[i].style.color = par.colorAlpha};
        if(bigButtons.length > i){bigButtons[i].style.backgroundColor = par.bigButtonsColor};
        if(alertButtons.length > i){alertButtons[i].style.backgroundColor = par.alertButtons};
        if(smallButons.length > i){smallButons[i].style.backgroundColor = par.smallButtons};
        if(smallButtonsRouned.length > i){smallButtonsRouned[i].style.backgroundColor = par.smallButtonsRouned};
        if(body.length > i){body[i].style.backgroundColor = par.bodyColor};
        if(elipse.length > i){elipse[i].style.backgroundColor = par.elipse};
        shiftColor[i].style.color = par.colorShift;   
    }

    localStorage.setItem("Theme", JSON.stringify(par));
}









document.addEventListener("DOMContentLoaded", function(event) {
    //Agregando funcion a Botones Para cambiar temas:
    document.getElementById("blueTheme").addEventListener("click", function(){changeColor(themeOneValues)});
    document.getElementById("originalTheme").addEventListener("click", function(){changeColor(themeThreeValues)});
    document.getElementById("bWTheme").addEventListener("click", function(){changeColor(themeTwoValues)});
  });