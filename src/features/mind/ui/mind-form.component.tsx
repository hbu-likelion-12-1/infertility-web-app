"use client";

import React from 'react';
import clsx from "clsx";
import useMindQuery from "@/features/mind/query/mind.query";
import AppLoading from "@/shared/ui/loading/loading.component";
import useMatchQuery from "@/features/service/query/get-match.query";
import EmotionRadioForm from "@/features/mind/ui/emotion-radio.form";
import Typo from "@/shared/ui/typography/typo.component";


interface Props {
  id: string;
}

const MindForm: React.FC<Props> = ({ id }) => {
  const { data: mindDetails, isLoading } = useMindQuery(id);
  const { data: matchDetails } = useMatchQuery();

  if (!mindDetails || isLoading || !matchDetails) return <AppLoading/>;

  return (
    <>
      <section
        className={clsx([
          "w-full py-[24px] px-[20px]",
          "bg-primary-2 rounded-[24px]",
          "flex flex-col"
        ])}
      >
        <Typo size="18" bold>현재 본인의 기분을 선택해주세요.</Typo>

        <EmotionRadioForm
          emotion={mindDetails.emotion}
          onChange={() => {
          }}
        />
      </section>

      <div className="pb-[20px]"/>
      <section
        className={clsx([
          "w-full py-[24px] px-[20px]",
          "bg-primary-2 rounded-[24px]",
          "flex flex-col"
        ])}
      >
        <Typo size="18" bold>{matchDetails.question.content}</Typo>

        <div className="w-full flex flex-col">
          <textarea
            value={mindDetails.content}
            className={clsx([
              "w-full p-[24px]",
              "rounded-xl resize-none text-black"
            ])}
            placeholder="최대 200자 입력 가능합니다."
            readOnly
          />
        </div>
      </section>
    </>
  );
};

export default MindForm;
