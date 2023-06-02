// Array para almacenar la lista de jugadores
var jugadores = [];

// Función para agregar un jugador
function agregarJugador() {
  var nombreInput = document.getElementById('nombre');
  var nombre = nombreInput.value;
  
  // Verificar si el nombre no está vacío
  if (nombre !== '') {
    // Crear objeto jugador
    var jugador = {
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
  var nuevoNombre = prompt('Ingrese el nuevo nombre del jugador:');
  
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
  var listaJugadores = document.getElementById('lista-jugadores');
  listaJugadores.innerHTML = '';
  
  // Recorrer el array de jugadores y crear elementos de lista para cada uno
  for (var i = 0; i < jugadores.length; i++) {
    var jugador = jugadores[i];
    
    var itemLista = document.createElement('div');
    itemLista.innerHTML = jugador.nombre + ' ' +
      '<button onclick="eliminarJugador(' + i + ')">Eliminar</button>' +
      '<button onclick="editarJugador(' + i + ')">Editar</button>';
    
    listaJugadores.appendChild(itemLista);
  }
}