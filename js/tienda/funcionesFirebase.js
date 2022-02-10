"use strict";

// TODO: IMPORTS.
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
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

/**
 ** Imprimo todos los productos y les asigno un evento para añadirlos al carrito.
 */
async function mostrarTodosProductosAnyadir() {
  const productosCollection = obtenerColeccionProductos();

  const productos = await getDocs(productosCollection);

  productos.docs.map((producto) => {
    plantilla.imprimirProductoAnyadir(producto.data(), producto.id);
    funciones.asignarEventoAnyadirProductoCarrito(producto.id, producto.data());
  });
}

/**
 ** Imprimo todos los productos y les asigno un evento para eliminarlos.
 */
async function mostrarTodosProductosEliminar() {
  const productosCollection = obtenerColeccionProductos();

  const productos = await getDocs(productosCollection);

  productos.docs.map((producto) => {
    plantilla.imprimirProductoEliminar(
      producto.data(),
      `eliminar${producto.id}`
    );
    funciones.asignarEventoEliminarProducto(
      `eliminar${producto.id}`,
      producto.id
    );
  });
}

/**
 ** Elimino el producto de la BBDD.
 * @param {String} id
 */
async function eliminarJuego(id) {
  const productosCollection = obtenerColeccionProductos();

  const productoRef = await doc(productosCollection, id);

  await deleteDoc(productoRef, id);
}

/**
 ** Imprimo todos los productos y les asigno un evento para actualizarlos.
 */
async function mostrarTodosProductosActualizar() {
  const productosCollection = obtenerColeccionProductos();

  const productos = await getDocs(productosCollection);

  productos.docs.map((producto) => {
    plantilla.imprimirProductoActualizar(
      producto.data(),
      `actualizar${producto.id}`,
      `formPrecio${producto.id}`
    );
    funciones.asignarEventoActualizarProducto(
      `actualizar${producto.id}`,
      producto.id
    );
  });
}

async function actualizarJuego(id, precio) {
  const productosCollection = obtenerColeccionProductos();

  const productoRef = await doc(productosCollection, id);

  await updateDoc(productoRef, {
    precio: precio,
  });
}

/**
 * TODO: EXPORTS.
 */
export {
  mostrarTodosProductosAnyadir,
  mostrarTodosProductosEliminar,
  mostrarTodosProductosActualizar,
  eliminarJuego,
  actualizarJuego,
};
