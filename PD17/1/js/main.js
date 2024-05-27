let button = document.createElement("button");
button.innerText = "press";
button.addEventListener("click", function (){
    alert("Sveiki atvykę į JavaScript pasaulį!")
});

document.getElementById("btn").appendChild(button);