"use strict";

const plantillaHeader = `<header class="p-3 mb-3 border-bottom">
                            <div class="container">
                              <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                   
                                <img src="./img/logo.png" class="rounded-circle" width="32" height="32"/>

                                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                  <li><a href="#" class="nav-link px-2 link-secondary">Inicio</a></li>
                                  <li><a href="#" class="nav-link px-2 link-dark">Juegos</a></li>
                                  <li><a href="#" class="nav-link px-2 link-dark">Cascos</a></li>
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

const plantillaPresentacion = `<div class="jumbotron container text-center p-5" id="presentacion">
                                  <h1 id="tituloPresentacion" >RGL</h1>
                                  <p>
                                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                                  cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                                  galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                                  No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                                  quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
                                  las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, 
                                  como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                                  </p>
                                  <p>
                                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                                  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                                  cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                                  galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                                  No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, 
                                  quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", 
                                  las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, 
                                  como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                                  </p>
                              </div>`;

const plantillaFooter = `<footer class="fixed-bottom  bg-dark text-center text-white" id="footer">
                              <div class="container p-4 pb-0">
                                <section class="mb-4">
                                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-facebook"></i></a>
                                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-twitter"></i></a>
                                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button" ><i class="bi bi-instagram"></i></a>
                                  <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-github"></i></a>
                                </section>
                              </div>
                            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                              @ Página desarrollada por Andrés Mancheño ALcaraz y Fernando Martínez
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
function eliminarTodoContenido() {
  body.removeChild(document.getElementById("contenidoPrincipal"));
}

export {
  insertarPlantillaHeader,
  insertarPlantillaPresentacion,
  insertarPlantillaFooter,
  eliminarTodoContenido,
};
