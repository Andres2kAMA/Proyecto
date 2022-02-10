"use strict";

// TODO: IMPORTS.
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

import { app } from "../datosFirebase/datosFirebase.js";

import * as plantilla from "./plantilla.js";
import * as funciones from "./funcionesHtml.js";

const bd = getFirestore(app);

/**
 *
 * @returns Devuelvo la colección de Usuarios.
 */
function obtenerColeccionProductos() {
  return collection(bd, "Productos");
}

async function mostrarTodosProductosAnyadir() {
  const productosCollection = obtenerColeccionProductos();

  const productos = await getDocs(productosCollection);

  productos.docs.map((producto) => {
    plantilla.imprimirProductoAnyadir(producto.data(), producto.id);
    funciones.anyadirProducto(`anyadirJuego${producto.id}`, producto.id);
  });
}

/**
 * TODO: EXPORTS.
 */
export { mostrarTodosProductosAnyadir };
