import React, { useState, JSX } from 'react';
import HomeComponent from "../components/Pages/Home";
import Header from "../components/sections/Navbar"; 
import Footer from "../components/sections/Footer";

const HomePage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-transparent">
      <Header />
      <HomeComponent />
      <Footer />
    </div>
  );
};

export default HomePage;