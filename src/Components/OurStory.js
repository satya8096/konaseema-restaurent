import React, { useState } from "react";
import { Error, Success } from "../Utils/ToastifyContainerHandler";
import { ToastContainer } from "react-toastify";
import axios from "axios";
const OurStory = () => {
  const [bookTable, setBookTable] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });
  const cheffs = [
    {
      name: "Chef John Doe",
      role: "Head Chef",
      email: "john@example.com",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "John has over 15 years of experience in the culinary industry, specializing in fusion cuisine. His innovative approach and passion for food have made him a beloved figure in our kitchen.",
    },
    {
      name: "Chef Maria Smith",
      role: "Sous Chef",
      email: "maria@example.com",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "Maria is a culinary expert with a focus on modern European cuisine. Her creativity and attention to detail ensure that every dish is a work of art.",
    },
    {
      name: "Chef David Brown",
      role: "Pastry Chef",
      email: "david@example.com",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "David's expertise in pastries and desserts is unmatched. His creations are not only delicious but also visually stunning, making them a highlight of our menu.",
    },
    {
      name: "Chef Lisa White",
      role: "Grill Chef",
      email: "lisa@example.com",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "Lisa is a master of the grill, known for her perfectly cooked steaks and barbecue dishes. Her expertise adds a smoky flavor to our menu that is hard to resist.",
    },
    {
      name: "Chef Michael Green",
      role: "Seafood Chef",
      email: "michael@example.com",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "Michael's knowledge of seafood and his ability to bring out its natural flavors make him a valuable member of our team. His dishes are fresh, vibrant, and delicious.",
    },
    {
      name: "Chef Sarah Blue",
      role: "Vegetarian Chef",
      email: "sarah@example.com",
      imgSrc: "https://via.placeholder.com/150",
      description:
        "Sarah's passion for vegetarian cuisine is evident in every dish she creates. Her innovative recipes and use of fresh ingredients make our vegetarian options stand out.",
    },
  ];

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      !bookTable.name ||
      !bookTable.date ||
      !bookTable.email ||
      !bookTable.guests ||
      !bookTable.phone ||
      !bookTable.time
    ) {
      return Error("Please Provide All Fields !");
    }

    const response = await axios.post(
      "http://localhost:4000/api/v1/konaseema/table-bookings",
      {
        ...bookTable,
      }
    );
    if (response.data.status === "Success") {
      Success("Booked a Table Successfully !");
      setBookTable({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
      });
    } else {
      Error(response.data.message);
    }
  };

  const onChangeHandler = (e) => {
    setBookTable({ ...bookTable, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="story-section">
        <div className="story-section-overlay">
          <img
            src={"/Images/Logo.png"}
            className="home-logo"
            data-aos="fade-up"
            alt="logo"
          />
          <h1 className="our-story-title text-center" data-aos="fade-right">
            Our Story
          </h1>
          <p className="our-story-slogan text-center" data-aos="fade-up">
            "Crafting Memories Through Culinary Excellence"
          </p>
        </div>
      </section>

      <section className="about-restaurant d-flex align-items-center justify-content-around flex-wrap flex-row-reverse overflow-hidden">
        <div className="about-restaurant-content" data-aos="fade-left">
          <h5 className="about-section-title">About Our Restaurant</h5>
          <h1>We Provide Good Food For Your Family!</h1>
          <p className="about-section-content">
            Nestled in the heart of the city, our restaurant has become a
            cornerstone for those seeking an extraordinary dining experience.
            Established with the vision of bringing together the finest
            ingredients and the most innovative culinary techniques, our
            restaurant offers a haven for food enthusiasts.
            <br />
            <br />
            Our chefs are dedicated to creating dishes that not only delight the
            palate but also tell a story of tradition, creativity, and passion.
            Each plate is a masterpiece, meticulously crafted to ensure that
            every bite is a burst of flavor and a feast for the senses. From the
            warm ambiance to the impeccable service, we strive to provide an
            experience that is unparalleled and unforgettable.
          </p>
        </div>
        <div className="about-restaurant-img" data-aos="fade-right">
          <img
            src="https://img.freepik.com/free-photo/top-view-pakistan-meal-assortment_23-2148821514.jpg?t=st=1721958225~exp=1721961825~hmac=73e845ca72dfbd26d5d1c36d41f5c77e306dbcd4633a90c6535bde91e87be634&w=360"
            alt="Restaurant"
          />
        </div>
      </section>

      <section className="how-we-started d-flex align-items-center justify-content-around flex-wrap overflow-hidden">
        <div className="how-we-started-content" data-aos="fade-right">
          <h1 className="how-we-started-section-title">How We Started</h1>
          <p className="how-we-started-section-content">
            Our journey began in a small, bustling kitchen where a love for
            cooking and a passion for perfection came together. With a few
            family recipes and a dream, we set out to create a restaurant that
            would not only serve food but also create memories.
            <br />
            <br />
            Over the years, we have grown from a small eatery to a renowned
            dining destination, known for our commitment to quality and our
            innovative approach to traditional cuisine. Our success is a
            testament to the hard work and dedication of our team, who have
            worked tirelessly to bring our vision to life. We believe that food
            has the power to bring people together, and it is this belief that
            continues to drive us forward.
          </p>
        </div>
        <div className="how-we-started-img" data-aos="fade-left">
          <img
            src="https://img.freepik.com/free-photo/delicious-smoke-cooked-food_23-2151259767.jpg?t=st=1721959095~exp=1721962695~hmac=8447b5dc4058ba7184a0f2babd80a90824ced73eea25ffb709fbd3e7f22bb434&w=360"
            alt="Journey"
          />
        </div>
      </section>

      <section className="book-table-section overflow-hidden" id="book-table">
        <h1
          className="book-table-section-title text-white"
          data-aos="fade-down"
        >
          Book a Table
        </h1>
        <p
          className="book-table-section-description text-white"
          data-aos="fade-up"
        >
          Reserve a table at our restaurant and enjoy an exquisite dining
          experience. Fill out the form below to book your table now.
        </p>
        <div className="book-table-form-container" data-aos="zoom-in">
          <form className="booking-form" onSubmit={submitHandler}>
            <p className="text-center" style={{ fontSize: "1.4rem" }}>
              <i className="fa-solid fa-quote-left"></i> Reserve Your Spot for
              an Unforgettable Dining Experience!{" "}
              <i className="fa-solid fa-quote-right"></i>
            </p>
            <div className="book-table-form-group">
              <label htmlFor="name">
                Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                value={bookTable.name}
                onChange={onChangeHandler}
              />
            </div>
            <div className="book-table-form-group">
              <label htmlFor="email">
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={bookTable.email}
                onChange={onChangeHandler}
              />
            </div>
            <div className="book-table-form-group">
              <label htmlFor="phone">
                Phone <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={bookTable.phone}
                onChange={onChangeHandler}
              />
            </div>
            <div className="book-table-form-group">
              <label htmlFor="date">
                Date <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={bookTable.date}
                onChange={onChangeHandler}
              />
            </div>
            <div className="book-table-form-group">
              <label htmlFor="time">
                Time <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={bookTable.time}
                onChange={onChangeHandler}
              />
            </div>
            <div className="book-table-form-group">
              <label htmlFor="guests">
                Number of Guests <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                placeholder="Enter Number of Guests"
                value={bookTable.guests}
                onChange={onChangeHandler}
              />
            </div>
            <button type="submit" className="book-table-submit-btn w-100">
              Book Now
            </button>
          </form>
        </div>
      </section>

      <section className="our-chefs overflow-hidden">
        <h5 className="text-center" data-aos="fade-right">
          Team Members
        </h5>
        <h1 className="section-title text-center" data-aos="fade-left">
          Our Master Chefs
        </h1>
        <div className="chefs-grid">
          {cheffs.map((chef, index) => (
            <div
              className="chef-card"
              key={index}
              data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
            >
              <img
                src={chef.imgSrc}
                alt={`Chef ${index + 1}`}
                className="chef-img"
              />
              <h2 className="text-center">{chef.name}</h2>
              <p className="text-center">{chef.role}</p>
              <p>Email: {chef.email}</p>
              <p>{chef.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-owner text-center overflow-hidden">
        <h1 className="about-owner-section-title" data-aos="fade-right">
          About the Owner
        </h1>
        <p className="about-owner-section-content" data-aos="zoom-in">
          Jane Doe, the visionary behind our restaurant, is a culinary maestro
          with over two decades of experience. Her journey in the culinary world
          began at a young age, inspired by the rich flavors and aromas of her
          family's kitchen.
          <br />
          <br />
          Jane's dedication to her craft and her relentless pursuit of
          excellence have earned her a reputation as one of the finest chefs in
          the industry. Her innovative approach to cooking, combined with her
          deep respect for tradition, has shaped the unique identity of our
          restaurant. Jane's leadership and passion are the driving forces
          behind our success, and her commitment to quality and creativity
          continues to inspire our team every day.
        </p>
        <img
          src="https://via.placeholder.com/300x300"
          alt="Owner"
          className="responsive-img owner-img"
          data-aos="fade-left"
        />
      </section>
      <ToastContainer />
    </>
  );
};

export default OurStory;
