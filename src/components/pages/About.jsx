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
            Node.js, MySQL, JavaScript, and Excel VBA. His role as a Teaching
            Assistant at BrainStation underscores his commitment to immersing
            himself in the field, while also providing ample opportunity to hone
            his code review skills. Yifei is genuinely interested in applying
            his toolkit to real-world applications, drawing on his methodical
            problem-solving abilities to make a tangible impact. His pursuit of
            practical experience is a testament to his dedication to continuous
            learning and professional growth.
          </p>
          {/* a personal statement, personal interests, and ambition */}
          <p className="about__intro-sub-title">
            A little bit more about Yifei . Like anyone cares.
          </p>
          <p className="about__intro-text">
            Yifei's story isn't your typical tech tale. Coming from a chemistry
            background, he's taken his love for solving puzzles and put it to
            work in software development. It's not just about switching careers
            for him; it's about bringing that same enthusiasm for experiments
            from the lab to the laptop. Even though he's newer to coding, his
            approach is all about diving deep, figuring things out step by step,
            and building something cool in the end.
          </p>
          <p className="about__intro-text">
            Starting out, Yifei might not have a big collection of projects to
            show off, but what he lacks in portfolio pieces, he makes up for
            with a solid work ethic and a knack for picking up new tech. He's
            the kind of guy who sees a challenge, gets excited, and starts
            tinkering to find a solution.
          </p>
          <p className="about__intro-text">
            For Yifei, tech is more than just a job path; it's where he sees his
            future. He's all in on learning everything he can, not just to land
            any role but to find a place where he can keep growing, take on
            interesting projects, and really make his mark. He believes that
            understanding code is key to shaping the future, and he's determined
            to be part of that, blending his scientific mindset with his new
            tech skills to create something that makes a difference.
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
                  fontSize: logoObject.name === "resume" ? "1.2rem" : "1.35rem",
                  textWrap: logoObject.name === "resume" ? "wrap" : "nowrap",
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
