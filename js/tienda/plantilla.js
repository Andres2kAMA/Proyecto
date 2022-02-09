"use strict";

const body = document.getElementById("main");

/**
 ** Elimino todo el contenido del HTML menos el div#main.
 */
function eliminarTodoContenido() {
  body.removeChild(document.getElementById("contenidoPrincipal"));
}

export { eliminarTodoContenido };
