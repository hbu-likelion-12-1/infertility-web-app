import React from 'react';
import clsx from "clsx";

import useFeedbackQuery from "@/features/bloom/query/get-feedback.query";
import AppLoading from "@/shared/ui/loading/loading.component";


const BloomReport = () => {
  const { data: bloom, isLoading } = useFeedbackQuery();

  const paragraphs = (() => {
    if (!bloom?.feedback.content) return ["현재 피드백이 존재하지 않습니다."];
    const feedback: string = bloom.feedback.content;
    const feeds: string[] = feedback.split("\n");

    return feeds;
  })();

  if (!bloom || isLoading) return <AppLoading/>;

  return (
    <>
      <header className="w-full h-[42px] flex py-[16px] mb-[21px] my-[16px]">
        <h1 className="text-[24px] font-bold">
          Bloom의 응원과 조언
        </h1>
      </header>

      <section
        className={clsx([
          "w-full py-[24px] px-[20px]",
          "bg-primary-2 rounded-[24px]",
          "flex flex-col"
        ])}
      >
        {paragraphs.map((p, i) => (
          <span className="text-[16px] leading-6" key={i}>
            {p}
          </span>
        ))}
      </section>

      <header className="w-full h-[42px] flex py-[16px] mb-[21px] my-[16px]">
        <h1 className="text-[24px] font-bold">
          주간 부부 감정 추이
        </h1>

      </header>
      <section className="w-full flex text-center">
        준비 중입니다.
      </section>
    </>
  );
};

export default BloomReport;
