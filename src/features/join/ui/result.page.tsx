"use client";

import React from "react";
import useJoinStore from "@/features/join/lib/use-join.store";
import clsx from "clsx";
import Button from "@/shared/ui/button";
import getDepressionResult from "@/shared/lib/depression";
import { useRouter } from "next/navigation";
import Typo from "@/shared/ui/typography/typo.component";

const JoinResult = () => {
  const { depressionScore } = useJoinStore();
  const { title, content } = getDepressionResult(depressionScore);
  const { push } = useRouter();

  const onClickNext = () => push("/router");

  return (
    <article className={clsx([
      "w-full h-full px-[12px]",
      "FlexCol items-center",
    ])}>
      <Typo size="21" bold className="pt-[56px] pb-[68px]">우울증 테스트 결과</Typo>

      <section>
        <Typo size="32" color="primary" bold>{depressionScore}점</Typo>
      </section>

      <nav className="w-full flex justify-center px-[32px] pt-[60px]">
        <section className={clsx([
          "flex flex-col items-center text-center",
          "shadow-card w-full py-[28px] px-[32px]",
          "rounded-[14px] border border-gray-100",
        ])}>
          <Typo size="18" color="primary" bold className="pb-[12px]">{title}</Typo>
          <Typo size="16" className="w-3/4">{content}</Typo>
        </section>
      </nav>

      <dd className="flex-1"/>

      <section className="mb-[60px] w-full">
        <Button
          theme="primary"
          className="w-full"
          onClick={onClickNext}
        >
          고생하셨어요! 이제 마지막 단계만 남았어요.
        </Button>
      </section>
    </article>
  );
};

export default JoinResult;
