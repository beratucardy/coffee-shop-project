import React from "react";
import PageHeader from "../../components/anonymous/common/page-header/page-header";
import About from "../../components/anonymous/home/about/about";
import AnonymousTemplate from "../../templates/anonymous-template";

const AboutPage = () => {
  return (
    <AnonymousTemplate>
      <PageHeader title={"About Us"} />
      <About />
    </AnonymousTemplate>
  );
};

export default AboutPage;
