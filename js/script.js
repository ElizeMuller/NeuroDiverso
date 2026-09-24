const formulario = document.getElementById("form-cadastro");
const toast = document.getElementById("toast");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 3000);
});
