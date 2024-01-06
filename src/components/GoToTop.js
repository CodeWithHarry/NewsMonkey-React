import React, { useEffect } from "react";
import { useState } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";
const GoToTop = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [backToUP, setBackToUP] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1000 ? setBackToUP(true) : setBackToUP(false);
    });
  }, []);

  return (
    <div className="top-btn" onClick={scrollUp}>
      {backToUP && (
        <FaCircleArrowUp
          style={{
            position: "fixed",
            bottom: " 50px",
            right: "50px",
            height: " 50px",
            width: "50px",
          }}
        />
      )}
    </div>
  );
};
export default GoToTop;
