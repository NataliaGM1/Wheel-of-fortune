import "./pp.js";

const modal = document.querySelector("#modal_loupe");
const btnModalOpen = document.querySelector("#btn-open_modal");
btnModalOpen.addEventListener("click", ()=>modal.showModal());
const btnModalClose = document.querySelector("btn_close_modal");
btnModalClose.addEventListener("click", ()=>modal.closest());

// Array para almacenar la lista de jugadores
let jugadores = [];

// Función para agregar un jugador
function agregarJugador() {
  let nombreInput = document.getElementById('nombre');
  let nombre = nombreInput.value;
  
  // Verificar si el nombre no está vacío
  if (nombre !== '') {
    // Crear objeto jugador
    let jugador = {
      nombre: nombre
    };
    
    // Agregar el jugador al array
    jugadores.push(jugador);
    
    // Limpiar el campo de nombre
    nombreInput.value = '';
    
    // Actualizar la lista de jugadores
    actualizarListaJugadores();
  }
}

// Función para eliminar un jugador
function eliminarJugador(index) {
  // Eliminar el jugador del array
  jugadores.splice(index, 1);
  
  // Actualizar la lista de jugadores
  actualizarListaJugadores();
}

// Función para editar un jugador
function editarJugador(index) {
  let nuevoNombre = prompt('Ingrese el nuevo nombre del jugador:');
  
  // Verificar si se ingresó un nuevo nombre
  if (nuevoNombre !== null && nuevoNombre !== '') {
    // Actualizar el nombre del jugador en el array
    jugadores[index].nombre = nuevoNombre;
    
    // Actualizar la lista de jugadores
    actualizarListaJugadores();
  }
}

// Función para actualizar la lista de jugadores en el HTML
function actualizarListaJugadores() {
  let listaJugadores = document.getElementById('lista-jugadores');
  listaJugadores.innerHTML = '';
  
  // Recorrer el array de jugadores y crear elementos de lista para cada uno
  for (let i = 0; i < jugadores.length; i++) {
    let jugador = jugadores[i];
    
    let itemLista = document.createElement('div');
    itemLista.innerHTML = jugador.nombre + ' ' +
      '<button onclick="eliminarJugador(' + i + ')">Eliminar</button>' +
      '<button onclick="editarJugador(' + i + ')">Editar</button>';
    
    listaJugadores.appendChild(itemLista);
  }
}