import React, { useState } from "react";
const UserProfile = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const [user, setUser] = useState({
    fname: "Satyanarayana",
    lname: "Katta",
    gender: "Male",
    email: "kattasatyanarayana2003@gmail.com",
    phone: "+91 8096334401",
  });

  const editHandler = (e) => {
    e.preventDefault();
    setIsDisabled(false);
  };

  const cancleHandler = (e) => {
    e.preventDefault();
    setUser({
      fname: "Satyanarayana",
      lname: "Katta",
      gender: "Male",
      email: "kattasatyanarayana2003@gmail.com",
      phone: "+91 8096334401",
    });
    setIsDisabled(true);
  };

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Profile Information</h3>
      <div className="profile-details-container">
        <form data-aos="zoom-in">
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                className="profile-first-name"
                name="fname"
                value={user.fname}
                onChange={onChangeHandler}
                placeholder="Your name.."
                disabled={isDisabled}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lname"
                className="profile-last-name"
                placeholder="Your last name.."
                value={user.lname}
                onChange={onChangeHandler}
                disabled={isDisabled}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="gender">Gender</label>
            </div>
            <div className="col-75">
              <select
                id="gender"
                name="gender"
                disabled={isDisabled}
                className="profile-gender"
                value={user.gender}
                onChange={onChangeHandler}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="custom">Custom</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="email">Email</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="email"
                name="email"
                className="profile-email"
                placeholder="Your email.."
                value={user.email}
                onChange={onChangeHandler}
                disabled={isDisabled}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="phone">Phone Number</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="phone"
                name="phone"
                className="profile-phone-num"
                placeholder="Your phone number.."
                value={user.phone}
                onChange={onChangeHandler}
                disabled={isDisabled}
              />
            </div>
          </div>
          <div className="profile-save-butttons d-flex align-items-center justify-content-around">
            <input
              type="submit"
              value="Cancle"
              className="btn btn-danger"
              id="submit-cancle"
              onClick={(e) => cancleHandler(e)}
              style={{ backgroundColor: "red" }}
            />
            <input
              type="submit"
              value="Edit"
              style={{ backgroundColor: "blue" }}
              className="submit-edit"
              onClick={(e) => editHandler(e)}
            />
            <input type="submit" value="Submit" className="profile-sub" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
