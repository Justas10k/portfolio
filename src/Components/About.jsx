import "../Styles/About.css";
import flag from "../img/flag.png";
import aboutpicture from "../img/about3.webp";
const About = () => {
  return (
    <div className="about-content" id="about">
      <div className="con flex-box">
        <div className="about-img-side">
          <img src={aboutpicture} className="about-picture" />
        </div>

        <div className="text-side">
          <h3 className="small-text-h3">About me</h3>
          <h2>
            A dedicated Front-end Developer <br /> based in Kaunas, Lithuania{" "}
            <img className="bigflagimg" src={flag} />
          </h2>
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Bootstrap, SCSS MySql. I
            excel in designing and maintaining responsive websites that offer a
            smooth user experience. I leverage cutting-edge development tools
            and techniques to enhance the user experience. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
