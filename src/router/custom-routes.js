import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/common/scroll-to-top/scroll-to-top";
import AboutPage from "../pages/anonymous/about-page";
import ContactPage from "../pages/anonymous/contact-page";
import HomePage from "../pages/anonymous/home-page";
import MenuPage from "../pages/anonymous/menu-page";
import ReservationPage from "../pages/anonymous/reservation-page";
import ServicePage from "../pages/anonymous/service-page";
import TestimonialPage from "../pages/anonymous/testimonial-page";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="reservation" element={<ReservationPage />} />
          <Route path="testimonial" element={<TestimonialPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
