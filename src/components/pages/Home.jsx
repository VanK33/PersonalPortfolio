import Matrix from "../matrix/Matrix";
import "./page-styling/Home.scss";
import { useWindowContext } from "../HelperFunctions";

const Home = () => {
  const { width } = useWindowContext();
  const count = width < 1100 ? 200 : 350;

  return (
    <div className="home">
      {/* hidden now prevent me from dizzy */}
      <Matrix count={count} />
      <section className="home__title-section">
        <p className="home__title-decro">
          {" "}
          click to <br /> know me
        </p>
        <h2 className="home__title-name glitch" data-text="YIFEI MA">
          YIFEI MA
        </h2>
        <p className="home__title-position">Jr. Software Developer</p>
      </section>

      <section className="home__portfolio-section">
        <p className="home__portfolio-button">PORTFOLIO</p>
      </section>
    </div>
  );
};

export default Home;
