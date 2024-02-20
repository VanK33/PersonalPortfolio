import "./page-styling/Error.scss";
import Matrix from "../matrix/Matrix";
import errorImage from "../../assets/logos/icons8-error-64.png";

const Error = () => {
  const message = "PRIVATE REPO";
  return (
    <div className="error">
      <section className="error__dialog">
        <div className="error__title-container">
          <img src={errorImage} className="error__logo" alt="error log" />
          <h1 className="error__heading">ERROR</h1>
        </div>

        <h2 className="error__subheading">RESTRICTED DATA MODE</h2>

        <p className="error__text"> ERROR: {message} </p>
      </section>
    </div>
  );
};

export default Error;
