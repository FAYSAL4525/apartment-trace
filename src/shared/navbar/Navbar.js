import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
        <div className="container-fluid">
          <h2 className="navbar-brand fs-3 text-success">
            <FontAwesomeIcon icon={faHome} size="2x" />
            APARTMENT TRACE
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className={`navbar-nav ms-auto ${styles.navlink}`}>
              <NavLink activeStyle={{ color: "green" }} to="/">
                Home
              </NavLink>
              <NavLink to="/">About</NavLink>
              <NavLink to="/">Service</NavLink>
              <NavLink to="/">Concerns</NavLink>
              <NavLink to="/">Contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
