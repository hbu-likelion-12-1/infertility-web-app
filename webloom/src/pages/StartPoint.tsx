"use client";

import React from 'react';
import SplashLoader from "@/shared/ui/SplashLoader";
import OnboardLoader from "@/shared/ui/onboard-loader/onboard-loader.component";

const StartPoint = () => {
  return (
    <OnboardLoader>
      <SplashLoader>
        안녕하세요
      </SplashLoader>
    </OnboardLoader>
  );
};

export default StartPoint;
