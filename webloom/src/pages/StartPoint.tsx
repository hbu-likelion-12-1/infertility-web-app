import React from 'react';
import SplashLoader from "@/shared/ui/SplashLoader";
import OnboardLoader from "@/entities/onboard-loader/onboard-loader.component";

const StartPoint = () => {
  return (
    <SplashLoader>
      <OnboardLoader/>
    </SplashLoader>
  );
};

export default StartPoint;

