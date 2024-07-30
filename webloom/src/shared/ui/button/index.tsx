import React, { ReactNode } from 'react';
import clsx from "clsx";
import { ButtonRoundType, ButtonTheme, getButtonRound, getButtonTheme } from "./constants";

interface Props {
  classNames?: string;
  round?: ButtonRoundType;
  theme?: ButtonTheme;
  onClick: () => void;
  children: ReactNode;
}

const Button: React.FC<Props> = ({
                                   classNames, round = "normal", theme = "primary", onClick, children,
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
        "transition-colors duration-100",
        "shadow-button",
        classNames,
      ])}
      onClick={onClickWrapper}
    >
      {children}
    </button>
  );
};

export default Button;
