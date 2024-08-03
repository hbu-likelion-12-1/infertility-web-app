"use client";

import React, { useEffect } from 'react';
import SplashLoader from "@/shared/ui/SplashLoader";
import OnboardLoader from "@/entities/onboard-loader/onboard-loader.component";
import { useRouter } from "next/navigation";
import useAuth from "@/shared/lib/use-auth.hook";

const StartPoint = () => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/router");
    }
  }, [user]);

  return (
    <>
      <SplashLoader/>
      <OnboardLoader/>
    </>
  );
};

export default StartPoint;

