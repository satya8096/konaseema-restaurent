import React from "react";
const Footer = () => {

  const FooterSection = ({ title, content }) => (
    <div className="col-md-3 mb-4 text-white">
      <h5 className="pb-2 text-white">{title}</h5>
      {content}
    </div>
  );

  const SocialIcon = ({ link, iconClass }) => (
    <a
      href={link}
      className="me-2"
      aria-label={iconClass.split(" ")[1].replace("fa-", "")}
    >
      <i className={iconClass}></i>
    </a>
  );

  const FooterLink = ({ link, text }) => (
    <li className="footer-links">
      <a href={link} className="text-white">
        <i className="fa-solid fa-angles-right"></i>{" "}
        {text}
      </a>
    </li>
  );

  const ContactInfo = ({ iconClass, text }) => (
    <tr>
      <td className="pe-3">
        <i className={iconClass}></i>{" "}
      </td>
      <td className="text-left"> {text}</td>
    </tr>
  );


  return (
    <footer className="bg-light-pink text-dark py-5">
      <div className="container">
        <div className="row">
          <FooterSection
            title="KonaseemaRuchulu"
            content={
              <>
                <p className="text-start">The finest culinary delights delivered to your doorstep.</p>
                <div className="social-icons">
                  <SocialIcon link="/" iconClass="fab fa-facebook-f" />
                  <SocialIcon link="/" iconClass="fab fa-twitter" />
                  <SocialIcon link="/" iconClass="fab fa-instagram" />
                  <SocialIcon link="/" iconClass="fab fa-linkedin-in" />
                </div>
              </>
            }
          />
          <FooterSection
            title="Menu"
            content={
              <ul className="list-unstyled">
                <FooterLink link="/" text="Home" />
                <FooterLink link="/" text="Offers" />
                <FooterLink link="/" text="Services" />
                <FooterLink link="/" text="About Us" />
              </ul>
            }
          />
          <FooterSection
            title="Information"
            content={
              <ul className="list-unstyled">
                <FooterLink link="/" text="Menu" />
                <FooterLink link="/" text="Quality" />
                <FooterLink link="/" text="Fast Delivery" />
                <FooterLink link="/" text="Make a Choice" />
              </ul>
            }
          />
          <FooterSection
            title="Contact Information"
            content={
              <table className="list-unstyled">
                <tbody>
                  <ContactInfo
                    iconClass="fas fa-phone-alt"
                    text="+1 (123) 456-7890"
                  />
                  <ContactInfo
                    iconClass="fas fa-envelope"
                    text="info@homelyfood.com"
                  />
                  <ContactInfo
                    iconClass="fas fa-globe"
                    text="www.homelyfood.com"
                  />
                  <ContactInfo
                    iconClass="fas fa-map-marker-alt"
                    text="1234 Culinary Lane, Food City"
                  />
                </tbody>
              </table>
            }
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
