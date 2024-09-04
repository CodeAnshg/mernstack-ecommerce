/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Routers ,Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";
import AboutUs from "./companydetails/AboutUs";
import PrivacyPolicy from "./companydetails/PrivacyPolicy"; // Assuming you have this component

const App = () => {


  return (
    <>
    <Routers>
      <Navbar />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy&policy" element={ <PrivacyPolicy/>} />
      </Routes>
      <Footer />
      </Routers>
      </>
  );
};

export default App;
