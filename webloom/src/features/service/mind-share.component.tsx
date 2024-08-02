import React from 'react';
import useMatchQuery from "@/features/service/query/get-match.query";
import clsx from "clsx";
import IconUtils from "@/shared/ui/IconUtils";
import { useRouter } from "next/navigation";


const MindShareInteraction = () => {
  const { data: matchDetails, isLoading } = useMatchQuery();
  const router = useRouter();
  const isWifeWrittenMind = !!matchDetails?.wife?.mindId;
  const isHusbandWrittenMind = !!matchDetails?.husband?.mindId;

  const redirectMindForm = () => router.push("/service/mind/form");

  const onClickWifeMind = () => {
    if (!isWifeWrittenMind) return redirectMindForm();
    router.push(`/service/mind/${matchDetails?.wife.mindId}`);
  };

  const onClickHusbandMind = () => {
    if (!isHusbandWrittenMind) return redirectMindForm();
    router.push(`/service/mind/${matchDetails?.husband.mindId}`);
  };

  if (isLoading && !matchDetails) return null;

  return (
    <nav className="flex flex-col gap-y-[24px]">
      <article className="flex flex-col gap-y-3">
        <h3 className="text-[18px] font-bold">아내</h3>
        <button
          onClick={onClickWifeMind}
          className={clsx([
            "py-[20px] px-[24px]",
            "flex justify-between rounded-[24px]",
            "bg-white shadow-button",
          ])}
        >
          <span className="text-[18px] text-primary-0">
            {isWifeWrittenMind ? "마음 공유를 완료하였습니다!" : "마음을 공유해주세요"}
          </span>
          <IconUtils.Next/>
        </button>
      </article>

      <article className="flex flex-col gap-y-3">
        <h3 className="text-[18px] font-bold">남편</h3>
        <button
          onClick={onClickHusbandMind}
          className={clsx([
            "py-[20px] px-[24px]",
            "flex justify-between rounded-[24px]",
            "bg-white shadow-button",
          ])}
        >
          <span className="text-[18px] text-primary-0">
            {isHusbandWrittenMind ? "마음 공유를 완료하였습니다!" : "마음을 공유해주세요"}
          </span>
          <IconUtils.Next/>
        </button>
      </article>

    </nav>
  );
};

export default MindShareInteraction;
