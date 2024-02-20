import "./page-styling/Error.scss";
import Matrix from "../matrix/Matrix";
import errorImage from "../../assets/logos/icons8-error-64.png";

const Error = () => {
  const message = "PRIVATE REPO";
  return (
    <div className="error">
      <Matrix count={200} />
      <section className="error__dialog">
        <div className="error__title-container">
          <img src={errorImage} className="error__logo" alt="error log" />
          <h1 className="error__heading">ERROR</h1>
        </div>

        <div className="error__message-container">
          <div className="error__subheading-container">
            <h2 className="error__subheading">RESTRICTED DATA MODE</h2>
            <p>deaGlocototLodpLeaclunrRelaims</p>
          </div>

          <div className="error__text-container">
            <p className="error__text"> ERROR: {message} </p>
          </div>
          <p className="error__scrambled-text">
            EmBiCGd, BecileES, IntLScLeRRS
          </p>
        </div>
      </section>
    </div>
  );
};

export default Error;
