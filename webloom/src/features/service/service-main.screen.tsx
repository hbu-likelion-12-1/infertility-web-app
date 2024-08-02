"use client";

import React from 'react';
import useMatchQuery from "@/features/service/query/get-match.query";
import AppLoading from "@/shared/ui/loading/loading.component";

import ServiceMainHeader from "./service-main-header.component";
import MindShareInteraction from "@/features/service/mind-share.component";
import VoiceShareInteraction from "@/features/service/voice-share.component";


const ServiceMain = () => {
  const { data: matchDetails, isLoading } = useMatchQuery();

  if (isLoading || !matchDetails) return <AppLoading/>;

  return (
    <article className="w-full h-full flex flex-col">
      <ServiceMainHeader/>
      <div className="w-full h-full flex flex-col py-[24px] pb-[72px] px-[20px]">
        <MindShareInteraction/>
        <div className="pb-[64px]"/>
        <VoiceShareInteraction match={matchDetails}/>
      </div>
    </article>
  );
};

export default ServiceMain;
