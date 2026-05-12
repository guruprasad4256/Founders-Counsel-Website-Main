import React, { useState, JSX } from 'react';
import AboutComponent from "../components/Pages/About";
import Header from "../components/sections/Navbar"; 
import Footer from "../components/sections/Footer";

const AboutPage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-transparent">
      <Header />
      <AboutComponent />
      <Footer />
    </div>
  );
};

export default AboutPage;