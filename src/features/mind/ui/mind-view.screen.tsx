"use client";

import React from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import { useRouter } from "next/navigation";
import MindForm from "@/features/mind/ui/mind-form.component";
import Typo from "@/shared/ui/typography/typo.component";

const MindView = ({ id }: { id: string }) => {
  const router = useRouter();
  const onClickBack = () => router.push("/service");

  return (
    <article className="w-full h-full flex flex-col px-[18px]">
      <header className="w-full h-[42px] flex py-[16px] my-[16px]">
        <button
          onClick={onClickBack}
          className="flex items-center gap-x-3"
        >
          <IconUtils.Previous/>
          <Typo size="24" bold>
            마음 공유하기
          </Typo>
        </button>
      </header>

      <MindForm id={id}/>
      <div className="flex-1"/>
    </article>
  );
};

export default MindView;
