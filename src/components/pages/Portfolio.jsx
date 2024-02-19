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

const PortfolioPage = () => {
  const { width } = useWindowContext();
  const count = width < 1100 ? 200 : 350;
  return (
    <div className="portfolio">
      <Matrix count={count} />
      <div className="portfolio__image-ring">
        <img
          src={coffeeShop}
          alt="coffee shop project snapshot"
          className="portfolio__image"
        />
        <img
          src={travelSite}
          alt="travel site project snapshot"
          className="portfolio__image"
        />
        <img
          src={bandSite}
          alt="band site project snapshot"
          className="portfolio__image"
        />
        <img
          src={brainFlix}
          alt="brain flix project snapshot"
          className="portfolio__image"
        />
        <img
          src={firstHackathon}
          alt="first hackathon snapshot"
          className="portfolio__image"
        />
        <img
          src={inStock}
          alt="instock project snapshot"
          className="portfolio__image portfolio__image--adjust-size"
        />
        <img
          src={pickYourDish}
          alt="personal project snapshot"
          className="portfolio__image"
        />
        <img
          src={coffeeShop}
          alt="coffee shop project snapshot"
          className="portfolio__image"
        />
        <img
          src={travelSite}
          alt="travel site project snapshot"
          className="portfolio__image"
        />
        <img
          src={bandSite}
          alt="band site project snapshot"
          className="portfolio__image"
        />
        <img
          src={brainFlix}
          alt="brain flix project snapshot"
          className="portfolio__image"
        />
        <img
          src={firstHackathon}
          alt="first hackathon snapshot"
          className="portfolio__image"
        />
        <img
          src={inStock}
          alt="instock project snapshot"
          className="portfolio__image portfolio__image--adjust-size"
        />
        <img
          src={pickYourDish}
          alt="personal project snapshot"
          className="portfolio__image"
        />
      </div>
    </div>
  );
};

export default PortfolioPage;
