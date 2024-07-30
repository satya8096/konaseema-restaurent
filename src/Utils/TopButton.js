import React, { useState, useEffect } from "react";
const TopButton = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        id="topButton"
        className={`top-button text-center ${showButtons ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-arrow-up text-warning"></i>
      </button>
      <a
        href="https://wa.me/1234567890"
        id="whatsappButton"
        className={`whatsapp-button bg-dark ${showButtons ? "show" : ""}`}
        target="blank"
      >
        <i className="fa-brands fa-whatsapp text-success"></i>
      </a>
    </>
  );
};

export default TopButton;
