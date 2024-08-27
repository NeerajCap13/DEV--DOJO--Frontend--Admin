import React, { useState } from "react";
import FakeLandingPage from "../../Components/FakeLandingPage/FakeLandingPage";
import AdminHeroSection from "../../Components/AdminHeroSection/AdminHeroSection";
import AdminFeature from "../../Components/AdminFeature/AdminFeature";

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
        </>
      )}
    </div>
  );
};

export default LandingPage;
