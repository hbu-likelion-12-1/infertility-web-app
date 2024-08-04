export type TypoSize = "12" | "14" | "16" | "18" | "21" | "24" | "28" | "32" | "45";

export const TypoSizeDict: Record<TypoSize, string> = {
  12: "text-[12px]",
  14: "text-[14px]",
  16: "text-[16px]",
  18: "text-[18px]",
  21: "text-[21px]",
  24: "text-[24px]",
  28: "text-[28px]",
  32: "text-[32px]",
  45: "text-[45px]",
};

export type TypoColor = "black" | "white" | "primary" | "gray-0" | "sub" | "whiteGray";

export const TypoColorDict: Record<TypoColor, string> = {
  black: "text-black",
  white: "text-white",
  "gray-0": "text-gray-0",
  whiteGray: "text-slate-400",
  sub: "text-slate-700",
  primary: "text-primary-0",
};
