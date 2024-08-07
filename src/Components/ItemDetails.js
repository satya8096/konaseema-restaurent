import React from "react";
import { Link } from "react-router-dom";
const ItemDetails = () => {
  const product = [
    {
      name: "Classic Fried Chicken",
      description:
        "Crispy, golden-brown fried chicken with savory spices, served with coleslaw and fries.",
      rating: 4.5,
      price: 999, // Price in Indian Rupees (INR)
      reviews: [
        {
          user: "Alice",
          comment: "Delicious and perfectly crispy! A classic favorite.",
        },
        {
          user: "Bob",
          comment: "Good flavor, but a bit greasy for my taste.",
        },
        { user: "Charlie", comment: "The best fried chicken I've ever had!" },
        {
          user: "Diana",
          comment: "Nice and crunchy, but could use more seasoning.",
        },
        { user: "Evan", comment: "Great with the coleslaw and fries!" },
      ],
      image: "https://example.com/images/classic-fried-chicken.jpg",
      orderDeliveryTime: "45 minutes",
    },
  ];

  return (
    <>
      <div className="menu-item-details-container overflow-hidden">
        <Link
          className="btn btn-primary mb-3 ms-2"
          to={"/menu"}
          data-aos="fade-left"
        >
          <i className="fa-solid fa-angles-left"></i> Back To Menu
        </Link>
        <h2
          className="text-center border border-bottom border-warning"
          data-aos="fade-down"
        >
          Item Details
        </h2>
        <div className="item-datails-container d-flex justify-content-center flex-wrap">
          <div className="item-img" data-aos="zoom-in">
            <img
              src="https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151431678.jpg?t=st=1722226596~exp=1722230196~hmac=3b6947bb68ae799970772deebec85d98caab50eb97bd432c969485ed6f2598e3&w=996"
              alt="img"
              width={"100%"}
            />
          </div>
          <div className="item-details" data-aos="fade-left">
            <h4>Chicken Pakodi</h4>
            <p>
              Deep-fried savory snack, made from urad dal, onions and spices
              batter, served with chutney.
            </p>
            <p>Rs. 40/-</p>
            <p>
              <i className="fa-solid fa-star"></i> 4.5 (56)
            </p>
            <div className="item-details-btns">
              <button className="btn btn-success">+ Add to Cart</button>
              <button className="btn btn-warning">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="reviews-container d-flex justify-content-around mt-5 flex-wrap gap-4">
          <div className="post-review" data-aos="fade-right">
            <h3>Add Your Review</h3>
            <form>
              <label className="mt-3">Name</label>
              <input
                type="text"
                placeholder="Your Name..."
                name="name"
                className="form-control"
              />
              <label className="mt-3">Rating</label>
              <input
                type="number"
                className="form-control"
                placeholder="Your Rating, Eg : 4 or 4.5 or 5"
              />
              <label className="mt-3">Comment</label>
              <textarea
                placeholder="YourComment..."
                className="form-control"
              ></textarea>
              <button className="btn btn-info mt-3">
                <i className="fa-solid fa-paper-plane"></i> Post
              </button>
            </form>
          </div>
          <div className="comments-container" data-aos="fade-left">
            <div>
              <h5>
                Overal Rating (
                <i
                  className="fa-solid fa-star"
                  style={{ color: "seagreen" }}
                ></i>{" "}
                4.5 / 5)
              </h5>
              <p>Total Reviews - 68 </p>
            </div>
            <hr></hr>
            <h5>All Comments</h5>
            {product[0].reviews.map((item, index) => {
              return (
                <div className="review" key={index}>
                  <p className="d-flex gap-2 align-items-center">
                    {index + 1}.
                    <i
                      className="fa-solid fa-circle-user text-warning"
                      style={{ fontSize: "1.8rem" }}
                    ></i>
                    {item.user}
                  </p>
                  <p>{item.comment}</p>
                  <hr></hr>
                </div>
              );
            })}
            <div aria-label="..." data-aos="zoom-in">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link" href="v">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="v">
                    1
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="v">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="v">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="v">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
