import "../Styles/About.css";
import flag from "../img/flag.png";
import AboutGif from "../img/AboutGif.gif";
const About = () => {
  return (
    <div className="about-content" id="about">
      <div className="con flex-box">
        <div className="about-img-side">
          <img src={AboutGif} className="about-picture" />
        </div>

        <div className="text-side">
          <h3 className="small-text-h3">About me</h3>
          <h2>
            A dedicated Front-end Developer based in Kaunas, Lithuania{" "}
            <img className="bigflagimg" src={flag} />
          </h2>
          <p>
            I&apos;m a passionate Front-end Developer 🚀 with a strong focus on
            writing clean, readable code and solving hard problems. I
            love programming for the endless possibilities it offers and the
            financial rewards it brings 💻💡💰.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
