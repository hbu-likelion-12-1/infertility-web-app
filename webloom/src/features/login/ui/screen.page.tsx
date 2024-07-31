"use client";

import React from 'react';
import { usePathname } from "next/navigation";
import IconUtils from "@/shared/ui/IconUtils";
import Button from "@/shared/ui/button";
import { Server } from "@/service/api";

const LoginScreen = () => {
  const pathname = usePathname();

  const onClickLogin = async () => {
    if (!pathname) return;
    const { url } = await Server.Kakao.getKakaoPublishAuthCodeUrl();
    localStorage.setItem("referrer", pathname);
    window.location.href = url;
  };

  return (
    <article className="flex h-full flex-col px-[45px] justify-center">

      <section className="flex flex-col">

        <div className="w-[270px] relative">
          <h1 className="font-bold text-primary-0 text-[45px]">WeBloom</h1>
          <div className="absolute right-0 top-[-35px]">
            <IconUtils.SmallBloom/>
          </div>
        </div>

        <div className="flex flex-col gap-y-1.5 font-bold text-slate-800 text-[20px] pt-[15px]">
          <span>우리 같이 행복을 꽃 피워요</span>
          <span>난임 부부 맞춤형 마음 공유 서비스</span>
        </div>

      </section>

      <section className="pt-[160px]">
        <Button
          onClick={onClickLogin}
          className="w-full"
          theme="kakao"
          round="rounded"
        >
          <div className="flex w-full">
            <IconUtils.Kakao/>
            <div className="flex-1">
              카카오로 3초만에 시작하기
            </div>
          </div>
        </Button>
      </section>

    </article>
  );
};

export default LoginScreen;
