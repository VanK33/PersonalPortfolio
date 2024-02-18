import Matrix from "../matrix/Matrix";
import "./page-styling/Home.scss";
import { useWindowContext } from "../HelperFunctions";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { width } = useWindowContext();
  const count = width < 1100 ? 200 : 350;
  const [titlePosition, setTitlePosition] = useState({
    top: "40%",
    left: "50%",
  });
  const [portfolioPosition, setPortfolioPosition] = useState({ top: "74%" });

  // potentially useful to dynamically adjust title positions. Found the best looking for
  // now but left the option open for future use
  // this could also be solved using media query ---- leave till later styling.
  //  Desktop oriented for now
  useEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight;
      if (height <= 1080) {
        setTitlePosition({ top: "40%", left: "50%" });
        setPortfolioPosition({ top: "74%" });
      } else {
        setTitlePosition({ top: "38%", left: "50%" });
        setPortfolioPosition({ top: "74%" });
      }
    };

    // initialization of the title position
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div className="home">
      <Matrix count={count} />
      <Link
        to="/About"
        className="home__title-section"
        style={{
          top: titlePosition.top,
          left: titlePosition.left,
        }}
      >
        <p className="home__title-decro">
          click to <br /> know me
        </p>
        <h2 className="home__title-name glitch" data-text="YIFEI MA">
          YIFEI MA
        </h2>
        <p className="home__title-position">Jr. Software Developer</p>
      </Link>

      <Link to="/portfolio" className="home__portfolio-section">
        <p
          className="home__portfolio-button"
          style={{
            top: portfolioPosition.top,
          }}
        >
          PORTFOLIO
        </p>
      </Link>
    </div>
  );
};

export default Home;
