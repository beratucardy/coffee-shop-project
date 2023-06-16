import React from "react";
import PageHeader from "../../components/anonymous/common/page-header/page-header";
import Contact from "../../components/anonymous/contact/contact";
import AnonymousTemplate from "../../templates/anonymous-template";

const ContactPage = () => {
  return (
    <AnonymousTemplate>
      <PageHeader title={"Contact"} />
      <Contact />
    </AnonymousTemplate>
  );
};

export default ContactPage;
