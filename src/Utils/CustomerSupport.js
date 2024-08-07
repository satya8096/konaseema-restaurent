import React, { useState } from "react";
import { Error } from "../Utils/ToastifyContainerHandler";
const CustomerSupport = () => {
  const [msgObject, setMsgObject] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
  });

  const onChangeHandler = (e) => {
    setMsgObject({ ...msgObject, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !msgObject.name ||
      !msgObject.email ||
      !msgObject.phone ||
      !msgObject.issue
    ) {
      return Error("Please Provide All details !");
    }
  };
  return (
    <>
      <div data-aos="zoom-in">
        <h4>Customer Support</h4>
        <p className="text-danger">
          * If you facing any issues, please fill the form, our team call you.
        </p>
        <div className="customer-main-container">
          <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name..."
              value={msgObject.name}
              onChange={onChangeHandler}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your Email..."
              value={msgObject.email}
              onChange={onChangeHandler}
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Your Phone Number..."
              value={msgObject.phone}
              onChange={onChangeHandler}
            />
            <label htmlFor="issue">Issue</label>
            <textarea
              placeholder="Your Issue..."
              id="issue"
              name="issue"
              value={msgObject.issue}
              onChange={onChangeHandler}
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default CustomerSupport;
