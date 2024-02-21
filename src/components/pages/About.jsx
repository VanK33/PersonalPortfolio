import Matrix from "../matrix/Matrix";
import { Link } from "react-router-dom";
import github from "../../assets/logos/icons8-github.svg";
import linkedIn from "../../assets/logos/icons8-linked-in.svg";
import weChat from "../../assets/logos/icons8-wechat-48.png";
import resume from "../../assets/logos/icons8-resume-48.png";
import "./page-styling/About.scss";
import selfie from "../../assets/images/IMG_4877.png";

const aboutPage = () => {
  return (
    <div className="about">
      <Matrix count={200} />
      <Link to="/" className="about__title-section">
        <h3 className="about__title">Teleport To The Origin</h3>
      </Link>
      <section className="about__content-container">
        <div className="about__about-me-header">
          <p className="about__about-header-text">A</p>
          <p className="about__about-header-text">B</p>
          <p className="about__about-header-text">O</p>
          <p className="about__about-header-text">U</p>
          <p className="about__about-header-text about__about-header-text--padding">
            T
          </p>
          <div className="about__avatar"></div>
        </div>

        <div className="about__introduction-text">
          {/* will include a personal highlights */}
          <p className="about__intro-main-title">
            Yifei Ma is a Junior Full Stack Developer specializing in React,
            Node.js, MySQL, JavaScript, and Excel VBA. Currently holding a
            contract full-time position at BrainStation as a Teaching Assistant,
            Yifei is capable of expanding his toolkits beyond what he already
            knows.
          </p>
          {/* a personal statement, personal interests, and ambition */}
          <p className="about__intro-sub-title">
            A little bit more about Yifei . Like anyone cares.
          </p>
          <p className="about__intro-text">
            Yifei is passionate about systematically approaching a problem,
            researching and designing an approach, and engineering a product
            that hopefully becomes the solution. His passion for building things
            and desire to prove himself drove him from studying aerosols
            chemistry to software development. Yifei firmly believes that the
            future lies within the realm of computer science and engineering -
            knowing and understanding programming languages is an essential
            skill for the future.
          </p>
          <p className="about__intro-text">
            I need to come up something which is about the length of this area I
            need to come up something which is about the length of this area I
            need to come up something which is about the length of this area I
            need to come up something which is about the length of this area I
            need to come up something which is about the length of this area I
            need to come up something which is about the length of this area I
            need to come up something which is about the length of this area
          </p>
        </div>
        <div className="about__logo-list">
          <div>
            <img src={github} alt="github logo" />
          </div>
          <div>
            <img src={linkedIn} alt="linkedIn logo" />
          </div>
          <div>
            <img src={weChat} alt="weChat logo" />
          </div>
          <div>
            <img src={resume} alt="resume logo" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default aboutPage;
