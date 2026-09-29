const formulario = document.getElementById("form-cadastro");
const toast = document.getElementById("toast");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        toast.classList.add("show");

        setTimeout(function() {
            toast.classList.remove("show");
        }, 3000);
    });
}


const darkModeToggle = document.getElementById("dark-mode-toggle");

if (darkModeToggle) {

    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.textContent = "☀️ Modo claro";
    }

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️ Modo claro";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙 Modo escuro";
        }
    });

}