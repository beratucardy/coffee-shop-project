import React from "react";
import Footer from "../components/anonymous/common/footer/footer";
import Header from "../components/anonymous/common/header/header";
import BackToTop from "../components/common/back-to-top/back-to-top";

const AnonymousTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <BackToTop />
      {children}
      <Footer />
    </>
  );
};

export default AnonymousTemplate;
