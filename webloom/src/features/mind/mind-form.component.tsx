"use client";

import React from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import clsx from "clsx";
import Radio from "@/shared/ui/radio-button/radio.component";
import { Emotion } from "@/types/enum";
import useMindQuery from "@/features/mind/query/mind.query";
import AppLoading from "@/shared/ui/loading/loading.component";


interface Props {
  id: string;
}

const MindForm: React.FC<Props> = ({ id }) => {
  const { data: mindDetails, isLoading } = useMindQuery(id);

  if (!mindDetails || isLoading) return <AppLoading/>;

  return (
    <>
      <section
        className={clsx([
          "w-full py-[24px] px-[20px]",
          "bg-primary-2 rounded-[24px]",
          "flex flex-col"
        ])}
      >
        <h1 className="text-[18px] font-bold">현재 본인의 기분을 선택해주세요.</h1>

        <Radio.Provider
          current={mindDetails.emotion}
          items={[Emotion.NICE, Emotion.GOOD, Emotion.NORMAL, Emotion.BAD, Emotion.WORST]}
          setter={v => {
          }}
        >
          <nav className="w-full flex gap-x-[18px] pt-[20px]">
            {/* TODO: ㅋㅋ 하드코딩 수정하기 */}
            <div className="flex flex-col items-center flex-1">
              <IconUtils.Happy/>
              <span className="text-[12px] font-bold pb-2">매우 좋음</span>
              <Radio.Button item={Emotion.NICE} radioMode/>
            </div>
            <div className="flex flex-col items-center flex-1">
              <IconUtils.Good/>
              <span className="text-[12px] font-bold pb-2">좋음</span>
              <Radio.Button item={Emotion.GOOD} radioMode/>
            </div>
            <div className="flex flex-col items-center flex-1">
              <IconUtils.Normal/>
              <span className="text-[12px] font-bold pb-2">보통</span>
              <Radio.Button item={Emotion.NORMAL} radioMode/>
            </div>
            <div className="flex flex-col items-center flex-1">
              <IconUtils.Bad/>
              <span className="text-[12px] font-bold pb-2">나쁨</span>
              <Radio.Button item={Emotion.BAD} radioMode/>
            </div>
            <div className="flex flex-col items-center flex-1">
              <IconUtils.Worst/>
              <span className="text-[12px] font-bold pb-2">매우 나쁨</span>
              <Radio.Button item={Emotion.WORST} radioMode/>
            </div>
          </nav>
        </Radio.Provider>
      </section>

      <div className="pb-[20px]"/>
      <section
        className={clsx([
          "w-full py-[24px] px-[20px]",
          "bg-primary-2 rounded-[24px]",
          "flex flex-col"
        ])}
      >
        <h1 className="text-[18px] font-bold pb-4">{mindDetails.content}</h1>

        <div className="w-full flex flex-col">
          <textarea
            value={mindDetails.content}
            className={clsx([
              "w-full p-[24px]",
              "rounded-xl resize-none"
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
