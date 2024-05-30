import React from "react";
import './Carousel.style.css'; // Asegúrate de importar el CSS

function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://res.cloudinary.com/rawwshak/image/upload/v1717040498/papas_m0wrgs.png"
            className="d-block w-100 h-100 object-fit-cover"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/rawwshak/image/upload/v1717041008/hamgurguesComboa_d1kzqm.png"
            className="d-block w-100 h-100 object-fit-cover"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/rawwshak/image/upload/v1717041975/Sin_ti%CC%81tulo_4_thgpye.png"
            className="d-block w-100 h-100 object-fit-cover"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
