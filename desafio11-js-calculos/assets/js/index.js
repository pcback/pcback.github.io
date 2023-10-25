var precio = 400000;
var cantidad = 0;
var precioFinal = cantidad * precio;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidad;

valorSpan = document.querySelector(".valor-total");
valorSpan.innerHTML = precioFinal;
