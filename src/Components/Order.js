import React, { useState} from "react";

const Order = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const orders = [
    {
      orderId: 1,
      name: "Pepperoni Pizza",
      quantity: 1,
      price: 12.99,
      deliveryStatus: "Delivered",
    },
    {
      orderId: 2,
      name: "Cheeseburger",
      quantity: 2,
      price: 8.99,
      deliveryStatus: "Out for Delivery",
    },
    {
      orderId: 3,
      name: "Vanilla Ice Cream",
      quantity: 3,
      price: 4.99,
      deliveryStatus: "Preparing",
    },
    {
      orderId: 4,
      name: "Latte",
      quantity: 1,
      price: 3.99,
      deliveryStatus: "Delivered",
    },
    {
      orderId: 5,
      name: "Grilled Salmon",
      quantity: 2,
      price: 18.99,
      deliveryStatus: "Out for Delivery",
    },
    {
      orderId: 6,
      name: "Apple Pie",
      quantity: 1,
      price: 5.99,
      deliveryStatus: "Preparing",
    },
    {
      orderId: 7,
      name: "Garlic Bread",
      quantity: 4,
      price: 3.99,
      deliveryStatus: "Delivered",
    },
    {
      orderId: 8,
      name: "Cheese Platter",
      quantity: 1,
      price: 14.99,
      deliveryStatus: "Out for Delivery",
    },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOrders = orders.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="order-main-container d-flex align-items-center  flex-column gap-2">
        <div className="d-flex align-items-center justify-content-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2945/2945694.png"
            alt="track"
            style={{ width: "3rem" }}
          />
          <h3>Track Your Order Here</h3>
        </div>
        <h6>Fast and Free Delivery</h6>
        <div className="recent-order-container" style={{ overflowX: "auto" }}>
          <h4>Recent Orders</h4>
          <table className="" id="recent-order-table">
            <tbody>
              <tr>
                <th>S. No</th>
                <th>Order Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Delivery Status</th>
              </tr>
              {orders
                .filter((item) => {
                  return (
                    item.deliveryStatus === "Preparing" ||
                    item.deliveryStatus === "Out for Delivery"
                  );
                })
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>order458537689386</td>
                      <td>
                        <img
                          src="https://img.freepik.com/free-photo/top-view-arrangement-with-delicious-pakistan-meal_23-2148821534.jpg?t=st=1722078312~exp=1722081912~hmac=9ced514a886fd33459779357e602d1fe8baec63036ac7d4525a4c56a4e59913e&w=826"
                          alt="item img"
                          style={{ width: "4rem" }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>Rs. {item.price} /-</td>
                      <td>
                        {item.deliveryStatus === "Preparing" ? (
                          <i className="fa-solid fa-hourglass-half me-2"></i>
                        ) : (
                          <i className="fa-solid fa-truck me-2"></i>
                        )}
                        {item.deliveryStatus}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <h4>Search Your Orders</h4>
        <div className="order-search-bar">
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div
          className="previous-order-container "
          style={{ overflowX: "auto" }}
        >
          <h4>Previous Orders</h4>
          <table className="" id="previous-order-table">
            <tbody>
              <tr>
                <th>S. No</th>
                <th>Order Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Delivery Status</th>
              </tr>
              {filteredOrders
                .filter((item) => {
                  return item.deliveryStatus === "Delivered";
                })
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>order458537689386</td>
                      <td>
                        <img
                          src="https://img.freepik.com/free-photo/top-view-arrangement-with-delicious-pakistan-meal_23-2148821534.jpg?t=st=1722078312~exp=1722081912~hmac=9ced514a886fd33459779357e602d1fe8baec63036ac7d4525a4c56a4e59913e&w=826"
                          alt="item img"
                          style={{ width: "4rem" }}
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>Rs. {item.price} /-</td>
                      <td>
                        <i className="fa-solid fa-circle-check me-2"></i>
                        {item.deliveryStatus}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {filteredOrders.length === 0 && (
            <div className="text-center text-danger m-5">
              Search "{searchTerm}" Results Not Found
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Order;
