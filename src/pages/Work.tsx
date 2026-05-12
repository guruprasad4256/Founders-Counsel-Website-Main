import React, { useState, JSX } from 'react';
import WorkComponent from "../components/Pages/Work";
import Header from "../components/sections/Navbar"; 
import Footer from "../components/sections/Footer";

const WorkPage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-transparent">
      <Header />
      <WorkComponent />
      <Footer />
    </div>
  );
};

export default WorkPage;