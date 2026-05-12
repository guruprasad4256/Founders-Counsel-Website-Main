import React, { useState, JSX } from 'react';
import ServicesComponent from "../components/Pages/ServicesPage";
import Header from "../components/sections/Navbar"; 
import Footer from "../components/sections/Footer";

const ServicesPage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <ServicesComponent />
      <Footer />
    </div>
  );
};

export default ServicesPage;