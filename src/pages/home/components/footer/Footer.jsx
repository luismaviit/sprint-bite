import React from "react";

function Footer() {
  return (
    <div className=" ">
      <footer
        className="text-center text-lg-start"
        style={{
          backgroundImage: `url(
            "https://res.cloudinary.com/rawwshak/image/upload/v1717191628/footer_bg_tmiz01.png"
          )`,
        }}
      >
        <div className="container d-flex justify-content-center py-5">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <i className="fab fa-facebook-f"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <i className="fab fa-youtube"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <i className="fab fa-instagram"></i>
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b;" }}
          >
            <i className="fab fa-twitter"></i>
          </button>
        </div>

        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2);=" }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="">
            Sprint Bite
          </a>
        </div>
        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2);=" }}
        >
          Design by
          <a className="text-dark" href="https://github.com/luismaviit">
            Luismaviit
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
