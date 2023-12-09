import "../Styles/Projects.css";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";
import PropTypes from "prop-types";

function Probox({
  title,
  img,
  description,
  techno1,
  techno2,
  code,
  demo,
  scrollY,
  cName,
  icon,
  date,
}) {
  const [scroll, setScroll] = useState(false);
  return (
    <>
      <div className={`pro pro__1 ${cName}`}>
        <div className="pro__img">
          <a target="_blank" href={demo} rel="noreferrer">
            <img
              src={img}
              alt="website"
              style={{
                transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
                transition: "transform 10s ease-in-out",
              }}
              onMouseEnter={() => setScroll(true)}
              onMouseLeave={() => setScroll(false)}
            />
          </a>
        </div>
        <div className="pro__text">
          <h3>
            {title} <span className="date-class">{date}</span> {icon}
          </h3>
          <p className="discription">{description}</p>
          <div className="stack">
            <p>{techno1}</p>
            <p>{techno2}</p>
          </div>
          <div className="links">
            <a target="_blank" href={code} rel="noreferrer">
              Code <IconBrandGithub />
            </a>
            <a target="_blank" href={demo} rel="noreferrer">
              Live Demo
              <IconExternalLink />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// Prototypes
Probox.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techno1: PropTypes.string.isRequired,
  techno2: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  scrollY: PropTypes.string.isRequired,
  cName: PropTypes.string,
  icon: PropTypes.string.isRequired,
};
export default Probox;
