import React from "react";
import Home from "./pages/Home";
import BuyCredits from "./pages/BuyCredits";
import Result from "./pages/Result";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-linear-to-b from-teal-50 to-orange-50 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyCredits />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
