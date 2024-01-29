
// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtén el elemento contenedor del logo
    var logoContainer = document.getElementById("logoContainer");
    // Agrega un evento de clic al contenedor del logo
    logoContainer.addEventListener("click", function() {
        // Redirecciona a tu otro HTML
        window.location.href = "./inicio.html";
    });
});