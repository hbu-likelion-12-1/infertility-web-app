import { TypoColor, TypoColorDict, TypoSize, TypoSizeDict } from "@/shared/ui/typography/constant/property";

type Dict = Record<string | number, string>;

const getter = <T extends Dict>(dict: T, key: keyof T) => {
  if (!dict[key]) {
    return key;
  }
  return dict[key];
};

export const getTypoSize = (key: TypoSize) => getter(TypoSizeDict, key);
export const getTypoColor = (key: TypoColor) => getter(TypoColorDict, key);
