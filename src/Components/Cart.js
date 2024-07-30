import React, { useState,useCallback } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const initialItems = [
    { id: 1, name: "Pizza", price: 12, quantity: 1 },
    { id: 2, name: "Burger", price: 8, quantity: 1 },
    { id: 3, name: "Pasta", price: 10, quantity: 1 },
    { id: 4, name: "Salad", price: 6, quantity: 1 },
    { id: 5, name: "Pizza", price: 12, quantity: 1 },
    { id: 6, name: "Burger", price: 8, quantity: 1 },
    { id: 7, name: "Pasta", price: 10, quantity: 1 },
    { id: 8, name: "Salad", price: 6, quantity: 1 },
  ];

  const [items, setItems] = useState(initialItems);

  const handleQuantityChange = useCallback((id, increment) => {
    setItems((prevItems) => {
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      );
    });
  }, []);

  const handleEmptyCart = (
    <div className="text-center m-5">
      <h4 className="text-center"> Your Cart is Empty !</h4>
      <p className="text-center">Please add some items</p>
      <Link className="btn btn-info" to={"/menu"}>
        Order Now
      </Link>
    </div>
  );

  const calculateTotal = useCallback(() => {
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.1;
    const deliveryCharge = (items.length !== 0 && 5) || 0;
    return {
      subtotal,
      tax,
      deliveryCharge,
      total: subtotal + tax + deliveryCharge,
    };
  }, [items]);

  const { subtotal, tax, deliveryCharge, total } = calculateTotal()

  return (
    <div className="cart-container">
      <h1 className="cart-title text-white">Your Cart</h1>
      <p className="text-center text-white">
        We Provide Good Food For Your Family!
      </p>
      <div className="cart-main-sub-container d-flex flex-wrap justify-content-around">
        <div className="cart-items">
          <h4>Your Cart Items ({items.length})</h4>
          <table>
            <tbody>
              <tr>
                <td>{items.length === 0 && handleEmptyCart}</td>
              </tr>
              {items.map((item, index) => (
                <tr className="cart-item" key={item.id}>
                  <td className="me-2">{index + 1}.</td>
                  <td>
                    <img
                      src="https://product-assets.faasos.io/eatsure_cms/production/44df4975-8ff8-49dd-8e66-58d4d9a80a87.jpg?d=375&tr:w-undefined,h-undefined"
                      alt="cart-img"
                    />
                  </td>
                  <td className="item-name ps-2">{item.name}</td>
                  <td className="item-price">${item.price}</td>
                  <td className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>
                      +
                    </button>
                  </td>
                  <td className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="ps-4">
                    <i className="fa-solid fa-trash-can"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <table className="cart-summary text-justify">
          <tbody>
            <tr className="summary-item pb-3">
              <th>Pricing Details</th>
              <th>Total Cost</th>
            </tr>
            <tr className="summary-item">
              <td>
                <h6>Subtotal:</h6>
              </td>
              <td>
                <span>${subtotal.toFixed(2)}</span>
              </td>
            </tr>
            <tr className="summary-item">
              <td>
                <h6>Tax (10%):</h6>
              </td>
              <td>
                <span>${tax.toFixed(2)}</span>
              </td>
            </tr>
            <tr className="summary-item">
              <td>
                <h6>Delivery Charge:</h6>
              </td>
              <td>
                <span>
                  ${(items.length !== 0 && deliveryCharge.toFixed(2)) || 0.0}
                </span>
              </td>
            </tr>
            <tr className="summary-item total">
              <td>
                <h5>Total Amount:</h5>
              </td>
              <td>
                <span>${total.toFixed(2)}</span>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <Link href="/" className="cart-checkout-btn">
                    <span>Procced to Checkout</span>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
