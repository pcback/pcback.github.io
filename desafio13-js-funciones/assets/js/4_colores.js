// FUNCIONES

// SE CREAN  LA FUNCION PINTAR PARA ESTABLECER COLOR NEGRO AL HACER CLIC EN LA CAJA

var elemento;
function pintar(id) {
  var elemento = document.getElementById(id);
  elemento.style.backgroundColor = "black";
}

// SE ASIGNA EVENTO CLIC A LAS CAJAS
document.getElementById("c_blue").addEventListener("click", function () {
  pintar("c_blue");
});

// ///////////////////////////////////////////////////////////////////////////////////////
// SE ASIGNA EVENTO CLIC A LAS CAJAS
document.getElementById("c_red").addEventListener("click", function () {
  pintar("c_red");
});

// ///////////////////////////////////////////////////////////////////////////////////////

// SE ASIGNA EVENTO CLIC A LAS CAJAS
document.getElementById("c_green").addEventListener("click", function () {
  pintar("c_green");
});

// ///////////////////////////////////////////////////////////////////////////////////////

// SE ASIGNA EVENTO CLIC A LAS CAJAS
document.getElementById("c_yellow").addEventListener("click", function () {
  pintar("c_yellow");
});
