
function mostrarAlerta() {
  alert('Esta canción es la más destacada y escuchada por el publico de Euphoria');
}

function mostrarNuevoDiv() {
  document.getElementById('nuevoDiv').style.display = 'block';
  document.getElementById('verMasBtn').style.display = 'none';
}
document.getElementById('verMasBtn').addEventListener('click', mostrarNuevoDiv);
