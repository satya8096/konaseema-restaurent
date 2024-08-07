import React, { useState } from "react";

const Cart = () => {
  const initialCart = [
    {
      id: 1,
      name: "Product 1",
      price: 10.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 20.0,
      quantity: 2,
    },
    {
      id: 3,
      name: "Product 3",
      price: 15.0,
      quantity: 1,
    },
  ];

  const [cart, setCart] = useState(initialCart);
  const discount = 5.0; // fixed discount
  const deliveryCharges = 3.0; // fixed delivery charges

  const handleIncrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    return (subtotal - discount + deliveryCharges).toFixed(2);
  };

  return (
    <div className="cart-container">
      {cart.length !== 0 && (
        <h2 className="text-center text-warning">Your Cart</h2>
      )}
      {cart.length === 0 ? (
        <div className="text-center empty-cart">
          <h2 className="text-white">Cart</h2>
          <p className="text-white text-center">Your cart is empty !</p>
          <button className="btn btn-outline-warning">Order Now</button>
        </div>
      ) : (
        <div className="cart-main-sub-container" data-aos="zoom-in">
          <table className="table text-white">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src="https://img.freepik.com/free-photo/roasted-chicken-salad_23-2147765429.jpg?ga=GA1.1.204144841.1709562046&semt=sph"
                      alt="img"
                      className="cart-images"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="d-flex quantity-controls">
                      <button
                        className="btn btn-outline-secondary me-2"
                        onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary ms-2"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="items-total-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-center">
            <div
              className="p-3"
              style={{
                width: "20rem",
                backgroundColor: "white",
                borderRadius: "6px",
              }}
            >
              <h5>Summary</h5>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>${calculateSubtotal()}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Discount:</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Delivery Charges:</span>
                <span>${deliveryCharges.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <strong>Total:</strong>
                <strong>${calculateTotal()}</strong>
              </div>
              <button className=" mt-3 cart-checkout-btn">
                Proceed to Checkout{" "}
                <i className="fa-solid fa-circle-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
