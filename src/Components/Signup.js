import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Error, Success } from "../Utils/ToastifyContainerHandler";
import { ToastContainer } from "react-toastify";
import axios from "axios";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.email ||
      !formData.password ||
      !formData.name ||
      !formData.confirmPassword
    ) {
      return Error("Please Provide All Details !");
    } else if (formData.password !== formData.confirmPassword) {
      return Error("Password and Confirm Password does not match !");
    } else if (formData.password.length < 8) {
      return Error("Password Should be 8 or more Charecters !");
    }

    const response = await axios.post(
      "http://localhost:4000/api/v1/konaseema/users",
      { ...formData }
    );
    if (response.data.status === "Fail") {
      Error(response.data.message);
    } else {
      Success("Registration Successfull !");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-main-container d-flex justify-content-center align-items-center">
      <div className="signup-card" data-aos="zoom-in">
        <div className="text-center">
          <h4 className="mt-2">
            Konaseema
            <span className="text-warning" style={{ fontSize: "1.6rem" }}>
              Ruchulu
            </span>
          </h4>
          <h3>Sign Up</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label">
                Password <span className="text-danger">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
              />
              <span
                className="translate-middle-y"
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "1rem",
                  top: "3.5rem",
                }}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </span>
            </div>
            <div className="mb-3 position-relative">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password <span className="text-danger">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Enter Your Confirm Password"
              />
              <span
                className=" translate-middle-y"
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "1rem",
                  top: "3.5rem",
                }}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <i className="fa-solid fa-eye-slash"></i>
                ) : (
                  <i className="fa-solid fa-eye"></i>
                )}
              </span>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center m-2">
            Already Have a Account ?{" "}
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer style={{ width: "21rem" }} />
    </div>
  );
};

export default SignUp;
