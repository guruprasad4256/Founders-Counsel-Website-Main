import React, { useState, JSX } from 'react';
import CareersComponent from "../components/Pages/Careers";
import Header from "../components/sections/Navbar"; 
import Footer from "../components/sections/Footer";

const CareersPage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-transparent">
      <Header />
      <CareersComponent />
      <Footer />
    </div>
  );
};

export default CareersPage;