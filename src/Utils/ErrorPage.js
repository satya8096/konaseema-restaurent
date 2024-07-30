import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{ textAlign: "center", padding: "50px" }}
      className="error-page-container d-flex align-items-center justify-content-center flex-column"
    >
      <div>
        <h1 style={{ fontSize: "50px", margin: "4px 0" }}>404</h1>
        <h2 style={{ margin: "4px 0" }}>Page Not Found</h2>
        <p style={{ fontSize: "18px", margin: "5px 0", textAlign: "center" }}>
          Sorry, the page you are looking for does not exist. It might have been
          removed, renamed, or did not exist in the first place.
        </p>
        <img src="/Images/Error.png" alt="error" width={"40%"} />
        <Link
          to="/"
          style={{ textDecoration: "none", color: "#fff", display: "block" }}
        >
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
