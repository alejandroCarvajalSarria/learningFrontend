let counter = 1;

function run() {
    console.log(`Ran the function for the ${counter} time`);
    counter++;
    // Creating Our XMLHttpRequest object 
    var xhr = new XMLHttpRequest();

    // Making our connection  
    var url = 'https://jsonplaceholder.typicode.com/todos/1';
    xhr.open("GET", url);

    // function execute after request is successful 
    xhr.onreadystatechange = function (it) {
        console.log(this);
        console.log(it);
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }else{
            console.log("COCO");
        }
    }
    // Sending our request 
    xhr.send();
}

function hello () {
  const textBox = document.getElementById("nameZ");
   console.log(typeof textBox);
   console.log(textBox.id);
   console.log(textBox.value);
   console.log("Hola como estas " + textBox.value)
}



