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
import { Link } from "react-router-dom";
import ErrorModal from "../modal/ErrorModal";

const PortfolioPage = ({ openModal, closeModal, isModalOpen }) => {
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
        const edgeThreshold = screenWidth * 0.15; // 20% from the edge of the window
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

  const handleImageClick = (url) => {
    window.location.href = url;
  };

  // projects are repeated twice to compensate for the visual effect of the ring
  const imageObjectArray = [
    {
      name: "CoffeeShop",
      src: coffeeShop,
      private: true,
      git: "https://github.com/VanK33/Coffee-Shop",
    },
    {
      name: "TravelSite",
      src: travelSite,
      private: true,
      git: "https://github.com/VanK33/Travel-Site-Project",
    },
    {
      name: "BandSite",
      src: bandSite,
      private: true,
      git: "https://github.com/VanK33/Band-Site-Project",
    },
    {
      name: "BrainFlix",
      src: brainFlix,
      private: true,
      git: "https://github.com/VanK33/BrainFlix",
    },
    {
      name: "FirstHackathon",
      src: firstHackathon,
      private: true,
      git: "https://github.com/CLProgrammer79/hackathon_findyourpet",
    },
    {
      name: "InStock",
      src: inStock,
      private: true,
      git: "https://github.com/rizwan2k10/inStock",
    },
    {
      name: "PickYourDish",
      src: pickYourDish,
      private: false,
      git: "https://github.com/VanK33/PickYourDish",
    },
    {
      name: "CoffeeShop",
      src: coffeeShop,
      private: true,
      git: "https://github.com/VanK33/Coffee-Shop",
    },
    {
      name: "TravelSite",
      src: travelSite,
      private: true,
      git: "https://github.com/VanK33/Travel-Site-Project",
    },
    {
      name: "BandSite",
      src: bandSite,
      private: true,
      git: "https://github.com/VanK33/Band-Site-Project",
    },
    {
      name: "BrainFlix",
      src: brainFlix,
      private: true,
      git: "https://github.com/VanK33/BrainFlix",
    },
    {
      name: "FirstHackathon",
      src: firstHackathon,
      private: true,
      git: "https://github.com/CLProgrammer79/hackathon_findyourpet",
    },
    {
      name: "InStock",
      src: inStock,
      private: true,
      git: "https://github.com/rizwan2k10/inStock",
    },
    {
      name: "PickYourDish",
      src: pickYourDish,
      private: false,
      git: "https://github.com/VanK33/PickYourDish",
    },
  ];

  return (
    <div className="portfolio">
      <Matrix count={count} />
      <Link
        to="/"
        className="portfolio__title-section"
        // add handleResize if necessary - refer to Home.jsx line 20-37, line 45-48
      >
        <h3 className="portfolio__title">Teleport To The Origin</h3>
      </Link>
      <div
        className="portfolio__image-ring"
        style={{ transform: `rotateY(${rotateDeg}deg)` }}
      >
        {imageObjectArray.map((imageObject, index) => (
          <img
            key={index}
            src={imageObject.src}
            alt={`${imageObject.name} project snapshot`}
            className={`portfolio__image ${
              imageObject.name === "InStock"
                ? "portfolio__image--adjust-size"
                : ""
            }`}
            onClick={
              imageObject.private
                ? () => openModal()
                : () => handleImageClick(imageObject.git)
            }
          />
        ))}
      </div>

      {isModalOpen && (
        <ErrorModal closeModal={closeModal} message={"PRIVATE REPO"} />
      )}
    </div>
  );
};

export default PortfolioPage;
