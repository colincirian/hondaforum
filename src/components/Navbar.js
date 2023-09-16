import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import supabase from "../config/SupabseClient";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/">
          <a class="navbar-brand" href="#">
            Home
          </a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="https://hondanews.com/en-US">
                    Trending
                </a>
            </li>
            <li class="nav-item">
              <Link to="./login">
                <a class="nav-link" href="#">
                  Login
                </a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="./register">
                <a class="nav-link" href="#">
                  Register
                </a>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search"></form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
