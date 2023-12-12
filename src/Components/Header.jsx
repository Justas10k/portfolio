import "../Styles/Header.css";
import HandEmote from "../img/HandEmote.png";
import flag from "../img/flag.png";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Resume from "../Pdf/Justas_resume.pdf";

const Header = () => {
  const skillsList = [
    ["html", "css"],
    ["bootstrap", "sass"],
    ["js", "react"],
    ["nodejs", "mysql"],
  ];

  return (
    <>
      <header id="home">
        <div className="Portfolio-header con">
          <div className="box-text-image">
            <div className="header-text ">
              <div className="text-width">
                <h1 className="Header-text-h1">
                  Front-End React <br /> Developer{" "}
                  <img className="Handimg" src={HandEmote} />
                </h1>
                <p className="header-text-p">
                  Hi, I&apos;m Justas Stankevičius A passionate Front-end React
                  Developer based in Kaunas, Lithuania{" "}
                  <img className="flagimg" src={flag} />{" "}
                </p>
                <a href={Resume} download className="Resume-button">
                  Resume
                </a>

                <span className="icon">
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/justas-stankevicius-430119293/"
                  >
                    <IconBrandLinkedin
                      className="Header-icon"
                      size={32}
                      strokeWidth={2}
                    />
                  </a>
                  <a
                    className="p-3"
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Justas10k"
                  >
                    <IconBrandGithub
                      className="Header-icon"
                      size={32}
                      strokeWidth={2}
                    />
                  </a>
                </span>
              </div>
            </div>
            <div className="header-image">
              <div className="hero-img"></div>
            </div>
          </div>
        </div>
        <section className="d-flex skills con">
          <p className="Skills-line">Tech Stack</p>

          <ul className="skills-con">
            {skillsList.map((icons, index) => (
              <li className="skill-icon" key={index}>
                {icons.map((icon, subIndex) => (
                  <img
                    key={subIndex}
                    className="skill-img"
                    src={`https://skillicons.dev/icons?i=${icon}`}
                    alt="skill-icon"
                  />
                ))}
              </li>
            ))}
          </ul>
        </section>
      </header>
    </>
  );
};

export default Header;
