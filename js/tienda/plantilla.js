"use strict";

const plantillaHeader = `<header class="p-3 mb-3 border-bottom" id="header">
                            <div class="container">
                              <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                   
                                <img src="./img/logo.png" class="rounded-circle pr-5" width="32" height="32"/>

                                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                  <li><a href="#" class="nav-link px-2 link-secondary">Inicio</a></li>
                                  <li><a href="#" class="nav-link px-2 link-dark">Juegos</a></li>
                                  <li><a href="#" class="nav-link px-2 link-dark">Carrito</a></li>
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
                                  GAMERS es una empresa dedicada a vender juegos para PC, PS4 y XBOX, consolas, accesorios 
                                  de juegos, etc. Tenemos elementos para hacer mas cómoda la experiencia de juego. 
                                  Satisfacer las necesidades de las personas interesadas en los videojuegos y artículos de novedad, 
                                  prestandoles el mejor servicio por parte de todo el personal de la empresa,  
                                  manteniendo siempre actualizado nuestro catálogo de juegos y artículos para las diferentes plataformas.
                                  </p>
                                  <p>
                                  Desde 1991, miles de clientes satisfechos nos avalan.
                                  También compramos todos tus juegos al mejor precio.
                                  Y recuerda que hacemos envíos a todo el mundo, 
                                  con la máxima velocidad y con la confianza que podemos ofreceros 
                                  con todos nuestros años de experiencia.
                                  </p>
                                  <p>
                                  Para que nuestros clientes estén informados, tenemos a su disposición un sistema de boletines 
                                  donde les informaremos de las últimas noticias del mundo del videojuego y de las últimas 
                                  novedades de este gran hobby que tenemos en común. (Siempre y cuando quieran).Nosotros no 
                                  disponemos de un sistema de acumulación de puntos, pero siempre que se realice un pedido 
                                  nosotros te enviaremos un cheque regalo para que la siguiente compra te salga más barata.
                                  </p>
                              </div>`;

const plantillaFooter = `<footer class="bottom  bg-dark text-center text-white" id="footer">
                              <div class="container p-4 pb-0">
                                <section class="mb-4">
                                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-facebook"></i></a>
                                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-twitter"></i></a>
                                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button" ><i class="bi bi-instagram"></i></a>
                                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-github"></i></a>
                                </section>
                              </div>
                            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                              @ Página desarrollada por Andrés Mancheño Alcaraz y Fernando Martínez López
                            </div>
                          </footer>`;

const body = document.getElementById("main");

function insertarPlantillaHeader() {
  body.insertAdjacentHTML("beforeend", plantillaHeader);
}

function insertarPlantillaPresentacion() {
  body.insertAdjacentHTML("beforeend", plantillaPresentacion);
}
function insertarPlantillaFooter() {
  body.insertAdjacentHTML("beforeend", plantillaFooter);
}
/**
 ** Elimino todo el contenido del HTML menos el div#main.
 */
function eliminarTodoContenidoPresentacion() {
  body.removeChild(document.getElementById("header"));
  body.removeChild(document.getElementById("presentacion"));
  body.removeChild(document.getElementById("footer"));
}
function eliminarTodoContenidoLogin() {
  body.removeChild(document.getElementById("contenidoPrincipal"));
}
export {
  insertarPlantillaHeader,
  insertarPlantillaPresentacion,
  insertarPlantillaFooter,
  eliminarTodoContenidoPresentacion,
  eliminarTodoContenidoLogin,
};
