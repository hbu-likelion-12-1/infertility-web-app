"use client";

import React from 'react';
import useJoinStore from "@/features/join/lib/use-join.store";
import { JoinPhase } from "@/features/join/constants/enum";
import JoinNickname from "@/features/join/ui/phase/join-nickname.component";
import ProgressBar from "@/features/join/ui/progress-bar.component";
import convertProgress from "@/features/join/lib/progress-converter.util";
import JoinSelectSex from "@/features/join/ui/phase/join-sex.component";
import JoinBirthday from "@/features/join/ui/phase/join-birthday.component";
import JoinLocation from "@/features/join/ui/phase/join-location.component";
import JoinInferPeriod from "@/features/join/ui/phase/join-infer-period.component";
import JoinInferCare from "@/features/join/ui/phase/join-infer-care.component";
import JoinInferCost from "@/features/join/ui/phase/join-infer-cost.component";
import JoinInferCause from "@/features/join/ui/phase/join-infer-cause.component";
import JoinInferSupport from "@/features/join/ui/phase/join-infer-support.component";
import JoinWorkPlace from "@/features/join/ui/phase/join-infer-workplace.component";
import JoinCommunication from "@/features/join/ui/phase/join-infer-communication.component";


const JoinScreenPage = () => {
  const { phase } = useJoinStore();
  const progress = convertProgress(phase);

  return (
    <article className="h-full w-full">
      <div className="pt-[23px]"/>
      <ProgressBar completed={progress}/>

      {phase === JoinPhase.NICKNAME && <JoinNickname/>}
      {phase === JoinPhase.SEX && <JoinSelectSex/>}
      {phase === JoinPhase.BIRTHDAY && <JoinBirthday/>}
      {phase === JoinPhase.LIVING && <JoinLocation/>}

      {phase === JoinPhase.INFER_PERIOD && <JoinInferPeriod/>}
      {phase === JoinPhase.INFER_CARE && <JoinInferCare/>}
      {phase === JoinPhase.INFER_CAUSE && <JoinInferCause/>}
      {phase === JoinPhase.INFER_COST && <JoinInferCost/>}
      {phase === JoinPhase.INFER_SUPPORT && <JoinInferSupport/>}
      {phase === JoinPhase.INFER_WORK_COMPREHENSION && <JoinWorkPlace/>}
      {phase === JoinPhase.INFER_COMMUNICATION && <JoinCommunication/>}
    </article>
  );
};

export default JoinScreenPage;

