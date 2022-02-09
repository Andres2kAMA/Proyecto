"use strict";

/**
 * TODO: IMPORTS.
 */

import * as plantilla from "./plantilla.js";
import * as funcionesHtml from "./funcionesHtml.js";

window.onload = function () {
  plantilla.insertarPlantillaLogin();
  funcionesHtml.asignarEventosLogin();
};
