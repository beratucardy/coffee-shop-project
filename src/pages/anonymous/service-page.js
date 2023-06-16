import React from "react";
import PageHeader from "../../components/anonymous/common/page-header/page-header";
import Service from "../../components/anonymous/home/service/service";
import AnonymousTemplate from "../../templates/anonymous-template";

const ServicePage = () => {
  return (
    <AnonymousTemplate>
      <PageHeader title={"Services"} />
      <Service />
    </AnonymousTemplate>
  );
};

export default ServicePage;
