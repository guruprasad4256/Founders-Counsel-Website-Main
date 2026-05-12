import React, { useState, JSX } from 'react';
import ContactComponent from "../components/Pages/Contact";
import Header from "../components/sections/Navbar"; 
import Footer from "../components/sections/Footer";

const ContactPage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-transparent">
      <Header />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default ContactPage;