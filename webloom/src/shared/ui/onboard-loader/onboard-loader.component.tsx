'use client';

import React, { useMemo } from 'react';
import LocalStorage from "@/shared/lib/local-storage";
import { OnBoardPhase } from "@/shared/ui/onboard-loader/constants/enum";
import OnboardWelcome from "@/shared/ui/onboard-loader/welcome.component";
import useOnboardPage from "@/shared/ui/onboard-loader/use-onboard.hook";
import OnboardMindShare from "@/shared/ui/onboard-loader/onboard-mindshare.component";
import OnboardStressCare from "@/shared/ui/onboard-loader/onboard-stress-care.component";
import OnboardFinal from "@/shared/ui/onboard-loader/onboard-final.component";


const OnboardLoader: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { phase } = useOnboardPage();
  const firstLoaded = useMemo(() => LocalStorage.getItem("initial-onboard") !== null, [])

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
