import React from "react";

const CustomerSupport = () => {
  return (
    <>
      <div>
        <h4>Customer Support</h4>
        <p className="text-danger">
          * If you facing any issues, please fill the form, our team call you.
        </p>
        <div className="customer-main-container">
          <form>
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your Name..."
            />

            <label htmlFor="lname">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your Email..."
            />
            <label htmlFor="lname">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Your Phone Number..."
            />
            <label htmlFor="lname">Issue</label>
            <textarea
              placeholder="Your Issue..."
              id="issue"
              name="issue"
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default CustomerSupport;
