'use client';

import React, { useEffect, useState } from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import LocalStorage from "@/shared/lib/local-storage";

enum SplashPage {
  WELCOME,
  MINDSHARE,
  STRESS,
  FINAL
}


const SplashLoader: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [phase, setPhase] = useState<SplashPage>(SplashPage.WELCOME);
  const [firstLoaded, setFirstLoaded] = useState(() => {
    return LocalStorage.getItem("initial-load") !== null;
  });

  useEffect(() => {
    if (firstLoaded) return;
    setTimeout(() => {
      LocalStorage.setItem("initial-load", "true");
      setFirstLoaded(true);
    }, 2000);
  }, [firstLoaded]);

  if (firstLoaded) {
    return children;
  }

  return (
    <div className="flex flex-col h-full justify-center pb-[120px] md:pb-[240px] items-center">
      {<IconUtils.Flower/>}

      <section className="flex flex-col text-center pt-[40px]">
        <span className="text-[#F3AF81] font-bold text-[42px]">WeBloom</span>
        <span className="text-[18px]">우리 같이 행복을 꽃 피워요</span>
      </section>
    </div>
  );
};

export default SplashLoader;
