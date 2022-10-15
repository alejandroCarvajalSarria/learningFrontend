let titulo1 = document.getElementById("titulo");
let counter = 0
function changeText() {
titulo1.innerText = `Cacahuetes ${counter}`;
counter++;
}
titulo1.addEventListener("mouseover", changeText);
