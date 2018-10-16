let menuHamburguesa = document.getElementById("menu-burger"),
    menuNavegacion = document.getElementsByClassName("nav-menu"),
    botonesNavegacion = document.getElementsByClassName("btn-menu")


menuHamburguesa.addEventListener("click", e =>{
  e.preventDefault;
  menuNavegacion[0].classList.toggle("active-menu")
  Array.prototype.forEach.call(botonesNavegacion, elemento => {
    elemento.classList.toggle("menu-animado")
  });
  menuHamburguesa.classList.toggle("--is-active");

}, false)
