import React from "react";

const WishList = () => {
  const wishlist = [
    {
      title: "Item 1",
      description: "A delicious and savory dish with a hint of spice.",
      rating: 4.5,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Item 2",
      description: "Freshly prepared with vibrant flavors and textures.",
      rating: 4.0,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Item 3",
      description: "A classic choice with rich and hearty ingredients.",
      rating: 4.8,
      imageUrl: "https://via.placeholder.com/150",
    },
  ];
  const createStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating - fullStars;
    return (
      <div className="rating mb-2">
        {[...Array(fullStars)].map((_, i) => (
          <i key={`full-${i}`} className="fas fa-star"></i>
        ))}
        {halfStars > 0 && <i className="fas fa-star-half-alt"></i>}
      </div>
    );
  };
  return (
    <>
      <div>
        <h4>Your wishlist</h4>
        {wishlist.length === 0 && (
          <div>
            <p style={{ color: "red" }}>
              Your wishlist is empty. please add some dishes.
            </p>
          </div>
        )}
        <div className="wishlist-main-container d-flex flex-wrap justify-content-around">
          {wishlist.map((item,index) => {
            return (
              <div className="col mb-4" key={index} data-aos="zoom-in">
                <div
                  className="card menu-items-card"
                  style={{ position: "relative" }}
                >
                  <i
                    className="fa-regular fa-trash-can position-absolute text-danger"
                    style={{
                      right: "1rem",
                      top: "1rem",
                      cursor: "pointer",
                      zIndex: "1",
                    }}
                  ></i>
                  <img
                    src={item.imageUrl}
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-center">{item.description}</p>
                    {createStars(item.rating)}
                    <div className="d-flex align-items-center justify-content-around">
                      <button className="btn btn-success">+ Add to Cart</button>
                      <button className="btn btn-success">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WishList;
