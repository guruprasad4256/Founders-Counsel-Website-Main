import React, { useState, JSX } from 'react';
import { Helmet } from 'react-helmet-async';
import HomeComponent from "../components/Pages/Home";
import Header from "../components/sections/Navbar"; 
import DisclaimerModal from '../components/sections/Disclaimer';
import Footer from "../components/sections/Footer";

const HomePage = (): JSX.Element => {
  // Schema.org structured data to help Google understand your business entity
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Founders Counsel",
    "url": "https://founderscounsel.co/",
    "description": "Expert legal, strategic, and advisory services for startup founders, entrepreneurs, and growing businesses."
  };

  return (
    <div className="w-full min-h-screen bg-transparent">
      {/* ViteReactSSG will read this Helmet block and write it to the static HTML */}
      <Helmet>
        <title>Founders Counsel | Legal & Advisory Services for Startups</title> 
        
        <meta name="description" content="Founders Counsel provides expert legal, strategic, and advisory services for startup founders, entrepreneurs, and growing businesses." />
        <meta name="keywords" content="founders counsel, startup lawyer, legal advisory for founders, corporate law for startups, entrepreneur counsel, legal services" />
        
        {/* Open Graph / LinkedIn / Facebook */}
        <meta property="og:title" content="Founders Counsel | Legal & Advisory Services for Startups" />
        <meta property="og:description" content="Expert legal, strategic, and advisory services for startup founders and growing businesses." />
        <meta property="og:url" content="https://founderscounsel.co/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Founders Counsel" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Founders Counsel | Legal & Advisory Services for Startups" />
        <meta name="twitter:description" content="Expert legal, strategic, and advisory services for startup founders and growing businesses." />
        
        {/* Canonical URL to prevent duplicate content issues */}
        <link rel="canonical" href="https://founderscounsel.co/" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Header />
      <DisclaimerModal />
      <HomeComponent />
      <Footer />
    </div>
  );
};

export default HomePage;