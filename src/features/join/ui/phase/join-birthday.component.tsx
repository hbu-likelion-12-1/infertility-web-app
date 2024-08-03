import React, { useEffect, useState } from 'react';
import JoinLayout from "@/features/join/ui/join.layout";
import { JoinPhase } from "@/features/join/constants/enum";
import useJoinStore from "@/features/join/lib/use-join.store";
import Select from "@/shared/ui/select/select.component";
import birthdayOptionsUtil from "@/features/join/lib/birthday-options.util";

const yearOptions = birthdayOptionsUtil.year();
const monthOptions = birthdayOptionsUtil.month();
const dayOptions = birthdayOptionsUtil.day();

interface DateState {
  year?: string;
  month?: string;
  day?: string;
}

const JoinBirthday = () => {
  const { setSignupForm, signupForm } = useJoinStore();
  const [date, setDate] = useState<DateState>({
    year: undefined, month: undefined, day: undefined,
  });
  const pass = Object.values(date).every(v => v !== undefined);

  const onChangeSelectOption = (value: unknown, key: keyof DateState) => {
    const { value: v } = value as { value: string };
    setDate(prev => ({ ...prev, [key]: v }));
  };

  useEffect(() => {
    if (!pass) return;
    const { year, month, day } = date;
    const birthday = `${year}-${month}-${day}`;
    setSignupForm({ ...signupForm, birthday });
  }, [date, pass]);

  return (
    <JoinLayout
      title="생년월일을 선택해주세요."
      next={JoinPhase.LIVING}
      buttonText="다음"
      buttonDisabled={!pass}
    >
      <section className="flex gap-x-3">
        <Select
          options={yearOptions}
          placeholder="YYYY"
          onChange={v => onChangeSelectOption(v, "year")}
          className="!flex-1"
        />
        <Select
          options={monthOptions}
          placeholder="MM"
          className="!flex-1"
          onChange={v => onChangeSelectOption(v, "month")}
        />
        <Select
          options={dayOptions}
          placeholder="DD"
          className="!flex-1"
          onChange={v => onChangeSelectOption(v, "day")}
        />
      </section>
    </JoinLayout>
  );
};

export default JoinBirthday;
