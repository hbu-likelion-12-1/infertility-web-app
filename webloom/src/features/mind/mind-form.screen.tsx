"use client";

import React, { useState } from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import useMatchQuery from "@/features/service/query/get-match.query";
import Radio from "@/shared/ui/radio-button/radio.component";
import { Emotion } from "@/types/enum";
import Button from "@/shared/ui/button";
import { Server } from "@/service/api";

const MindForm = () => {
  const router = useRouter();
  const { data: matchDetails, refetch } = useMatchQuery();
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState<Emotion>();
  const submitDisabled = !emotion || content.trim().length === 0;

  const onClickBack = () => router.push("/service");

  const onEnterContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > 200) return;
    setContent(e.target.value);
  };


  const onSubmit = async () => {
    if (!matchDetails?.question.id || !emotion) return;
    const questionId = matchDetails.question.id;

    try {
      await Server.Question.answerMind(questionId, { emotion, content });
      alert("마음이 공유되었습니다.");
      await refetch();
      router.push("/service");
    } catch (error) {
      console.error(error);
    }
  }

  if (!matchDetails) return null;

  return (
    <article className="w-full h-full flex flex-col px-[18px]">
      <header className="w-full h-[42px] flex py-[16px] my-[16px]">
        <button
          onClick={onClickBack}
          className="flex items-center gap-x-3"
        >
          <IconUtils.Previous/>
          <h1 className="text-[24px] font-bold">
            마음 공유하기
          </h1>
        </button>
      </header>

      <section
        className={clsx([
          "w-full py-[24px] px-[20px]",
          "bg-primary-2 rounded-[24px]",
          "flex flex-col"
        ])}
      >
        <h1 className="text-[18px] font-bold">현재 본인의 기분을 선택해주세요.</h1>

        <Radio.Provider
          current={emotion}
          items={[Emotion.NICE, Emotion.GOOD, Emotion.NORMAL, Emotion.BAD, Emotion.WORST]}
          setter={em => setEmotion(em as Emotion)}
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
        <h1 className="text-[18px] font-bold pb-4">{matchDetails.question.content}</h1>

        <div className="w-full flex flex-col">
          <textarea
            value={content}
            onChange={onEnterContent}
            className={clsx([
              "w-full min-h-[250px] p-[24px]",
              "rounded-xl resize-none"
            ])}
            placeholder="최대 200자 입력 가능합니다."
          />
          <nav className="flex text-[14px] text-gray-0 pt-2 self-end">
            <span>{content.length}</span>
            <span>/</span>
            <span>200</span>
          </nav>
        </div>
      </section>

      <div className="flex-1"/>
      <section className="w-full pb-[60px]">
        <Button
          onClick={onSubmit}
          theme={submitDisabled ? "disabled" : "primary"}
          className="w-full"
        >
          {submitDisabled ? "필수 항목을 작성해주세요" : "작성 완료"}
        </Button>
      </section>
    </article>
  );
};

export default MindForm;
