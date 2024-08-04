import React from 'react';
import clsx from "clsx";

import useFeedbackQuery from "@/features/bloom/query/get-feedback.query";
import AppLoading from "@/shared/ui/loading/loading.component";
import Button from "@/shared/ui/button";
import useMatchQuery from "@/features/service/query/get-match.query";
import { Server } from "@/service/api";
import Typo from "@/shared/ui/typography/typo.component";


const BloomReport = () => {
  const { data: bloom, isLoading, refetch: refetchReport } = useFeedbackQuery();
  const { data: matchDetails, refetch } = useMatchQuery();

  const paragraphs = (() => {
    if (!bloom?.feedback?.content) return ["현재 피드백이 존재하지 않습니다."];
    const feedback: string = bloom.feedback.content
      .replaceAll("*", "")
      .replaceAll("---", "")
      .replaceAll("#", "");
    const feeds: string[] = feedback.split("\n");

    return feeds;
  })();

  const onClickGenerateNextQuestion = async () => {
    try {
      if (!matchDetails) return;
      if (!matchDetails.husband?.mindId) {
        return alert(`${matchDetails.husband.username}님께서 질문에 대한 대답을 작성해야 합니다.`);
      }
      if (!matchDetails.wife?.mindId) {
        return alert(`${matchDetails.wife.username}님께서 질문에 대한 대답을 작성해야 합니다.`);
      }
      await Server.Question.create(matchDetails.id);
      await refetch();
      await refetchReport();
      alert("질문이 새로 생성되었습니다!");
    } catch (error) {
      console.error(error);
    }
  }

  if (!bloom || isLoading) return <AppLoading/>;

  return (
    <>
      <header className="w-full items-center flex py-[16px] mb-[21px] my-[16px] justify-between">
        <Typo size="24" bold>
          Bloom의 응원과 조언
        </Typo>
        <Button onClick={onClickGenerateNextQuestion}>
          다음 질문 생성
        </Button>
      </header>

      <section
        className={clsx([
          "w-full py-[24px] px-[20px]",
          "bg-primary-2 rounded-[24px]",
          "flex flex-col"
        ])}
      >
        {paragraphs.map((p, i) => (
          <Typo size="16" className="leading-6" key={i}>
            {p}
          </Typo>
        ))}
      </section>

      <header className="w-full h-[42px] flex flex-col py-[16px] mb-[21px] my-[16px]">
        <Typo size="24" bold>
          주간 부부 감정 추이
        </Typo>
        <img src="/images/report.png"/>
      </header>
    </>
  );
};

export default BloomReport;
