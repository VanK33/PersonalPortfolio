import Matrix from "../matrix/Matrix";
import "./page-styling/Home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* <h1> this is my homepage</h1> */}
      {/* hidden now prevent me from dizzy */}
      <Matrix count={200} />
      <section className="home__title-section">
        <h2 className="home__title-name glitch" data-text="YIFEI MA">
          YIFEI MA
        </h2>
        <p
          className="home__title-position"
          data-text=" Jr. Software Developer "
        >
          Jr. Software Developer
        </p>
      </section>
    </div>
  );
};

export default Home;
