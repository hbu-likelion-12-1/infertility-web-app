import React from 'react';
import { Question } from "@/types/object";
import clsx from "clsx";
import IconUtils from "@/shared/ui/IconUtils";

interface Props {
  data: Question;
}

const Storage: React.FC<Props> = ({ data }) => {
  const { content } = data;

  return (
    <button
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
