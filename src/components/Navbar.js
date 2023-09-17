import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import supabase from "../config/SupabaseClient";

function Navbar() {
  return (
    <nav id="nav" class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/">
          <a class="navbar-brand" href="#">
            Honda World
          </a>
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="https://hondanews.com/en-US">
                Trending
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.twostepperformance.com/?tmsrc=googlead&tmcid=19821048222&tmsid=147436600776&tmid=646870804968&tmkw=two+step+performance&gclid=CjwKCAjwpJWoBhA8EiwAHZFzfj4Pkywq4ifme0zFPZu8F3ioyuPv2jpe_sX72FbbZn_4slWqbLgsYhoCiUUQAvD_BwE"
              >
                Performance Upgrades
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.fitmentindustries.com/?utm_source=google&utm_medium=cpc&utm_campaign=6773145759&utm_content=125574610510&utm_term=fitment%20industries&gclid=CjwKCAjwpJWoBhA8EiwAHZFzfmMdpyvVGyG72cC734A3Qai6DWwGTIBxxNaMGT8P8-9pZ7QGkUE-CxoCKLMQAvD_BwE"
              >
                Wheels
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
