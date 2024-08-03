"use client";

import React, { useEffect, useState } from 'react';
import SplashLoader from "@/shared/ui/SplashLoader";
import OnboardLoader from "@/entities/onboard-loader/onboard-loader.component";
import { useRouter } from "next/navigation";
import useAuth from "@/shared/lib/use-auth.hook";

const StartPoint = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  console.log(`start point: ${mounted}`)

  useEffect(() => {
    setMounted(true);
    if (user) {
      router.push("/router");
    }
  }, [user]);

  if (!mounted) return null;

  return (
    <>
      <SplashLoader/>
      <OnboardLoader/>
    </>
  );
};

export default StartPoint;

