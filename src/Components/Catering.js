import React, { useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Catering = () => {
  const [counterOn, setCounterOn] = useState(false);

  const ServiceItem = ({ title, description }) => (
    <div className="catering-service" data-aos="zoom-in">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );

  const CateringType = ({ icon, title }) => (
    <div className="catering-type" data-aos="zoom-in">
      <div className="event-icon-container">
        <i className={icon + " event-icon"}></i>
      </div>
      <h3>{title}</h3>
    </div>
  );

  const StatItem = ({ icon, target, title }) => (
    <div className="stat-item" data-target={target} data-aos="zoom-in">
      <i className={icon + " stat-icon"}></i>
      <div className="stat-number" data-number="0">
        <p className="text-center" style={{ fontSize: "3rem" }}>
          {counterOn && (
            <CountUp
              start={0}
              end={target}
              delay={0}
              duration={5}
              style={{ fontSize: "2rem", fontWeight: "600" }}
            />
          )}
          +{!counterOn && 0}
        </p>
      </div>
      <h2 className="stat-title">{title}</h2>
    </div>
  );

  return (
    <div className="catering-main-container overflow-hidden">
      <section className="catering-main-sub-container text-center">
        <h1 data-aos="fade-right">Best Catering Services</h1>
        <h2 data-aos="fade-left">Welcome to the Catering Services</h2>
        <button className="catering-book-a-slot" data-aos="zoom-in">
          Read More <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </section>

      <section className="catering-services-list d-flex align-items-center justify-content-center">
        <div className="catering-services-sub m-auto d-flex flex-wrap align-items-center justify-content-around">
          <div className="catering-services-left">
            <h6 data-aos="fade-right">We Provide Services</h6>
            <h2 data-aos="fade-left">Our Services</h2>
            <p data-aos="zoom-in">
              Te obtinuit ut adepto satis somno. Aliisque institoribus iter
              deliciae vivet vita. Nam exempli gratia, quotiens ego vadam ad
              diversorum peregrinorum Nam exempli gratia, quotiens ego vadam ad
              diversorum peregrinorum.
            </p>
            <Link
              className="catering-book-a-slot text-decoration-none"
              data-aos="fade-up"
            >
              Book a Slot
            </Link>
          </div>
          <div className="catering-services-right d-flex flex-wrap align-items-center justify-content-around flex-column">
            <ServiceItem
              title="Awesome Catering"
              description="Te obtinuit ut adepto satis somno. Aliisque institoribus iter deliciae."
            />
            <ServiceItem
              title="Special Event"
              description="Te obtinuit ut adepto satis somno. Aliisque institoribus iter deliciae."
            />
            <ServiceItem
              title="24/7 Services"
              description="Te obtinuit ut adepto satis somno. Aliisque institoribus iter deliciae."
            />
          </div>
        </div>
      </section>

      <section className="catering-about-us-container d-flex flex-wrap align-items-center justify-content-around">
        <div
          className="catering-about-us-img text-center"
          data-aos="fade-right"
        >
          <img
            src="https://img.freepik.com/free-photo/medium-shot-cartoonish-man-with-burger_23-2151033840.jpg?size=626&ext=jpg&ga=GA1.1.204144841.1709562046&semt=ais_hybrid"
            alt="Chef in kitchen"
            loading="lazy"
          />
        </div>
        <div className="catering-about-us-content" data-aos="fade-left">
          <h3>Welcome to the Catering Services</h3>
          <h1>BEST ABOUT US</h1>
          <p>
            Te obtinuit ut adepto satis somno. Aliisque institoribus iter
            deliciae vivet vita. Nam exempli gratia, quotiens ego vadam ad
            diversorum peregrinorum Nam exempli gratia, quotiens ego vadam ad
            diversorum peregrinorum.
          </p>
          <p>k Satyanarayana</p>
          <button className="glow-on-hover">View all About Us</button>
        </div>
      </section>

      <section className="catering-types-main-container text-center">
        <h2 data-aos="fade-right">Types of Caterings</h2>
        <h1 data-aos="fade-left">Our Category</h1>
        <div className="catering-types-container d-flex flex-wrap align-items-center justify-content-around pt-3">
          <CateringType icon="fas fa-ring" title="Weddings" />
          <CateringType icon="fas fa-briefcase" title="Corporate Events" />
          <CateringType icon="fas fa-user-lock" title="Private Functions" />
          <CateringType icon="fas fa-user" title="Individual" />
          <CateringType icon="fas fa-birthday-cake" title="Birthday Events" />
        </div>
      </section>

      <ScrollTrigger
        onEnter={() => {
          setCounterOn(true);
        }}
        onExit={() => {
          setCounterOn(false);
        }}
      >
        <section className="stats-section">
          <h2 className="p-4">Our Achievements</h2>
          <div className="stats-container">
            <StatItem
              icon="fas fa-users"
              target="100"
              title="Qualified Staff"
            />
            <StatItem icon="fas fa-smile" target="1500" title="Happy Clients" />
            <StatItem
              icon="fas fa-calendar-check"
              target="200"
              title="Events Served"
            />
            <StatItem icon="fas fa-trophy" target="30" title="Awards" />
            <StatItem icon="fas fa-star" target="5" title="Ranking" />
          </div>
        </section>
      </ScrollTrigger>
    </div>
  );
};

export default Catering;
