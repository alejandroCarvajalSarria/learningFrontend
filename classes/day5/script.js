$(document).ready(function(){
    $("button").click(function(){
        $.post("https://www.w3schools.com/jquery/demo_test_post.asp",
        {
            name:"Daniel",
            city:"Bogotá"
        },
        (data,status)=>{
            alert("Data: " + data + "\nStatus: " + status)
        });
    });
});
