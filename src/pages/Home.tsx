import React, { JSX } from 'react';
import HomeComponent from "../components/Pages/Home";
import Header from "../components/sections/Navbar"; 
import DisclaimerModal from '../components/sections/Disclaimer';
import Footer from "../components/sections/Footer";

const HomePage = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-[#0E0B42]"> 
      {/* SEO is now handled in index.html (EzyBill method). 
          Helmet and schemaData have been removed to fix the Vite build error.
      */}
      <Header />
      <DisclaimerModal />
      <main> 
        <HomeComponent />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;