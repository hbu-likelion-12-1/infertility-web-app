"use client";

import React, { useState } from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import { useRouter } from "next/navigation";
import { MindBothTab } from "@/features/mind/constant/enum";
import clsx from "clsx";
import useBothMindQuery from "@/features/mind/query/both-mind.query";
import AppLoading from "@/shared/ui/loading/loading.component";


const MindBothViewer = ({ questionId }: { questionId: string }) => {
  const { bothMinds, isLoading } = useBothMindQuery(questionId);
  const router = useRouter();

  const [tab, setTab] = useState<MindBothTab>(MindBothTab.WIFE);

  const onClickBack = () => router.push("/service");

  if (!bothMinds || isLoading) return <AppLoading/>;

  return (
    <article className="PageLayout">
      <header className="w-full h-[42px] flex py-[16px] my-[16px]">
        <button
          onClick={onClickBack}
          className="flex items-center gap-x-3"
        >
          <IconUtils.Previous/>
          <h1 className="text-[24px] font-bold">
            마음 공유 보관함
          </h1>
        </button>
      </header>

      <section className="w-full h-[48px] flex">
        <button
          onClick={() => setTab(MindBothTab.WIFE)}
          className={clsx([
            "flex-1 text-center",
            tab === MindBothTab.WIFE && "text-primary-0 border-b-[3px] border-primary-0",
            tab !== MindBothTab.WIFE && "text-slate-300 border-b-[3px] border-slate-300"
          ])}
        >
          아내 마음
        </button>

        <button
          onClick={() => setTab(MindBothTab.HUSBAND)}
          className={clsx([
            "flex-1 text-center",
            tab === MindBothTab.HUSBAND && "text-primary-0 border-b-[3px] border-primary-0",
            tab !== MindBothTab.HUSBAND && "text-slate-300 border-b-[3px] border-slate-300"
          ])}
        >
          남편 마음
        </button>
      </section>

      <section>
      </section>
    </article>
  );
};

export default MindBothViewer;
