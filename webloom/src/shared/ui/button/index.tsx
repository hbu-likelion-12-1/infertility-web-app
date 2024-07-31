import React, { HTMLAttributes, MouseEvent, ReactNode } from 'react';
import clsx from "clsx";
import { ButtonRoundType, ButtonTheme, getButtonRound, getButtonTheme } from "./constants";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  round?: ButtonRoundType;
  theme?: ButtonTheme;
  children: ReactNode;
  prefixIcon?: ReactNode;
}

const Button: React.FC<Props> = ({
                                   className,
                                   round = "normal",
                                   theme = "primary",
                                   onClick,
                                   children,
                                   prefixIcon,
                                   ...props
                                 }) => {

  const onClickWrapper = (e: MouseEvent<HTMLButtonElement>) => {
    if (theme === "disabled") return;
    onClick && onClick(e);
  };

  return (
    <button
      className={clsx([
        "min-h-[56px] flex justify-center items-center",
        getButtonRound(round),
        getButtonTheme(theme),
        "font-bold",
        "transition-colors duration-100",
        "shadow-button",
        "flex items-center justify-center px-5 gap-x-5",
        className,
      ])}
      onClick={onClickWrapper}
      {...props}
    >
      {prefixIcon}
      {children}
    </button>
  );
};

export default Button;
