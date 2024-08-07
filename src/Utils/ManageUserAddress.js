import React, { useState } from "react";
import { Error } from "../Utils/ToastifyContainerHandler";
import { ToastContainer } from "react-toastify";

const ManageUserAddress = () => {
  const [isFormEnabled, setFormEnabled] = useState(false);
  const [address, setAddress] = useState({
    houseNo: "",
    street: "",
    city: "",
    district: "",
    state: "",
    pin: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !address.houseNo ||
      !address.street ||
      !address.city ||
      !address.state ||
      !address.district ||
      !address.pin
    ) {
      return Error("Please Provide All Details !");
    }
  };

  const onChangeHandler = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const addresses = [
    {
      address:
        "1-47, Santa Market, Katrenikona, Konaseema District, Andhra Pradesh 533212.",
    },
    {
      address:
        "1-47, Santa Market, Katrenikona, Konaseema District, Andhra Pradesh 533212.",
    },
  ];

  return (
    <div className="profile-address-main-container" data-aos="zoom-in">
      <h4 className="mb-3">Your Address for Shipping</h4>
      <div>
        {addresses.length === 0 && (
          <div>
            <p className="text-danger">No Addresses Found</p>
          </div>
        )}
        <ul>
          {addresses.map((each, index) => (
            <li key={index}>{each.address}</li>
          ))}
        </ul>
        <button
          className="btn btn-info mt-2 mb-3"
          onClick={() => setFormEnabled(true)}
        >
          + Add Address
        </button>

        {isFormEnabled && (
          <div className="profile-details-container address-save-container">
            <form>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="house-no">House No.</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="house-no"
                    className="profile-house-no"
                    name="houseNo"
                    value={address.houseNo}
                    onChange={onChangeHandler}
                    placeholder="House Number, Eg: 1-47"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="street">Street/Landmark</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={address.street}
                    onChange={onChangeHandler}
                    className="profile-street"
                    placeholder="Street Name, Eg: Cherry Street"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="city">City</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={address.city}
                    onChange={onChangeHandler}
                    className="profile-city"
                    placeholder="City Name, Eg: London"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="district">District</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="district"
                    name="district"
                    value={address.district}
                    onChange={onChangeHandler}
                    className="profile-district"
                    placeholder="District Name, Eg: Konaseema"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="state">State</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={address.state}
                    onChange={onChangeHandler}
                    className="profile-state"
                    placeholder="State Name, Eg: Andhra Pradesh"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="pin-code">Pin Code</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="pin-code"
                    name="pin"
                    value={address.pin}
                    onChange={onChangeHandler}
                    className="profile-pin-code"
                    placeholder="Pin Code, Eg: 533212"
                  />
                </div>
              </div>
              <div className="address-save-buttons mt-3">
                <button
                  type="button"
                  className="btn btn-danger me-3"
                  onClick={() => setFormEnabled(false)}
                  style={{ backgroundColor: "red" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={submitHandler}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageUserAddress;
