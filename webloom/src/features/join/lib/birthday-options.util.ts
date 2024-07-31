import dayjs from "dayjs";


const yearStart = 1970;
const monthStart = 1;

const mapOptionToString = (arr: (string | number)[]) =>
  arr.map(v => ({
    label: String(v),
    value: String(v),
  }));


const createYearOptions = () => {
  const result: number[] = [];

  for (let i = 0; i < 50; i++) {
    result.push(yearStart + i);
  }

  return mapOptionToString(result);
};

const createMonthOptions = () => {
  const result: number[] = [];

  for (let i = 1; i <= 12; i++) {
    result.push(monthStart + i);
  }

  return mapOptionToString(result);
};

const createDayOptions = () => {
  const day = dayjs().date();
  const result: number[] = [];

  for (let i = 1; i <= day; i++) {
    result.push(i);
  }

  return mapOptionToString(result);
};

const birthDayUtils = {
  year: createYearOptions,
  month: createMonthOptions,
  day: createDayOptions,
};

export default birthDayUtils;
