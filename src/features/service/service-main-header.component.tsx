import React from 'react';
import useMatchQuery from "@/features/service/query/get-match.query";
import useAuth from "@/shared/lib/use-auth.hook";
import clsx from "clsx";
import IconUtils from "@/shared/ui/IconUtils";
import { MatchService } from "@/features/service/lib/match";

const ServiceMainHeader = () => {
  const { data: matchDetails, isLoading } = useMatchQuery();
  const { user } = useAuth();
  const isWrittenMind = (() => {
    if (!user || !matchDetails) return false;
    return MatchService.checkUserWrittenMind(user, matchDetails);
  })();

  if (isLoading && !matchDetails) return null;

  return (
    <header
      className={clsx([
        "w-full h-[300px] relative p-[20px]",
        "rounded-b-[25px]",
        "bg-gradient-bloom",
        "flex flex-col items-center gap-y-[18px]",
      ])}
    >
      <section className="flex flex-col w-full">
        <h1 className="font-bold text-[32px]">{user?.username}님,</h1>
        <span className="text-[20px] text-black">
          {isWrittenMind && "마음 공유를 완료하였습니다."}
          {!isWrittenMind && "오늘의 마음을 공유해주세요."}
        </span>
      </section>

      <section className="flex-1"/>

      <section
        className={clsx([
          "min-w-full min-h-[140px] mx-[20px] p-[24px] relative",
          "bg-primary-2 shadow-button",
          "flex flex-col rounded-[25px]",
        ])}
      >
        <h4 className="text-[14px] text-[#333333]">오늘의 마음 공유 질문</h4>
        <h2 className="text-[18px] text-black font-bold pt-[20px]">{matchDetails?.question.content}</h2>
        <div className="right-0 top-[-84px] absolute">
          <IconUtils.BigFlower/>
        </div>
      </section>
    </header>
  );
};

export default ServiceMainHeader;
