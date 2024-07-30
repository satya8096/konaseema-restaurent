import React from "react";
const Contact = () => {
  return (
    <div>
      <section className="contact-section-main-container">
        <h1 className="section-title" data-aos="fade-down">
          Contact Us
        </h1>
        <p className="section-description">
          We would love to hear from you! Feel free to reach out to us through
          any of the following ways:
        </p>
      </section>
      <section className="opening-times-section" id="opening-times">
        <h1 className="opening-time-section-title" data-aos="fade-down">
          Our Opening Times
        </h1>
        <p
          className="opening-time-section-description text-center"
          data-aos="fade-up"
        >
          We welcome you to our restaurant all week long. Below are our opening
          times:
        </p>
        <table className="timings-table">
          <tbody>
            <tr>
              <th>S. No</th>
              <th>Day</th>
              <th>Timimngs</th>
            </tr>
            {[
              { day: "Monday", time: "9:00 AM - 10:00 PM" },
              { day: "Tuesday", time: "9:00 AM - 10:00 PM" },
              { day: "Wednesday", time: "9:00 AM - 10:00 PM" },
              { day: "Thursday", time: "9:00 AM - 10:00 PM" },
              { day: "Friday", time: "9:00 AM - 11:00 PM" },
              { day: "Saturday", time: "10:00 AM - 11:00 PM" },
              { day: "Sunday", time: "10:00 AM - 10:00 PM" },
            ].map((item, index) => (
              <tr className="" data-aos-delay={`${index * 100}`} key={index}>
                <td>{index + 1}.</td>
                <td className="day-title">
                  {item.day}
                </td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <h1 className="text-center pt-5 pb-2">Get in Touch</h1>
      <section className="contact-details-section d-flex justify-content-around flex-wrap gap-5">
        <div className="contact-form">
          <form>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label htmlFor="country">Country</label>
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "200px" }}
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="contact-content d-flex flex-column">
          <div className="d-flex justify-content-center flex-wrap">
            <div>
              <i className="fa-solid fa-house-chimney"></i>
            </div>
            <div className="contact-content-sub">
              <p>
                Katrenikona, Katrenikona Mandal, Konaseema District, AP, 533212.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center flex-wrap">
            <div>
              <i className="fa-solid fa-square-phone"></i>
            </div>
            <div className="contact-content-sub">
              <p>+91 8096334401</p>
              <p>Mon - Sat 9am - 6pm</p>
            </div>
          </div>
          <div className="d-flex justify-content-center flex-wrap">
            <div>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="contact-content-sub">
              <p>info@homelyfood.com</p>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-maps-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7647.819765547924!2d82.15015056148944!3d16.58104318643609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37f764f38ce33f%3A0xf67c9fb26d6cc975!2sKatrenikona%2C%20Andhra%20Pradesh%20533212!5e0!3m2!1sen!2sin!4v1721965059683!5m2!1sen!2sin"
          width="600"
          height="450"
          title="map"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
