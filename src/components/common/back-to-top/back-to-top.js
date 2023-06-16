import React, { useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import "./back-to-top.scss";

const BackToTop = () => {
  const [change, setChange] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 100) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    // eslint-disable-next-line
    <a
      href="#"
      className={
        change
          ? "btn btn-lg btn-primary btn-lg-square back-to-top d-flex align-items-center"
          : "d-none"
      }
    >
      <FaAngleDoubleUp />
    </a>
  );
};

export default BackToTop;
