import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import Tarjeta from "./components/Mycards";
import AdoptaPerros from "./components/Header";
import Boton from "./components/Tags";
import Pie from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <AdoptaPerros />
      <div
        style={{
          display: "flex",
          flexDirection: "col",
          margin: "5%",
        }}
      >
        <Tarjeta
          urlImagen="./public/img/img1.jpg"
          nombre="Messi"
          descripcion="Perrito con enseñanza domestica"
          llevame="Adoptar"
        />
        <Tarjeta
          urlImagen="./public/img/img2.jpg"
          nombre="Ronaldo"
          descripcion="Perrito sin enseñanza domestica"
          llevame="Adoptar"
        />
        <Tarjeta
          urlImagen="./public/img/img3.jpg"
          nombre="Bambam"
          descripcion="Perrito con enseñanza domestica"
          llevame="Adoptar"
        />
        <Tarjeta
          urlImagen="./public/img/img4.jpg"
          nombre="Leron"
          descripcion="Soy muy simpatico, cariñoso, obediente y limpio"
          llevame="Adoptar"
        />
      </div>

      <div>
        <Boton boton="Contacto" />
      </div>
      <div
        style={{
          container: "fluid",
          text: "center",
          padding: "3px",
          marginTop: "20px",
        }}
      >
        <Pie />
      </div>
    </div>
  );
};

export default App;
