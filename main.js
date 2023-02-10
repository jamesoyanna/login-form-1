const form  = document.querySelector("#login-form");
const  popup = document.getElementById("popup")

const username = document.getElementById("username")
const password = document.getElementById("password")
form.addEventListener("submit", function(event){
    event.preventDefault();
    username.value =""
    password.value =""
    openPopup();

})


function openPopup(){
popup.classList.add("openPopup");
}

function closePopup(){
    popup.classList.remove("openPopup");
}

