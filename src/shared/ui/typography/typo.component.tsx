import React, { HTMLAttributes } from 'react';
import clsx from "clsx";
import { TypoColor, TypoSize } from "@/shared/ui/typography/constant/property";
import { getTypoColor, getTypoSize } from "@/shared/ui/typography/lib/getter";


interface CommonTypographyProps extends HTMLAttributes<HTMLSpanElement> {
  size?: TypoSize;
  color?: TypoColor;
  bold?: boolean;
}

const Typo: React.FC<CommonTypographyProps> = ({
                                                 size = "18",
                                                 color = "black",
                                                 className,
                                                 bold = false,
                                                 children,
                                                 ...props
                                               }) => {
  return (
    <span
      className={clsx([
        getTypoSize(size),
        getTypoColor(color),
        className,
        bold && "font-bold",
      ])}
      {...props}
    >
      {children}
    </span>
  );
};

export default Typo;
