import React from "react";
import PageHeader from "../../components/anonymous/common/page-header/page-header";
import Testimonial from "../../components/anonymous/home/testimonial/testimonial";
import AnonymousTemplate from "../../templates/anonymous-template";

const TestimonialPage = () => {
  return (
    <AnonymousTemplate>
      <PageHeader title={"Testimonial"} />
      <Testimonial />
    </AnonymousTemplate>
  );
};

export default TestimonialPage;
