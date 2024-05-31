import React from "react";
import "./AboutUs.style.css";
function AboutUs() {
  return (
    <div className="about-us-container">
      
          <h2 className="tittle-about-us">Acerca de nosotros</h2>
          <h1>
            Las mejores comidas <br />
            en tu ciudad
          </h1>
          <p className="text-about-us">
            ¡Bienvenidos a <b>¡Sprint Bite!</b>Somos una cocina oculta
            
            ubicada en la vibrante ciudad de Barranquilla, dedicada a ofrecerte
            
            hamburguesas, salchipapas y pizzas deliciosas, 100% orgánicas.
           
            Nuestra pasión es servir comida rápida de alta calidad, utilizando
           
            ingredientes frescos y orgánicos para garantizar una experiencia
          
            saludable y sabrosa. Descubre el sabor auténtico y natural en cada
            <br />
            bocado, porque en <b>¡Sprint Bites!</b>, tu bienestar es nuestra
         
            prioridad.
            
            <b>¡Ordena hoy y disfruta de una comida única y consciente!</b>
          </p>
          <button className="button-menu">Ver menu <i class="bi bi-file-text"></i></button>
        
    
    </div>
  );
}

export default AboutUs;
