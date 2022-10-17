$(document).ready(function(){

});


const titulosClasicos = document.getElementsByClassName("textCenter");
const miParrafo = document.getElementById("parrafo");
const titulos = $(".textCenter");
const parrafo = $("#parrafo");
console.log(titulos);  
console.log(parrafo);  
console.log(titulos[0]);
console.log(titulosClasicos);
console.log(miParrafo);

function changeColor() {
    for (let x = 0; x < titulos.length; x++) {
        const element = titulos[x];
        const hugeText = document.createElement("h1");
        hugeText.classList.add("hugeText");
        hugeText.innerHTML = "Hola Dani"
        console.log(hugeText);
        element.appendChild(hugeText);
        $(element).css("color", "aquamarine")
    }        
}

