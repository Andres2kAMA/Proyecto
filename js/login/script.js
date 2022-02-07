"use strict";

/**
 * Imports.
 */

import * as plantilla from "./plantilla.js";
import * as funcionesHtml from "./funcionesHtml.js";
import * as funcionesFirebase from "./funcionesFirebase.js";

window.onload = function () {
  plantilla.insertarPlantillaLogin();

  document.getElementById("registro").addEventListener(
    "click",
    function () {
      plantilla.eliminarTodoContenido();
      plantilla.insertarPlantillaRegistro();
      funcionesHtml.asignacionEventosRegistro();
    },
    false
  );
};
