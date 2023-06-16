import React from "react";
import PageHeader from "../../components/anonymous/common/page-header/page-header";
import Menu from "../../components/anonymous/home/menu/menu";
import AnonymousTemplate from "../../templates/anonymous-template";

const MenuPage = () => {
  return (
    <AnonymousTemplate>
      <PageHeader title={"Menu"} />
      <Menu />
    </AnonymousTemplate>
  );
};

export default MenuPage;
