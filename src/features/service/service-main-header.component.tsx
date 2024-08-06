import React from 'react';
import useMatchQuery from "@/features/service/query/get-match.query";
import useAuth from "@/shared/lib/use-auth.hook";
import clsx from "clsx";
import IconUtils from "@/shared/ui/IconUtils";
import { MatchService } from "@/features/service/lib/match";
import Typo from "@/shared/ui/typography/typo.component";

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
        <Typo size="32" bold>{user?.username}님,</Typo>
        <Typo size="21">
          {isWrittenMind && "마음 공유를 완료하였습니다."}
          {!isWrittenMind && "오늘의 마음을 공유해주세요."}
        </Typo>
      </section>

      <section className="flex-1"/>

      <section
        className={clsx([
          "min-w-full min-h-[140px] mx-[20px] p-[24px] relative",
          "bg-primary-2 shadow-button",
          "flex flex-col rounded-[25px]",
        ])}
      >
        <Typo size="14">오늘의 마음 공유 질문</Typo>
        <Typo size="18" className="pt-[20px]" bold>{matchDetails?.question?.content}</Typo>
        <div className="right-0 top-[-84px] absolute">
          <IconUtils.BigFlower/>
        </div>
      </section>
    </header>
  );
};

export default ServiceMainHeader;
