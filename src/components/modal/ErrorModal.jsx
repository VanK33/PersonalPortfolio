import "./ErrorModal.scss";
import errorImage from "../../assets/logos/icons8-error-64-red.png";

const ErrorModal = ({ closeModal, message }) => {
  return (
    <div className="error-overlay" onClick={closeModal}>
      <section
        className="error-overlay__modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="error-overlay__title-container">
          <img
            src={errorImage}
            className="error-overlay__left-logo"
            alt="error log"
          />
          <h1 className="error-overlay__heading">ERROR</h1>
          <img
            src={errorImage}
            className="error-overlay__right-logo"
            alt="error log"
          />
        </div>

        <h2
          className="error-overlay__subheading glitch"
          data-text="#RESTRICTED DATA NODE#"
        >
          #RESTRICTED DATA NODE#
        </h2>

        <p className="error-overlay__text"> ERROR CODE: {message} </p>
      </section>
    </div>
  );
};

export default ErrorModal;
