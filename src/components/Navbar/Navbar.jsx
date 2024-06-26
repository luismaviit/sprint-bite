import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import "./NavBar.style.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function handleNavigateMenu() {
    navigate("/menu");
  }
  function handleNavigateHome() {
    navigate("/home");
  }

  return (
    <nav
      className={`navbar navbar-expand-lg  fixed-top ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://res.cloudinary.com/rawwshak/image/upload/v1717017102/Sin_ti%CC%81tulo_3_i2oxbz.png"
            alt="Logo"
            width="80"
            height="80"
          />
        </a>
        <button
          className="navbar-toggler color-white navbar-toggler-custom"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{ cursor: "pointer" }}>
              <a
                className="nav-link active"
                aria-current="page"
                onClick={handleNavigateHome}
              >
                Home
              </a>
            </li>
            <li className="nav-item" style={{ cursor: "pointer" }}>
              <a className="nav-link" onClick={handleNavigateMenu}>
                Menu
              </a>
            </li>
          </ul>
          <Modal/>
          {/* <div className="cart-icon-wrapper">
            <i className="bi bi-cart-fill"></i>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
