import React, { useState } from "react";

const Login = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");

  const togglePassword = (e) => {
    const field = e.target.previousElementSibling;
    const fieldType = field.type === "password" ? "text" : "password";
    field.type = fieldType;
    e.target.classList.toggle("fa-eye");
    e.target.classList.toggle("fa-eye-slash");
  };

  const showSignUp = () => {
    setIsLoginVisible(false);
    setLoginError("");
  };

  const showLogin = () => {
    setIsLoginVisible(true);
    setSignupError("");
  };

  const validateForm = (formId) => {
    let isValid = true;
    const errorMessages = [];

    if (formId === "signup-form") {
      const password = document.querySelector('input[name="password"]').value;
      const confirmPassword = document.querySelector(
        'input[name="confirm-password"]'
      ).value;

      if (password !== confirmPassword) {
        isValid = false;
        errorMessages.push("Passwords do not match.");
      }
    }

    const inputs = document.querySelectorAll(`#${formId} input[required]`);
    inputs.forEach((input) => {
      if (!input.value) {
        isValid = false;
        errorMessages.push(
          `${
            input.name.charAt(0).toUpperCase() + input.name.slice(1)
          } is required.`
        );
      }
    });

    if (formId === "login-form") {
      setLoginError(errorMessages.join(" "));
    } else {
      setSignupError(errorMessages.join(" "));
    }

    return isValid;
  };

  const handleSubmit = (e, formId) => {
    e.preventDefault();
    if (validateForm(formId)) {
      alert(`${formId === "login-form" ? "Login" : "Signup"} successful!`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-container-form-container" id="form-container">
        {isLoginVisible ? (
          <form
            id="login-form"
            className="form login-form"
            onSubmit={(e) => handleSubmit(e, "login-form")}
          >
            <h2 className="form-title">Login</h2>
            {loginError && (
              <div id="login-error" className="form-error">
                {loginError}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="login-email">
                Email{" "}
                <span style={{ color: "red", fontSize: "1.4rem" }}>*</span>
              </label>
              <input
                type="email"
                id="login-email"
                name="email"
                required
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">
                Password{" "}
                <span style={{ color: "red", fontSize: "1.4rem" }}>*</span>
              </label>
              <div className="password-container">
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  required
                  placeholder="* * * * * * * * * * * * *"
                />
                <i
                  className="fas fa-eye toggle-password"
                  onClick={togglePassword}
                ></i>
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Login
            </button>
            <button type="button" className="google-btn">
              Login with Google
            </button>
            <p className="form-switch text-center">
              Don't have an account? <span onClick={showSignUp}>Sign Up</span>
            </p>
          </form>
        ) : (
          <form
            id="signup-form"
            className="form signup-form"
            onSubmit={(e) => handleSubmit(e, "signup-form")}
          >
            <h2 className="form-title">Sign Up</h2>
            {signupError && (
              <div id="signup-error" className="form-error">
                {signupError}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="signup-name">
                Name <span style={{ color: "red", fontSize: "1.4rem" }}>*</span>
              </label>
              <input
                type="text"
                id="signup-name"
                name="name"
                required
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-email">
                Email{" "}
                <span style={{ color: "red", fontSize: "1.4rem" }}>*</span>
              </label>
              <input
                type="email"
                id="signup-email"
                name="email"
                required
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-password">
                Password{" "}
                <span style={{ color: "red", fontSize: "1.4rem" }}>*</span>
              </label>
              <div className="password-container">
                <input
                  type="password"
                  id="signup-password"
                  name="password"
                  required
                  placeholder="* * * * * * * * * * * * *"
                />
                <i
                  className="fas fa-eye toggle-password"
                  onClick={togglePassword}
                ></i>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="signup-confirm-password">
                Confirm Password{" "}
                <span style={{ color: "red", fontSize: "1.4rem" }}>*</span>
              </label>
              <div className="password-container">
                <input
                  type="password"
                  id="signup-confirm-password"
                  name="confirm-password"
                  placeholder="* * * * * * * * * * * * *"
                  required
                />
                <i
                  className="fas fa-eye toggle-password"
                  onClick={togglePassword}
                ></i>
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Sign Up
            </button>
            <p className="form-switch text-center">
              Already have an account? <span onClick={showLogin}>Login</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
