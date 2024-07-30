import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {

  const handleScroll = ()=> {
      const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  window.onscroll = ()=>{handleScroll()}
  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container-fluid">
        <h4>
          <Link className="navbar-brand" to="/">
            Konaseema
            <span className="text-warning" style={{ fontSize: "1.4rem" }}>
              Ruchulu
            </span>
          </Link>
        </h4>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/our-story">
                Our Story
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catering">
                Catering
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact & Hours
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="badge bg-danger">3</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                id="nav-profile-logo"
                className="nav-link nav-profile-logo text-center"
                to="/profile"
              >
                S
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
