
  
  // Obtener el botón para abrir el pop-up y el pop-up mismo
const openButton = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const closeButton = document.getElementsByClassName("close")[0];

// Función para mostrar el pop-up
function showPopup() {
  popup.style.display = "block";
}

// Función para ocultar el pop-up
function hidePopup() {
  popup.style.display = "none";
}

// Agregar evento de clic al botón para abrir el pop-up
openButton.addEventListener("click", showPopup);

// Agregar evento de clic al botón de cierre y al área fuera del pop-up para ocultarlo
closeButton.addEventListener("click", hidePopup);
window.addEventListener("click", function (event) {
  if (event.target == popup) {
    hidePopup();
  }
});







  
  