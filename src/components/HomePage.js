import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import "./HomePage.css";
import UserPost from "./UserPost";


function HomePage() {
  return (
    <>
      <Navbar />
      <section className="main-body">
        <div className="home-screen">
          <h1>Member Submissions</h1>
          <Link to="./posts">
          <a href="">Create a Post!</a>
          </Link>
        </div>
        <section className="mini-box-container">
          <h4>Member Submissions</h4>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </section>
      </section>
    </>
  );
}

export default HomePage;
