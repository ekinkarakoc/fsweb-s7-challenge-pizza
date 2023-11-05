import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bgimg from "../Assets/mvp-banner.png";

const Home = () => {
  return (
    <>
      <div className="homecontainer">
        <div className="hometext">
          <p>KOD ACIKTIRIR</p>
          <p>PİZZA, DOYURUR</p>
        </div>
        <div className="btndiv hometext">
          <Link to="/order" path="relative" className="linkbtn">
            ACIKTIM
          </Link>
        </div>
      </div>
      <img src={bgimg} className="homebg" />
    </>
  );
};

export default Home;
