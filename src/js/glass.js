const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
  
searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  // Realiza la lógica de búsqueda con el término ingresado
  console.log('Buscando: ' + searchTerm);
}); 
  
  
  
  