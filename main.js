const form = document.querySelector("#login-form");
alert("successful");


// form.addEventListener("submit", function(event) {
//     event.preventDefault();

// });

window.addEventListener("resize", function() {
    if(this.window.innerWidth <= 500) {
        form.getElementsByClassName.width = "100%";
    } else {
        FormDataEvent.style.width = "300px";
    }
});