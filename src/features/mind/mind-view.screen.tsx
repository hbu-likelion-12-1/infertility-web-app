"use client";

import React from 'react';
import MindForm from "@/features/mind/mind-form.component";
import IconUtils from "@/shared/ui/IconUtils";
import { useRouter } from "next/navigation";

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
          <h1 className="text-[24px] font-bold">
            마음 공유하기
          </h1>
        </button>
      </header>

      <MindForm id={id}/>
      <div className="flex-1"/>
    </article>
  );
};

export default MindView;
