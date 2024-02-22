import Matrix from "../matrix/Matrix";
import { Link } from "react-router-dom";
import github from "../../assets/logos/icons8-github.svg";
import linkedIn from "../../assets/logos/icons8-linked-in.svg";
import weChat from "../../assets/logos/icons8-wechat-48.png";
import resume from "../../assets/logos/icons8-resume-48.png";
import githubLarge from "../../assets/logos/icons8-github-100.png";
import linkedInLarge from "../../assets/logos/icons8-linkedin-100.png";
import weChatLarge from "../../assets/logos/icons8-wechat-96.png";
import resumeLarge from "../../assets/logos/icons8-resume-96.png";
import "./page-styling/About.scss";
import resumePDF from "../../assets/files/Resume.pdf";

const aboutPage = ({ handleImageClick }) => {
  const handleDownloadFile = (src, filename) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const logoArray = [
    {
      name: "github",
      src: github,
      text: "GITHUB",
      XL: githubLarge,
      url: "https://github.com/VanK33",
    },
    {
      name: "linkedIn",
      src: linkedIn,
      text: "LINKED-IN",
      XL: linkedInLarge,
      url: "https://www.linkedin.com/in/jeff-yifei-ma",
    },
    {
      name: "weChat",
      src: weChat,
      text: "VANK33",
      XL: weChatLarge,
      url: "",
    },
    {
      name: "resume",
      src: resume,
      text: "DOWNLOAD RESUME",
      XL: resumeLarge,
      url: "",
    },
  ];

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
        <ul className="about__logo-list">
          {logoArray.map((logoObject, index) => (
            <li
              key={index}
              className="about__logo-container"
              style={{
                borderRadius:
                  logoObject.name === "resume" || logoObject.name === "linkedIn"
                    ? "25px 5px 5px 25px"
                    : "25px 10px 10px 25px",
              }}
            >
              <p
                className="about__logo-text"
                style={{
                  fontSize: logoObject.name === "resume" ? "1.2rem" : "1.65rem",
                  letterSpacing: logoObject.name !== "resume" ? "0.2rem" : "0",
                }}
              >
                {logoObject.text}
              </p>
              <img
                src={logoObject.src}
                alt={`${logoObject.name} logo`}
                className="about__logo"
                style={{ borderImageSource: `url(${logoObject.XL})` }}
                onClick={() => {
                  if (logoObject.name === "resume") {
                    handleDownloadFile(resumePDF, "YIFEI MA - RESUME.PDF");
                  } else if (logoObject.name !== "weChat") {
                    handleImageClick(logoObject.url);
                  }
                }}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default aboutPage;
