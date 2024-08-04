export type TypoSize = "12" | "14" | "18" | "21" | "24" | "32" | "45";

export const TypoSizeDict: Record<TypoSize, string> = {
  12: "text-[12px]",
  14: "text-[14px]",
  18: "text-[18px]",
  21: "text-[21px]",
  24: "text-[24px]",
  32: "text-[32px]",
  45: "text-[45px]",
};

export type TypoColor = "black" | "white" | "primary" | "sub" | "whiteGray";

export const TypoColorDict: Record<TypoColor, string> = {
  black: "text-black",
  white: "text-white",
  whiteGray: "text-slate-400",
  sub: "text-slate-700",
  primary: "text-primary-0",
};
