export type TypoSize = "18" | "24";

export const TypoSizeDict: Record<TypoSize, string> = {
  18: "text-[18px]",
  24: "text-[24px]",
};

export type TypoColor = "black" | "white" | "sub";

export const TypoColorDict: Record<TypoColor, string> = {
  black: "text-black",
  white: "text-white",
  sub: "text-slate-700",
};
