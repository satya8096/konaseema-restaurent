import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Profile = () => {
  return (
    <div className="profile-main-container overflow-hidden">
      <div className="profile-side-nav" data-aos="fade-right">
        <ul className="d-flex list-unstyled">
          <li className="text-decoration-none">
            Hello, <br /> Satyanarayana
          </li>
          <li>
            <Link className="text-decoration-none" to="/orders">
              <i className="fa-solid fa-truck-fast"></i> My Orders{" "}
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/profile">
              <i className="fa-solid fa-user"></i> Profile Information
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/profile/manage-address">
              <i className="fa-solid fa-address-card"></i> Manage Address
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/profile/wishlist">
              <i className="fa-solid fa-heart"></i> Wishlist
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/profile/notifications">
              <i className="fa-solid fa-bell"></i> All Notifications
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none"
              to="/profile/frequently-asked-questions"
            >
              <i className="fa-solid fa-circle-question"></i> FAQs
            </Link>
          </li>
          <li>
            <Link
              className="text-decoration-none"
              to="/profile/customer-support"
            >
              <i className="fa-solid fa-headset"></i> 24x7 Customer Care
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="profile-information-container"
        id="profile-information-container"
        data-aos="fade-left"
      >
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
