let titulo1 = document.getElementById("titulo");
let banco = "";

function changeText() {
    banco = titulo1.innerText;
    titulo1.innerText = "GO GO GO";
}

function afterChangeText() {
    titulo1.innerText = banco;
}

titulo1.addEventListener("mouseover", changeText); 
titulo1.addEventListener("mouseout", afterChangeText); 
