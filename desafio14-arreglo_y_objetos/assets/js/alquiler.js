import { propiedades_alquiler } from "./data_ventas.js";
// console.log(propiedades_alquiler);

// elementos
const propiedadesAlquiler = document.querySelector("#propiedadesAlquiler");

// funciones

const mostrarDatosEnCards = () => {
  propiedades_alquiler.forEach((propiedades) => {
    const card = document.createElement("div");
    propiedadesAlquiler.appendChild(card);
    // card.className = `row`;
    card.className = `col-md-4 mb-4`;
    card.innerHTML = `
         <div class="card ">
    <img
      src=${propiedades.src}""
      class="card-img-top"
      alt="Imagen del departamento"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${propiedades.nombre}
      </h5>
      <p class="card-text card1">
        ${propiedades.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
        ${propiedades.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${propiedades.habitaciones}
        <i class="fas fa-bath"></i> ${propiedades.baños}
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${propiedades.costo}/p>

      <p class="${propiedades.smoke ? "text-success" : "text-danger"}">
        <i class="${
          propiedades.smoke ? "fas fa-smoking" : "fas fa-smoking-ban"
        }"></i>${
      propiedades.smoke ? "Permitido fumar" : "No esta permitido fumar"
    }
      </p>
      ${
        propiedades.pets
          ? `<p class="text-success">
        <i class="fa-solid fa-paw"></i> se permiten mascotas</p>`
          : `<p class="text-danger">
        <i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
      }
    </div>
  </div>`;
  });
};

mostrarDatosEnCards();
