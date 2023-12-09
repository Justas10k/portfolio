import { useState, useEffect } from "react";

import "../Styles/Navbar.css";

const Navbar = () => {
  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`porfolio-nav ${scrolling ? "scrolled" : ""}`}>
      <div className=" logo-con">
        <a className="Navlink logo " href="#home">
          Justas.dev
        </a>
      </div>

      <div className="d-none d-lg-block nav-links-con">
        <ul className="navLinks">
          {navlinks.map((item, index) => (
            <li key={index}>
              <a className="Navlink" href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="d-lg-none navLinks">
        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </button>

        <div className={`mobile-nav ${isOpen ? "active" : ""}`}>
          <div className="slide-links">
            <ul>
              {navlinks.map((item, index) => (
                <li key={index}>
                  <a className="nav-toggle-link" href={item.link}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
