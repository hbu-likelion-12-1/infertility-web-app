"use client";

import React, { useState } from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import useMatchQuery from "@/features/service/query/get-match.query";
import { Emotion } from "@/types/enum";
import Button from "@/shared/ui/button";
import { Server } from "@/service/api";
import Typo from "@/shared/ui/typography/typo.component";
import EmotionRadioForm from "@/features/mind/ui/emotion-radio.form";

interface MindFormProps {
}

const MindFormScreen: React.FC<MindFormProps> = () => {
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

  const onChangeEmotion = (em: Emotion) => {
    setEmotion(em);
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
    <article className="w-full h-full overflow-y-scroll overflow-x-hidden flex flex-col px-[18px]">
      <header className="w-full h-[42px] flex py-[16px] my-[16px]">
        <button
          onClick={onClickBack}
          className="flex items-center gap-x-3"
        >
          <IconUtils.Previous/>
          <Typo size="24" bold>마음 공유하기</Typo>
        </button>
      </header>

      <section
        className={clsx([
          "w-full py-[24px] px-[20px]",
          "bg-primary-2 rounded-[24px]",
          "flex flex-col"
        ])}
      >
        <Typo size="18" bold>현재 본인의 기분을 선택해주세요.</Typo>
        <EmotionRadioForm
          emotion={emotion}
          onChange={onChangeEmotion}
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
        <Typo size="18" bold className="pb-4">{matchDetails.question?.content}</Typo>

        <div className="w-full flex flex-col">
          <textarea
            value={content}
            onChange={onEnterContent}
            className={clsx([
              "w-full min-h-[250px] p-[24px] text-black",
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
      <section className="w-full pt-3 pb-[60px]">
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

export default MindFormScreen;
