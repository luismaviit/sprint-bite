import React from "react";

function Footer() {
  return (
    <div className=" ">
      <footer
        className="text-center text-lg-start"
        style={{backgroundColor: "#db6930"}}
      >
        <div className="container d-flex justify-content-center py-5">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{backgroundColor: "#54456b"}}
          >
            <i className="fab fa-facebook-f"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{backgroundColor: "#54456b"}}
          >
            <i className="fab fa-youtube"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{backgroundColor: "#54456b"}}
          >
            <i className="fab fa-instagram"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{backgroundColor: "#54456b;"}}
          >
            <i className="fab fa-twitter"></i>
          </button>
        </div>

        <div
          className="text-center text-white p-3"
          style={{backgroundColor: "rgba(0, 0, 0, 0.2);="}}
        >
          © 2020 Copyright:
          <a className="text-white" href="">
            Sprint Bite
          </a>
        </div>
        <div
          className="text-center text-white p-3"
          style={{backgroundColor: "rgba(0, 0, 0, 0.2);="}}
        >
          Design by
          <a className="text-white" href="https://github.com/luismaviit">
             Luismaviit
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
