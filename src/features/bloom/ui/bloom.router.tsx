"use client";

import React, { useState } from 'react';
import { BloomTab } from "@/features/bloom/constant/enum";
import BloomReport from "@/features/bloom/ui/bloom-report.screen";
import clsx from "clsx";
import BloomRecommendation from "@/features/bloom/ui/bloom-recommendation.screen";

const BloomRouter = () => {
  const [tab, setTab] = useState(BloomTab.REPORT);

  return (
    <article className="w-full h-full flex flex-col px-[20px]">
      <section className="w-full h-[48px] flex">
        <button
          onClick={() => setTab(BloomTab.REPORT)}
          className={clsx([
            "flex-1 text-center",
            tab === BloomTab.REPORT && "text-primary-0 border-b-[3px] border-primary-0",
            tab !== BloomTab.REPORT && "text-slate-300 border-b-[3px] border-slate-300"
          ])}
        >
          Bloom 리포트
        </button>

        <button
          onClick={() => setTab(BloomTab.RECOMMENDATION)}
          className={clsx([
            "flex-1 text-center",
            tab === BloomTab.RECOMMENDATION && "text-primary-0 border-b-[3px] border-primary-0",
            tab !== BloomTab.RECOMMENDATION && "text-slate-300 border-b-[3px] border-slate-300"
          ])}
        >
          Bloom 추천
        </button>
      </section>

      {tab === BloomTab.REPORT && <BloomReport/>}
      {tab === BloomTab.RECOMMENDATION && <BloomRecommendation/>}
    </article>
  );
};

export default BloomRouter;
