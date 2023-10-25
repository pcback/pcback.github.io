// import constantes from "./data_ventas.js";
// console.log(constantes);
import { propiedades_ventas } from "./data_ventas.js";
// console.log(propiedades_alquiler);

// elementos
const propiedadesVentas = document.querySelector("#propiedadesVenta");

// funciones

const mostrarDatosEnCards = (data) => {
  data.slice(0, 6).forEach((propiedades) => {
    // console.log(propiedades);
    const {
      src,
      nombre,
      descripcion,
      ubicacion,
      habitaciones,
      baños,
      costo,
      smoke,
      pets,
    } = propiedades;
    const card = document.createElement("div");
    card.className = `row`;
    card.className = `col-md-4 mb-4`;
    propiedadesVentas.appendChild(card);
    card.innerHTML = `
         <div class="card ">
    <img
      src=${src}""
      class="card-img-top"
      alt="Imagen del departamento"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${nombre}
      </h5>
      <p class="card-text card1">
        ${descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
        ${ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${habitaciones} |
        <i class="fas fa-bath"></i> ${baños}
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${costo}/p>
 
      <p class="${smoke ? "text-success" : "text-danger"}">
        <i class="${smoke ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i>${
      smoke ? "Permitido fumar" : "No esta permitido fumar"
    } 
      </p>
      ${
        pets
          ? `<p class="text-success">
        <i class="fa-solid fa-paw"></i> se permiten mascotas</p>`
          : `<p class="text-danger">
        <i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
      }
   </div>
  </div>`;
  });
};

mostrarDatosEnCards(propiedades_ventas);
