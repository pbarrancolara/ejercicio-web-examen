/**
 * Devuelve un objeto con el estado del semáforo.
 *
 * @param {string} color - 'red', 'yellow', 'green'
 * @returns {{red: string, yellow: string, green: string}}
 */
function obtenerEstadoSemaforo(color) {
  const estado = {
    red: "#555",
    yellow: "#555",
    green: "#555"
  };

  if (estado[color] !== undefined) {
    estado[color] = color; // Activar color correcto
  }

  return estado;
}

/**
 * Actualiza el DOM del semáforo según el estado recibido.
 *
 * @param {{red: string, yellow: string, green: string}} estado
 */
function aplicarEstadoAlDOM(estado) {
  Object.keys(estado).forEach(color => {
    const luz = document.getElementById(color);
    if (luz) luz.style.background = estado[color];
  });
}

/**
 * Función completa: calcula el estado y lo aplica al DOM
 *
 * @param {string} color
 */
function cambiarLuz(color) {
  const estado = obtenerEstadoSemaforo(color);
  aplicarEstadoAlDOM(estado);
}

// Exportación para Jest
module.exports = { obtenerEstadoSemaforo };
