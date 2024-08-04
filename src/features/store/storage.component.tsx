import React from 'react';
import { Question } from "@/types/object";
import clsx from "clsx";
import IconUtils from "@/shared/ui/IconUtils";
import { useRouter } from "next/navigation";

interface Props {
  data: Question;
}

const Storage: React.FC<Props> = ({ data }) => {
  const { content, id } = data;
  const router = useRouter();

  const onClickStorage = (questionId: string) =>
    router.push(`/service/mind/both/${questionId}`)

  return (
    <button
      onClick={() => onClickStorage(String(id))}
      className={clsx([
        "w-full p-[24px]",
        "flex justify-between shadow-card",
        "text-accent-red bg-white rounded-xl",
        "cursor-pointer",
      ])}
    >
      <span className="text-[18px]">{content}</span>
      <IconUtils.NextPrimary/>
    </button>
  );
};

export default Storage;
