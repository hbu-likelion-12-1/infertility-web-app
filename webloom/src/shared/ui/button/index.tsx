import React, { ReactNode } from 'react';
import clsx from "clsx";
import { ButtonRoundType, ButtonTheme, getButtonRound, getButtonTheme } from "./constants";

interface Props {
  className?: string;
  round?: ButtonRoundType;
  theme?: ButtonTheme;
  onClick: () => void;
  children: ReactNode;
  prefixIcon?: ReactNode;
}

const Button: React.FC<Props> = ({
                                   className, round = "normal", theme = "primary", onClick, children, prefixIcon
                                 }) => {

  const onClickWrapper = () => {
    if (theme === "disabled") return;
    onClick();
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
    >
      {prefixIcon}
      {children}
    </button>
  );
};

export default Button;
