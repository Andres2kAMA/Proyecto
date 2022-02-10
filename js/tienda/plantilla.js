"use strict";

/**
 * Me creo las plantillas necesarias.
 */
const plantillaHeader = `<header class="p-3 mb-3 border-bottom" id="header">
                            <div class="container">
                              <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                   
                                <img src="./img/logo.png" class="rounded-circle pr-5" width="32" height="32"/>

                                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                  <li><a href="#" id="inicio" class="nav-link px-2 link-secondary">Inicio</a></li>
                                  <li><a href="#" id="juegos" class="nav-link px-2 link-dark">Juegos</a></li>
                                  <li><a href="#" id="carrito" class="nav-link px-2 link-dark">Carrito</a></li>
                                </ul>

                                <div class="dropdown text-end">
                                  <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://tse2.mm.bing.net/th?id=OIP.HAlzz7_SUXjXKwsKkyBmJQHaHa&pid=Api&P=0&w=165&h=165" alt="mdo" class="rounded-circle" width="32" height="32">
                                  </a>
                                  <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1" style="">
                                    <li><a class="dropdown-item" href="#" id="cerrarSesion">Cerrar sesión</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </header>`;

const plantillaHeaderAdmin = `<header class="p-3 mb-3 border-bottom" id="header">
                                <div class="container">
                                  <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                                    <img src="./img/logo.png" class="rounded-circle pr-5" width="32" height="32"/>

                                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                      <li><a href="#" id="inicio" class="nav-link px-2 link-secondary">Inicio</a></li>
                                      <li><a href="#"  class="nav-link px-2 link-dark">Añadir juego</a></li>
                                      <li><a href="#"  class="nav-link px-2 link-dark">Actualizar precio</a></li>
                                      <li><a href="#" id="borrarJuego" class="nav-link px-2 link-dark">Borrar juego</a></li>
                                    </ul>

                                    <div class="dropdown text-end">
                                      <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://tse2.mm.bing.net/th?id=OIP.HAlzz7_SUXjXKwsKkyBmJQHaHa&pid=Api&P=0&w=165&h=165" alt="mdo" class="rounded-circle" width="32" height="32">
                                      </a>
                                      <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1" style="">
                                        <li><a class="dropdown-item" href="#" id="cerrarSesion">Cerrar sesión</a></li>
                                      </ul>
                                    </div>
                                 </div>
                               </div>
                             </header>`;

const plantillaPresentacion = `<div class="container text-center p-5" id="presentacion">
                                  <h1 id="tituloPresentacion" >RGL</h1>
                                  <p>
                                  Somos una empresa comprometida con  brindar la mayor satisfacción a nuestros clientes. 
                                  RGL es una empresa dedicada a vender juegos para PC, PS4 y XBOX, consolas, accesorios 
                                  de juegos, etc. Tenemos elementos para hacer mas cómoda la experiencia de juego. 
                                  Satisfacer las necesidades de las personas interesadas en los videojuegos y artículos de novedad, 
                                  prestandoles el mejor servicio por parte de todo el personal de la empresa,  
                                  manteniendo siempre actualizado nuestro catálogo de juegos y artículos para las diferentes plataformas.
                                  </p>
                                  <br/><br/>
                                  <p>
                                  Desde 1991, miles de clientes satisfechos nos avalan.
                                  También compramos todos tus juegos al mejor precio.
                                  Y recuerda que hacemos envíos a todo el mundo, 
                                  con la máxima velocidad y con la confianza que podemos ofreceros 
                                  con todos nuestros años de experiencia.
                                  </p>
                                  <br/><br/>
                                  <p>
                                  Para que nuestros clientes estén informados, tenemos a su disposición un sistema de boletines 
                                  donde les informaremos de las últimas noticias del mundo del videojuego y de las últimas 
                                  novedades de este gran hobby que tenemos en común. (Siempre y cuando quieran).Nosotros no 
                                  disponemos de un sistema de acumulación de puntos, pero siempre que se realice un pedido 
                                  nosotros te enviaremos un cheque regalo para que la siguiente compra te salga más barata.
                                  </p>
                                  <br/><br/><br/><br/><br/><br/>
                              </div>`;

const plantillaDivProductosAnyadir = `<div id="divProductos" class="row contrarProductos text-center">
                                        <h2>¡ Añade juegos al carrito !</h2>
                                     </div>`;

const plantillaDivCarrito = `<div id="divCarrito" class="row contrarProductos text-center">
                              <h2>Carrito</h2>
                            </div>`;

const plantillaDivEliminar = `<div id="divEliminar" class="row contrarProductos text-center">
                                <h2>Eliminar juegos</h2>
                              </div>`;

const plantillaProducto = `<div></div>`;

const plantillaCarritoVacio = `<div class="alert alert-danger text-center" id="carritoVacio">El carrito está vacío</div>`;

const plantillaFinalizarCompra = `<div id="finalizarCompra">
                                    <div class="alert alert-info text-center">PRECIO</div>
                                    <button type="button" class="btn btn-outline-primary col-md-6 m-4" id="comprar">Comprar</button>
                                  </div>`;

const plantillaMensajeSatisfactorio = `<div id="mensaje" class="alert alert-success m-4 text-center" role="alert">MENSAJE</div>`;

const plantillaFooter = `<footer class="bottom  bg-dark text-center text-white" id="footer">
                            <div class="container p-4 pb-0">
                              <section class="mb-4">
                                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-facebook"></i></a>
                                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-twitter"></i></a>
                                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button" ><i class="bi bi-instagram"></i></a>
                                <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/Andres2kAMA/Proyecto" role="button"><i class="bi bi-github"></i></a>
                              </section>
                            </div>
                            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                              @ Página desarrollada por Andrés Mancheño Alcaraz y Fernando Martínez López
                            </div>
                          </footer>`;

const body = document.getElementById("main");

/**
 * Dependiendo quien se ha registrado inserto una plantilla header para el administrador o para el usuario.
 */
function insertarPlantillaHeader() {
  if (document.getElementById("tienda") != null) {
    body.insertAdjacentHTML("beforeend", plantillaHeader);
  } else {
    body.insertAdjacentHTML("beforeend", plantillaHeaderAdmin);
  }
}

/**
 * Inserto la plantilla de presentación.
 */
function insertarPlantillaPresentacion() {
  let header = document.getElementById("header");
  header.insertAdjacentHTML("afterend", plantillaPresentacion);
}

/**
 * Inserto el div de los productos a añadir.
 */
function insertarPlantillaDivProductosAnyadir() {
  let header = document.getElementById("header");
  header.insertAdjacentHTML("afterend", plantillaDivProductosAnyadir);
}

/**
 * Inserto el div de los productos del carrito.
 */
function insertarPlantillaDivCarrito() {
  let header = document.getElementById("header");
  header.insertAdjacentHTML("afterend", plantillaDivCarrito);
}

/**
 * Inserto el div de los productos a eliminar.
 */
function insertarPlantillaDivEliminar() {
  let header = document.getElementById("header");
  header.insertAdjacentHTML("afterend", plantillaDivEliminar);
}

/**
 * Inserto el footer.
 */
function insertarPlantillaFooter() {
  body.insertAdjacentHTML("beforeend", plantillaFooter);
}

/**
 * Inserto la plantilla que permite finalizar la compra.
 * @param {Int} precio
 */
function insertarPlantillaFinalizarCompra(precio) {
  let divFinalizarCompra = modificarPlantillaFinalizarCompra(precio);
  document
    .getElementById("divCarrito")
    .insertAdjacentHTML("beforeend", divFinalizarCompra);
}

function insertarMensajePersonalidado(mensaje) {
  let header = document.getElementById("header");
  let mensajePersonalidado = modificarPlantillaMensaje(mensaje);
  header.insertAdjacentHTML("afterend", mensajePersonalidado);
}

/**
 * Imprimo el producto con la función de añadir.
 * @param {Object} producto
 * @param {String} id
 */
function imprimirProductoAnyadir(producto, id) {
  let div = document.getElementById("divProductos");
  let productoModificado = modificarProductoAnyadir(producto, id);
  div.insertAdjacentHTML("beforeend", productoModificado);
}

/**
 * Imprimo el producto con la función de eliminar.
 * @param {Object} producto
 * @param {String} id
 */
function imprimirProductoEliminar(producto, id) {
  let div = document.getElementById("divEliminar");
  let productoModificado = modificarProductoEliminar(producto, id);
  div.insertAdjacentHTML("beforeend", productoModificado);
}

/**
 * Imprimo el producto que mostraré en el carrito.
 * @param {Object} producto
 */
function imprimirProductoCarrito(producto) {
  let div = document.getElementById("divCarrito");
  let productoModificado = modificarProductoCarrito(producto);
  div.insertAdjacentHTML("beforeend", productoModificado);
}

/**
 * Imprimio un aviso indicando que el carrito está vacío.
 */
function imprimirAvisoCarritoVacio() {
  let div = document.getElementById("divCarrito");
  div.insertAdjacentHTML("beforeend", plantillaCarritoVacio);
}

/**
 * Elimino el header.
 */
function eliminarHeader() {
  body.removeChild(document.getElementById("header"));
}

/**
 * Elimino la presentación.
 */
function eliminarPresentacion() {
  if (document.getElementById("presentacion") != null)
    body.removeChild(document.getElementById("presentacion"));
}

/**
 * Elimino el footer.
 */
function eliminarFooter() {
  body.removeChild(document.getElementById("footer"));
}

function eliminarMensaje() {
  if (document.getElementById("mensaje") != null) {
    body.removeChild(document.getElementById("mensaje"));
  }
}

/**
 * Elimino todo el contenido del inicio.
 */
function eliminarTodoContenido() {
  eliminarHeader();
  eliminarPresentacion();
  eliminarJuegosAnyadir();
  eliminarCarrito();
  eliminarDivEliminar();
  eliminarMensaje();
  eliminarFooter();
}

/**
 * Elimino el div con función de eliminarlo.
 */
function eliminarDivEliminar() {
  if (document.getElementById("divEliminar") != null)
    body.removeChild(document.getElementById("divEliminar"));
}

/**
 * Elimino el login.
 */
function eliminarLogin() {
  body.removeChild(document.getElementById("contenidoPrincipal"));
}

/**
 * Elimino el div de juegos con la funcionalidad de añadirlos al carrito.
 */
function eliminarJuegosAnyadir() {
  if (document.getElementById("divProductos") != null)
    body.removeChild(document.getElementById("divProductos"));
}

/**
 * Elimino el carrito.
 */
function eliminarCarrito() {
  if (document.getElementById("divCarrito") != null)
    body.removeChild(document.getElementById("divCarrito"));
}

/**
 * Modifico el producto con la función de poder añadirlo al carrito.
 * @param {Object} producto
 * @param {String} id
 * @returns {String}
 */
function modificarProductoAnyadir(producto, id) {
  let plantillaDevolver = plantillaProducto.replace(
    `<div></div>`,
    `<div class="col-md-6 col-sm-12 centrarTexto producto">
        <div class="card" >
          <img src="${producto.imagen}" style="width: 15vw" class="centrar imagen" alt="...">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.plataforma}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${producto.precio} €</li>
            <li class="list-group-item">Pegi: ${producto.pegi} </li>
          </ul>
          <input type="button" class="btn btn-outline-primary" id="anyadirJuego${id}" value="Añadir juego al carrito" />
          </div> 
          <div class="toast" id="toast${id}">
            <div class="toast-header">
              <strong class="me-auto">${producto.nombre}</strong>
              <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">
              <p>El juego se ha añadido al carrito corréctamente.</p>
            </div>
        </div>
        </div>
       
      </div>`
  );
  return plantillaDevolver;
}

/**
 * Modifico el producto para añadirlo al carrito.
 * @param {Object} producto
 * @returns {String}
 */
function modificarProductoCarrito(producto) {
  let plantillaDevolver = plantillaProducto.replace(
    `<div></div>`,
    `<div class="col-md-6 col-sm-12 centrarTexto producto">
        <div class="card" >
          <img src="${producto.imagen}" style="width: 15vw" class="centrar imagen" alt="...">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.plataforma}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${producto.precio} €</li>
            <li class="list-group-item">Pegi: ${producto.pegi} </li>
          </ul>
          </div> 
        </div>
      </div>`
  );
  return plantillaDevolver;
}

/**
 * Modifico el producto para poder eliminarlo.
 * @param {Object} producto
 * @param {String} id
 * @returns {String}
 */
function modificarProductoEliminar(producto, id) {
  let plantillaDevolver = plantillaProducto.replace(
    `<div></div>`,
    `<div class="col-md-6 col-sm-12 centrarTexto producto">
        <div class="card" >
          <img src="${producto.imagen}" style="width: 15vw" class="centrar imagen" alt="...">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.plataforma}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${producto.precio} €</li>
            <li class="list-group-item">Pegi: ${producto.pegi} </li>
          </ul>

          <button type="button" class="btn btn-primary" id="${id}">Eliminar</button>
          </div> 
        </div>
      </div>`
  );
  return plantillaDevolver;
}

function modificarPlantillaMensaje(mensaje) {
  return plantillaMensajeSatisfactorio.replace("MENSAJE", mensaje);
}

/**
 * Modifico la plantilla indicando el precio.
 * @param {Int} precio
 * @returns {String}
 */
function modificarPlantillaFinalizarCompra(precio) {
  return plantillaFinalizarCompra.replace("PRECIO", `${precio} €`);
}

export {
  insertarPlantillaHeader,
  insertarPlantillaPresentacion,
  insertarPlantillaFooter,
  insertarPlantillaDivCarrito,
  insertarPlantillaDivProductosAnyadir,
  insertarPlantillaDivEliminar,
  insertarPlantillaFinalizarCompra,
  insertarMensajePersonalidado,
  imprimirProductoAnyadir,
  imprimirProductoCarrito,
  imprimirAvisoCarritoVacio,
  imprimirProductoEliminar,
  eliminarCarrito,
  eliminarPresentacion,
  eliminarJuegosAnyadir,
  eliminarTodoContenido,
  eliminarLogin,
  eliminarDivEliminar,
};
