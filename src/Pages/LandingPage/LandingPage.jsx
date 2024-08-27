import React, { useState } from "react";
import FakeLandingPage from "../../Components/FakeLandingPage/FakeLandingPage";
import AdminHeroSection from "../../Components/AdminHeroSection/AdminHeroSection";
import AdminFeature from "../../Components/AdminFeature/AdminFeature";
import AdminHowWorks from "../../Components/AdminHowWorks/AdminHowWorks";
import AdminFooter from "../../Components/AdminFooter/AdminFooter";
import Faq from "../../Components/Faq/Faq";
import About from "../../Components/About/About";

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Change this as needed
  return (
    <div>
      {!isLogin ? (
        <FakeLandingPage />
      ) : (
        <>
          <AdminHeroSection />
          <AdminFeature />
          <AdminHowWorks/>
          <About/>
          <Faq/>
          <AdminFooter/>
        </>
      )}
    </div>
  );
};

export default LandingPage;
