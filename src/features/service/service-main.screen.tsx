"use client";

import React from 'react';
import useMatchQuery from "@/features/service/query/get-match.query";
import AppLoading from "@/shared/ui/loading/loading.component";

import ServiceMainHeader from "./service-main-header.component";
import MindShareInteraction from "@/features/service/mind-share.component";
import VoiceShareInteraction from "@/features/service/voice-share.component";
import Button from "@/shared/ui/button";
import { Server } from "@/service/api";
import { useRouter } from "next/navigation";


const ServiceMain = () => {
  const { data: matchDetails, isLoading } = useMatchQuery();
  const router = useRouter();

  const endTest = async () => {
    const confirm = window.confirm("시연을 종료하시겠습니까? (테스트 계정 관련 데이터가 제거됩니다.)");
    if (!confirm) return;
    await Server.Kakao.removeTestData();
    localStorage.removeItem("user-store");
    localStorage.removeItem("initial-onboard");
    localStorage.removeItem("initial-load");
    localStorage.removeItem("access");
    router.push("/login");
  }

  if (isLoading || !matchDetails) return <AppLoading/>;

  return (
    <article className="w-full h-full flex flex-col">
      <ServiceMainHeader/>
      <div className="w-full h-full flex flex-col py-[24px] pb-[72px] px-[20px]">
        <MindShareInteraction/>
        <div className="pb-[64px]"/>
        <VoiceShareInteraction match={matchDetails}/>

        <div className="flex-1"/>
        <section className="py-[48px] w-full flex justify-center">
          <Button onClick={endTest}>시연 종료하기</Button>
        </section>
      </div>
    </article>
  );
};

export default ServiceMain;
