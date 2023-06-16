import React from "react";
import PageHeader from "../../components/anonymous/common/page-header/page-header";
import Reservation from "../../components/anonymous/home/reservation/reservation";
import AnonymousTemplate from "../../templates/anonymous-template";

const ReservationPage = () => {
  return (
    <AnonymousTemplate>
      <PageHeader title={"Reservation"} />
      <Reservation />
    </AnonymousTemplate>
  );
};

export default ReservationPage;
