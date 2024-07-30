import React, { useState, useMemo } from "react";

// Sample data for menu items
const menuItems = [
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
  {
    title: "Item 4",
    description: "A creamy and indulgent dish that will satisfy your cravings.",
    rating: 4.2,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 5",
    description: "A flavorful option with a perfect blend of spices.",
    rating: 4.7,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 6",
    description: "A light and refreshing dish that's perfect for any meal.",
    rating: 4.3,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 7",
    description:
      "Rich and satisfying with a unique twist on traditional flavors.",
    rating: 4.6,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 8",
    description: "A savory delight that's both hearty and flavorful.",
    rating: 4.1,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 9",
    description: "Rich and creamy with a touch of elegance.",
    rating: 4.5,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 10",
    description: "A delightful treat with an exquisite taste.",
    rating: 4.4,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 11",
    description: "A robust and satisfying option with rich flavors.",
    rating: 4.7,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 12",
    description: "A vibrant and flavorful choice that delights the palate.",
    rating: 4.3,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 13",
    description: "A delectable choice with an irresistible taste.",
    rating: 4.6,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 14",
    description: "A mouth-watering option with a rich blend of spices.",
    rating: 4.2,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 15",
    description: "A classic choice with a savory and satisfying flavor.",
    rating: 4.5,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 16",
    description: "A rich and flavorful dish that’s sure to satisfy.",
    rating: 4.4,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 17",
    description: "A flavorful dish with a delicate balance of spices.",
    rating: 4.3,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 18",
    description: "A hearty dish with a blend of robust flavors.",
    rating: 4.6,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 19",
    description: "An exquisite choice with a touch of elegance.",
    rating: 4.5,
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Item 20",
    description: "A delicious option that combines rich flavors.",
    rating: 4.7,
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

const MenuItem = ({ item }) => (
    <div className="card menu-items-card">
      <img src={item.imageUrl} className="card-img-top" alt={item.title} />
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
);

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter items based on search query
  const filteredItems = useMemo(
    () =>
      menuItems.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  return (
    <>
      <div className="main-menu-container">
        <div className="search-bar-menu">
          <div className="container">
            <h2 className="text-center mb-2">Explore Our Menu</h2>
            <h6 className="text-center mb-5">
              Some Trendy And Popular Courses Offered
            </h6>
            <div className="row mb-4">
              <div className="col-md-8 offset-md-2">
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search for dishes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="btn  bg-danger text-white" type="button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="category-filter-container d-flex justify-content-around flex-wrap">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="category-filter-card text-center" key={index}>
              <img src="https://via.placeholder.com/150" alt="category" />
              <h6>Dish Name</h6>
            </div>
          ))}
        </div>
        <h4 className="ms-5 mt-5">Top Dishes Near You</h4>
        <div className="items-container d-flex align-items-center justify-content-around flex-wrap">
          {menuItems.length === 0 && (
            <div
              className="text-danger"
              style={{ fontSize: "1.2rem", fontWeight: "600" }}
            >
              Something went wrong !
            </div>
          )}
          {filteredItems.length !== 0
            ? filteredItems.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))
            : menuItems.length !== 0 && (
                <div
                  className="text-danger"
                  style={{ fontSize: "1.2rem", fontWeight: "600" }}
                >
                  Search "{searchQuery}" Results Not Found
                </div>
              )}
        </div>
        <div aria-label="..." className="pb-3">
          <ul className="pagination justify-content-center">
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
    </>
  );
};

export default Menu;
