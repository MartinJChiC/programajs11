document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del DOM
    const decrementarBtn = document.getElementById('decrementar');
    const resetBtn = document.getElementById('reset');
    const incrementarBtn = document.getElementById('incrementar');
    const valorSpan = document.getElementById('valor');
  
    // Valor inicial del contador
    let contador = 0;
  
    // Función para decrementar el contador
    function decrementar() {
      contador--;
      actualizarValor();
    }
  
    // Función para resetear el contador
    function resetear() {
      contador = 0;
      actualizarValor();
    }
  
    // Función para incrementar el contador
    function incrementar() {
      contador++;
      actualizarValor();
    }
  
    // Función para actualizar el valor en el DOM
    function actualizarValor() {
      valorSpan.textContent = contador;
    }
  
    // Event listeners para los botones
    decrementarBtn.addEventListener('click', decrementar);
    resetBtn.addEventListener('click', resetear);
    incrementarBtn.addEventListener('click', incrementar);
  
    // Inicializar el valor en el DOM
    actualizarValor();
  });