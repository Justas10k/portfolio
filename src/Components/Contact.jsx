import "../Styles/Contact.css";
import { IconMap2, IconMailFilled } from "@tabler/icons-react";
function Contact() {
  return (
    <section className="contact bg-white" id="contact">
      <div className="con">
        <h3 className="small-text-h3">Contact</h3>
        <h2 className="fw-600">Dont be shy! Hit me up! 👇</h2>
        <div className="location-mail">
          <div className="circle-text">
            <div className="circle">
              <IconMap2 className="contact-icon" />
            </div>
            <div className="contact-text-container">
              <h5 className="contact-h5-text">Location</h5>
              <a href="#" className="contact-link">
                Kaunas, Lithuania
              </a>
            </div>
          </div>
          <div className="circle-text">
            <div className="circle">
              <IconMailFilled className="contact-icon" />
            </div>
            <div className="contact-text-container">
              <h5 className="contact-h5-text">Email</h5>
              <a
                href="mailto:justasstankevicius2004@gmail.com"
                className="contact-link"
              >
                justasstankevicius2004@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
