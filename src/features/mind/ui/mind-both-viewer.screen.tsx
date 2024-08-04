"use client";

import React, { useEffect, useState } from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import { useRouter } from "next/navigation";
import { MindBothTab } from "@/features/mind/constant/enum";
import clsx from "clsx";
import useBothMindQuery from "@/features/mind/query/both-mind.query";
import AppLoading from "@/shared/ui/loading/loading.component";
import { dayToDate } from "@/shared/lib/day";
import Typo from "@/shared/ui/typography/typo.component";
import MindForm from "@/features/mind/ui/mind-form.component";


const MindBothViewer = ({ questionId }: { questionId: string }) => {
  const { bothMinds, isLoading } = useBothMindQuery(questionId);
  const router = useRouter();

  const [tab, setTab] = useState<MindBothTab>(MindBothTab.WIFE);
  const [day, setDay] = useState<string>();

  const onClickBack = () => router.push("/service/storage");

  const getId = (bothMinds: { wife: { id: number }, husband: { id: number } }) => {
    if (tab === MindBothTab.WIFE) return String(bothMinds.wife.id);
    return String(bothMinds.husband.id);
  };

  useEffect(() => {
    if (!bothMinds) return;
    const date = tab === MindBothTab.WIFE
      ? bothMinds.wife.createdAt
      : bothMinds.husband.createdAt;
    setDay(dayToDate(date))
  }, [tab, bothMinds]);

  if (!bothMinds || isLoading) return <AppLoading/>;

  return (
    <article className="PageLayout">
      <header className="w-full h-[42px] flex py-[16px] my-[16px] px-[19px]">
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

      <section className="w-full PageLayout px-[18px]">
        <nav className="w-full flex justify-center mt-[14px] mb-[24px]">
          <div className="py-3 px-6 rounded-[50px] bg-primary-2">
            <Typo bold>{day}</Typo>
          </div>
        </nav>

        <MindForm id={getId(bothMinds)}/>
      </section>
    </article>
  );
};

export default MindBothViewer;
