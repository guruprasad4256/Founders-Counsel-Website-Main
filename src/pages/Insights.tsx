import React, { useState, JSX } from 'react';
import InsightsComponent from "../components/Pages/Insights";
import Header from "../components/sections/Navbar"; 
import Footer from "../components/sections/Footer";

const InsightsPage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-transparent">
      <Header />
      <InsightsComponent />
      <Footer />
    </div>
  );
};

export default InsightsPage;