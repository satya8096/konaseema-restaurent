import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const foodCategories = [
    {
      name: "Pulihora",
      description: "A tangy and spicy  made with tamarind and spices.",
      image:
        "https://image.freepik.com/free-photo/delicious-indian-pulihora-rice_23-2148984397.jpg",
    },
    {
      name: "Pesarattu",
      description: "A green gram dosa served with chutney and sambar.",
      image:
        "https://image.freepik.com/free-photo/pesarattu-healthy-andhra-snack_23-2148423456.jpg",
    },
    {
      name: "Gongura Pachadi",
      description: "A traditional pickle made with sorrel leaves.",
      image:
        "https://image.freepik.com/free-photo/gongura-pachadi-spicy-andhra-pickle_23-2148984532.jpg",
    },
    {
      name: "Kodi Vepudu",
      description: "Spicy chicken fry that is a favorite in Andhra cuisine.",
      image:
        "https://image.freepik.com/free-photo/kodi-vepudu-spicy-andhra-chicken-fry_23-2148984493.jpg",
    },
    {
      name: "Royyala Iguru",
      description: "A flavorful prawn curry that is rich in spices.",
      image:
        "https://image.freepik.com/free-photo/royyala-iguru-spicy-prawn-curry_23-2148984512.jpg",
    },
    {
      name: "Andhra Chepala Pulusu",
      description: "A tangy fish curry made with tamarind and spices.",
      image:
        "https://image.freepik.com/free-photo/chepala-pulusu-andhra-fish-curry_23-2148984520.jpg",
    },
    {
      name: "Gutti Vankaya Koora",
      description: "Stuffed eggplant curry that is rich in flavor.",
      image:
        "https://image.freepik.com/free-photo/gutti-vankaya-koora-stuffed-eggplant-curry_23-2148984545.jpg",
    },
    {
      name: "Biryani",
      description:
        "A fragrant and flavorful rice dish cooked with spices and meat or vegetables.",
      image:
        "https://image.freepik.com/free-photo/biryani-rice-spicy-vegetable-pilaf-indian-recipe_23-2148977320.jpg",
    },
  ];

  const testimonials = [
    {
      userName: "John Doe",
      testimonial:
        "Absolutely loved the ambiance and the food was just divine! The service was top-notch and the menu had a variety of options for everyone. Highly recommend!",
      ratingStars: 5,
      signature: "John D.",
      carouselItemClass: "carousel-item active",
    },
    {
      userName: "Jane Smith",
      testimonial:
        "A wonderful dining experience. The staff was incredibly friendly and the dishes were bursting with flavor. Will definitely be coming back soon!",
      ratingStars: 4,
      signature: "Jane S.",
      carouselItemClass: "carousel-item",
    },
    {
      userName: "Michael Brown",
      testimonial:
        "The best restaurant in town! The food was amazing and the service was quick. The desserts are a must-try. Great place for a family dinner.",
      ratingStars: 5,
      signature: "Michael B.",
      carouselItemClass: "carousel-item",
    },
    {
      userName: "Emily Johnson",
      testimonial:
        "Had a fantastic time here. The vegan options were delicious and the portions were generous. The staff made us feel very welcome. Highly recommend this place!",
      ratingStars: 5,
      signature: "Emily J.",
      carouselItemClass: "carousel-item",
    },
    {
      userName: "David Wilson",
      testimonial:
        "A great spot for a casual meal. The atmosphere was relaxing and the food was delicious. The prices are reasonable too. Would definitely visit again.",
      ratingStars: 4,
      signature: "David W.",
      carouselItemClass: "carousel-item",
    },
  ];


  const discountImages = [
    "https://img.freepik.com/free-psd/food-template-design_23-2150361540.jpg",
    "https://img.freepik.com/free-psd/delicious-food-restaurant-facebook-template_23-2150095152.jpg",
    "https://img.freepik.com/free-vector/hand-drawn-brazilian-restaurant-sale-banner_23-2149691169.jpg",
    "https://img.freepik.com/free-psd/flat-design-banner-food-template_23-2149237574.jpg",
    "https://img.freepik.com/free-vector/flat-design-food-banner-template_23-2149076251.jpg",
    "https://img.freepik.com/free-vector/flat-food-sale-horizontal-banner-template_23-2149091701.jpg",
    "https://img.freepik.com/free-vector/flat-design-fast-food-sale-banner_23-2149165450.jpg",
    "https://img.freepik.com/free-vector/hand-drawn-indian-restaurant-discount-facebook-template_23-2149505013.jpg",
    "https://img.freepik.com/free-vector/flat-design-healthy-food-facebook-template_23-2149076245.jpg",
    "https://img.freepik.com/free-vector/hand-drawn-food-template-design_23-2150957884.jpg",
  ];

  const SocialIcon = ({ link, iconClass }) => (
    <a
      href={link}
      className="me-2"
      aria-label={iconClass.split(" ")[1].replace("fa-", "")}
    >
      <i className={iconClass}></i>
    </a>
  );

  const Feature = ({ icon, title, description, classnames }) => (
    <div className={`col-md-4 text-center py-5 feature ${classnames}`}>
      <i className={`${icon} fa-3x mb-3 text-info`}></i>
      <h3 className="text-warning">{title}</h3>
      <p>{description}</p>
    </div>
  );

  const Card = ({ item }) => (
    <div className="card text-center bg-transparent border-0">
      <img
        src={item.image}
        className="card-img-top mx-auto d-block"
        alt={item.name}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <a
          href="/"
          className="btn btn-transparent border border-primary text-primary"
        >
          Order Now <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );

  const DiscountImage = ({ src }) => (
    <a href="/" className="col-6">
      <img src={src} alt="Discount" className="w-100" />
    </a>
  );

  const createStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating - fullStars;
    return (
      <div className="rating mb-2">
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="fas fa-star text-warning m-1"></i>
        ))}
        {halfStars > 0 && (
          <i className="fas fa-star-half-alt text-warning m-1"></i>
        )}
      </div>
    );
  };

  return (
    <div>
      <section
        id="main-section"
        className="d-flex align-items-center justify-content-around flex-wrap"
      >
        <div className="home-main-container-1 text-white d-flex align-items-center justify-content-center flex-column">
          <img src={"/Images/Logo.png"} className="home-logo" alt="logo" />
          <h1 className="home-main-heading text-warning">
            Delight in Every Bite
          </h1>
          <p className="text-center">
            Experience the finest culinary delights and impeccable service.
          </p>
          <div className="social-icons mb-3 mt-0">
            <SocialIcon link="/" iconClass="fab fa-facebook-f" />
            <SocialIcon link="/" iconClass="fab fa-twitter" />
            <SocialIcon link="/" iconClass="fab fa-instagram" />
            <SocialIcon link="/" iconClass="fab fa-linkedin-in" />
          </div>
          <Link className="home-explore-btn text-decoration-none" to={"/menu"}>
            Explore Menu <i className="fa-solid fa-angles-right"></i>
          </Link>
        </div>
        <div className="home-main-container-img text-center">
          <img
            src="https://themewagon.github.io/restoran/img/hero.png"
            alt="Delight in Every Bite"
          />
        </div>
      </section>
      <section id="features" className="container-fluid py-3">
        <div className="row">
          <Feature
            icon="fas fa-shipping-fast"
            title="Fast Delivery"
            description="Our efficient delivery system ensures your food arrives hot and fresh, right at your doorstep."
            classnames={"fast-delivery"}
          />
          <Feature
            icon="fas fa-leaf"
            title="Fresh Food"
            description="We use only the freshest ingredients to prepare your meals, guaranteeing a delightful dining experience."
            classnames={"fresh-food"}
          />
          <Feature
            icon="fas fa-truck"
            title="Free Delivery"
            description="Enjoy our delicious food with the added benefit of free delivery on all orders above a certain amount."
            classnames={"free-delivery "}
          />
        </div>
      </section>
      <div className="food-categories-heading-container d-flex justify-content-between align-items-center flex-wrap text-center">
        <div>
          <h2>
            Best <span className="text-danger">Delivered</span> <br />{" "}
            Categories
          </h2>
        </div>
        <div>
          <p>
            Here Are Some of Our Best Distributed Categories. If You Want You
            Order From Here.
          </p>
        </div>
      </div>
      <div className="food-categories-main-section-1 d-flex justify-content-around gap-3 flex-wrap pt-5">
        {foodCategories.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
      <div className="pt-5 pb-5 ps-4">
        <h2>Top Discounts</h2>
      </div>
      <div className="d-flex flex-wrap">
        {discountImages.map((src, index) => (
          <DiscountImage key={index} src={src} />
        ))}
      </div>
      <div
        className="testimonials-container"
      >
        <h3 className="text-center m-2">Happy Customers</h3>
        <p className="text-center">We Believe In Customer Satisfaction. Here Are Some Testimonials By Our Worthy Customers</p>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {
              testimonials.map((each,index)=>{
                return (
                  <div className={each.carouselItemClass}data-bs-interval="4000" key={index}>
                    <img
                      src="https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-72292.jpg?ga=GA1.1.204144841.1709562046&semt=ais_hybrid"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption">
                      <i
                        className="fa-solid fa-circle-user text-warning"
                        style={{ fontSize: "4rem",margin:"0.6rem" }}
                      ></i>
                      <h5>{each.userName}</h5>
                      <div>
                       {createStars(each.ratingStars)}
                      </div>
                      <p className="text-center">
                        {each.testimonial}
                      </p>
                      <p className="text-center">{each.signature}</p>
                    </div>
                  </div>
                );
              })
            }
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
