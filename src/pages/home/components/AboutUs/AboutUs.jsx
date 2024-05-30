import React from "react";
import "./AboutUs.style.css";
function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="row ">
        <div className="col">
          <div className="wrapper-image-bout-us">
            <img
              src="https://res.cloudinary.com/rawwshak/image/upload/v1717099106/Sin_ti%CC%81tulo_-_May_29_2024_at_22.21.35_1_untgjm.png"
              alt="Logo"
              height="500"
            />
          </div>
        </div>
        <div className="col">
          <h2 className="tittle-about-us">Acerca de nosotros</h2>
          <h1>
            Las mejores comidas <br />
            en tu ciudad
          </h1>
          <p className="text-about-us">
            ¡Bienvenidos a <b>¡Sprint Bite!</b>¡ Somos una cocina oculta
            <br />
            ubicada en la vibrante ciudad de Barranquilla, dedicada a ofrecerte
            <br />
            hamburguesas, salchipapas y pizzas deliciosas, 100% orgánicas.
            <br />
            Nuestra pasión es servir comida rápida de alta calidad, utilizando
            <br />
            ingredientes frescos y orgánicos para garantizar una experiencia
            <br />
            saludable y sabrosa. Descubre el sabor auténtico y natural en cada
            <br />
            bocado, porque en <b>¡Sprint Bites</b>¡, tu bienestar es nuestra
            <br />
            prioridad.
            <br />{" "}
            <b>¡Ordena hoy y disfruta de una comida única y consciente!</b>
          </p>
          <button className="button-menu">Ver menu <i class="bi bi-file-text"></i></button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
