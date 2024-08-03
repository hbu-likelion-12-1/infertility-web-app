'use client';

import React, { useEffect, useState } from 'react';
import LocalStorage from "@/shared/lib/local-storage";
import IconUtils from "@/shared/ui/IconUtils";
import { useRouter } from "next/navigation";


const SplashLoader: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [firstLoaded, setFirstLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();


  useEffect(() => {
    if (firstLoaded) return;
    setTimeout(() => {
      LocalStorage.setItem("initial-load", "true");
      setFirstLoaded(true);
    }, 2000);
  }, [firstLoaded]);

  useEffect(() => {
    setMounted(true);
    const onboardLoad = LocalStorage.getItem("initial-onboard");
    if (onboardLoad) {
      return router.push("/login");
    }
    const load = LocalStorage.getItem("initial-load");
    setFirstLoaded(!!load);
  }, []);

  if (!mounted) return null;

  if (firstLoaded) {
    return children;
  }

  return (
    <div className="flex flex-col h-full justify-center pb-[120px] md:pb-[240px] items-center">
      {<IconUtils.Flower/>}

      <section className="flex flex-col text-center pt-[40px]">
        <span className="text-[#F3AF81] font-bold text-[42px]">WeBloom</span>
        <span className="text-[#111111] text-[18px]">우리 같이 행복을 꽃 피워요</span>
      </section>
    </div>
  );
};

export default SplashLoader;
