// CAJA 1

// CREANDO VARIABLE COLOR CAJA 1
var color_div1 = function (color) {
  return color;
};
// CREANDO FUNCION  CAJA 1
function pintar_div1(color) {
  const elemento = document.getElementById("cambioTecla");
  elemento.style.backgroundColor = color_div1(color);
  document.body.style.backgroundColor = color_div1(color);
}
// CREANDO CONFIG TECLAS A,S,D CAJA 1
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    pintar_div1("pink");
  } else if (event.key === "s") {
    pintar_div1("orange");
  } else if (event.key === "d") {
    pintar_div1("skyblue");
  }
});

// CAJA 2

// CREANDO VARIABLE COLOR CAJA 2
var color_div2 = function (color) {
  return color;
};

// CREANDO FUNCION  CAJA 1
function pintar_div2(color) {
  const elemento2 = document.getElementById("cambioTecla2");
  elemento2.style.backgroundColor = color_div2(color);
  elemento2.style.display = "block";
}

// CREANDO CONFIG TECLAS Q,W,E CAJA 2
document.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    pintar_div2("purple");
  } else if (event.key === "w") {
    pintar_div2("grey");
  } else if (event.key === "e") {
    pintar_div2("brown");
  }
});
