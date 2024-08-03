'use client';

import React, { useEffect, useState } from 'react';
import LocalStorage from "@/shared/lib/local-storage";
import useOnboardPage from "@/entities/onboard-loader/use-onboard.hook";
import OnboardWelcome from "@/entities/onboard-loader/welcome.component";
import OnboardMindShare from "@/entities/onboard-loader/onboard-mindshare.component";
import OnboardStressCare from "@/entities/onboard-loader/onboard-stress-care.component";
import OnboardFinal from "@/entities/onboard-loader/onboard-final.component";
import { OnBoardPhase } from "@/entities/onboard-loader/constants/enum";


const OnboardLoader: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { phase } = useOnboardPage();
  const [mounted, setMounted] = useState(false);
  const [firstLoaded, setFirstLoaded] = useState(false);

  useEffect(() => {
    setMounted(true);
    const load = LocalStorage.getItem("initial-onboard");
    setFirstLoaded(!!load);
  }, []);

  if (!mounted) return null;

  if (firstLoaded) {
    return children;
  }

  return (
    <div className="flex flex-col h-full justify-center relative">
      {phase === OnBoardPhase.WELCOME && <OnboardWelcome/>}
      {phase === OnBoardPhase.MINDSHARE && <OnboardMindShare/>}
      {phase === OnBoardPhase.STRESS && <OnboardStressCare/>}
      {phase === OnBoardPhase.FINAL && <OnboardFinal/>}
    </div>
  );
};

export default OnboardLoader;
