'use client';

import React, { useState } from 'react';
import LocalStorage from "@/shared/lib/local-storage";
import { OnBoardPhase } from "@/shared/ui/onboard-loader/constants/enum";
import OnboardWelcome from "@/shared/ui/onboard-loader/welcome.component";
import useOnboardPage from "@/shared/ui/onboard-loader/use-onboard.hook";


const OnboardLoader: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { phase } = useOnboardPage();
  const [firstLoaded, setFirstLoaded] = useState(() => {
    return LocalStorage.getItem("initial-onboard") !== null;
  });

  if (firstLoaded) {
    return children;
  }

  return (
    <div className="flex flex-col h-full justify-center relative">
      {phase === OnBoardPhase.WELCOME && <OnboardWelcome/>}
    </div>
  );
};

export default OnboardLoader;
