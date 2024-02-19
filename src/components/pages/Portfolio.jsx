import bandSite from "../../assets/images/Band-Site.png";
import travelSite from "../../assets/images/Travel-Site.png";
import brainFlix from "../../assets/images/BrainFlix.png";
import coffeeShop from "../../assets/images/Coffee-Shop.png";
import inStock from "../../assets/images/InStock.png";
import firstHackathon from "../../assets/images/First-Hackathon.png";
import pickYourDish from "../../assets/images/PickYourDish.png";
import Matrix from "../matrix/Matrix";
import { useWindowContext } from "../HelperFunctions";

import "./page-styling/Portfolio.scss";
import { useState, useEffect } from "react";

const PortfolioPage = () => {
  const { width } = useWindowContext();
  const count = width < 1100 ? 200 : 350;

  const [rotateDeg, setRotateDeg] = useState(0);
  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (event) => {
      animationFrameId = requestAnimationFrame(() => {
        const mouseX = event.clientX;
        const screenWidth = window.innerWidth;
        const maxRotateSpeed = 3;
        const minRotateSpeed = 0.5;
        const maxRotateDistance = screenWidth / 2;
        const edgeThreshold = screenWidth * 0.15; // 20% 边缘区域的宽度
        const distanceFromEdge = Math.min(mouseX, screenWidth - mouseX);
        let rotateSpeed = 0;
        if (distanceFromEdge < edgeThreshold) {
          rotateSpeed =
            minRotateSpeed +
            ((edgeThreshold - distanceFromEdge) / edgeThreshold) *
              (maxRotateSpeed - minRotateSpeed);
          const direction = mouseX < screenWidth / 2 ? 1 : -1;
          setRotateDeg(
            (prevRotateDeg) => prevRotateDeg + rotateSpeed * direction
          );
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  const images = [
    // repeate twice to compensate for the visual effect of the ring
    coffeeShop,
    travelSite,
    bandSite,
    brainFlix,
    firstHackathon,
    inStock,
    pickYourDish,
    coffeeShop,
    travelSite,
    bandSite,
    brainFlix,
    firstHackathon,
    inStock,
    pickYourDish,
  ];

  return (
    <div className="portfolio">
      <Matrix count={count} />
      <div
        className="portfolio__image-ring"
        style={{ transform: `rotateY(${rotateDeg}deg)` }}
      >
        {images.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt={`project ${index} snapshot`}
            className={`portfolio__image ${
              image === inStock ? "portfolio__image--adjust-size" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
