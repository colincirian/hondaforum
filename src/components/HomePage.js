import React from "react";
import Navbar from "./Navbar";
import "./HomePage.css";


function HomePage() {
  return (
    <>
      <Navbar />
      <h1>Honda Forum</h1>
      <section className="main-body">
        <div className="home-screen">
          <h3>
            Trending Topics 
          </h3>
          <h3>
            New Type R
          </h3>
          <h3>
            Links to different groups 
          </h3>
        </div>
        <section className="mini-box-container">
          <h5>Member Submissions</h5>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </section>
      </section>
    </>
  );
}

export default HomePage;
