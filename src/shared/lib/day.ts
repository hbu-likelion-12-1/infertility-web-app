import dayjs from "dayjs";

const korDay: Record<number, string> = {
  0: "월요일",
  1: "화요일",
  2: "수요일",
  3: "목요일",
  4: "금요일",
  5: "토요일",
  6: "일요일",
};

export const parseDayToKor = (day: number) => korDay[day];

export const dayToDate = (d: string) => {
  const o = dayjs(d);
  const day = parseDayToKor(o.day());
  return `${o.format("YY.MM.DD")}.${day}`;
};
