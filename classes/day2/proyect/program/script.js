let titulo1 = document.getElementById("titulo");
console.log(titulo1);
let counter = 0
function changeText() {
titulo1.innerText = `Cacahuetes ${counter}`;
counter++;
console.log("hola");
}
titulo1.addEventListener("mouseover", changeText);
