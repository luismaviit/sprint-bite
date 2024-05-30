import React from 'react';
import './Video.style.css'; // Importa los estilos

const Video = () => {
  return (
    <section className="background-section">
      <video autoPlay loop muted className="background-video">
        <source src="https://res.cloudinary.com/rawwshak/video/upload/v1717101136/1109982_Salt_Seasoning_Unknown_1280x720_al7wqp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     {/*  <div className="content">
        <h1>Bienvenidos a [Nombre del Restaurante]</h1>
        <p>Somos una cocina oculta ubicada en la vibrante ciudad de Barranquilla, dedicada a ofrecerte hamburguesas, salchipapas y pizzas deliciosas y 100% orgánicas. Nuestra pasión es servir comida rápida de alta calidad, utilizando ingredientes frescos y orgánicos para garantizar una experiencia saludable y sabrosa. Descubre el sabor auténtico y natural en cada bocado, porque en [Nombre del Restaurante], tu bienestar es nuestra prioridad. ¡Ordena hoy y disfruta de una comida única y consciente!</p>
      </div> */}
    </section>
  );
};

export default Video;
