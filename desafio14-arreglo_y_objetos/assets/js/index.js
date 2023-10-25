// importacion
// import constantes1 from "./data_ventas.js";
import { img_ventas_index, img_alquiler_index } from "./data_ventas.js";
// console.log(img_ventas_index, img_alquiler_index);

const imgVentasIndex = document.querySelector("#pag_ventas_index");
const imgAlquilerIndex = document.querySelector("#pag_alquiler_index");

// funciones

const mostrarDatosEnCards = (data1, data2) => {
  data1.slice(0, 3).forEach((propiedades1) => {
    // iterando cod.
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
    } = propiedades1;
    // console.log(propiedades);
    const card = document.createElement("div");
    imgVentasIndex.appendChild(card);
    card.className = `row`;
    card.className = `col-md-4 mb-4`;

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
  data2.slice(0, 3).forEach((propiedades2) => {
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
    } = propiedades2;
    // console.log(propiedades2);
    const card = document.createElement("div");
    card.className = `row`;
    card.className = `col-md-4 mb-4`;
    imgAlquilerIndex.appendChild(card);
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
      <p class="card-text ">
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
mostrarDatosEnCards(img_ventas_index, img_alquiler_index);
