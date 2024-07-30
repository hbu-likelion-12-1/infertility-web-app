export type ButtonRoundType = "normal" | "rounded" | string;
export type ButtonTheme = "primary" | "secondary" | "disabled" | "radio" | string;

const ButtonRoundDict: Record<ButtonRoundType, string> = {
  normal: "rounded-[15px]",
  rounded: "rounded-[50px]",
};

export const getButtonRound = (type: ButtonRoundType) => {
  const prop = ButtonRoundDict[type];

  if (!prop) {
    return type;
  }

  return prop;
};


const ThemeDict: Record<ButtonTheme, string> = {
  primary: "text-white bg-primary-0 hover:bg-primary-1",
  secondary: "text-black bg-primary-1 hover:bg-primary-0",
  radio: "text-black bg-primary-1 hover:bg-primary-0 border border-accent-red",
  disabled: "text-black bg-background-1 cursor-not-allowed",
};

export const getButtonTheme = (type: ButtonTheme) => {
  const prop = ThemeDict[type];

  if (!prop) {
    return type;
  }

  return prop;
};
