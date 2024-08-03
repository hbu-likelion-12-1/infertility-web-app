import React, { useEffect, useState } from 'react';
import JoinLayout from "@/features/join/ui/join.layout";
import { JoinPhase } from "@/features/join/constants/enum";
import useJoinStore from "@/features/join/lib/use-join.store";
import Select from "@/shared/ui/select/select.component";
import birthdayOptionsUtil from "@/features/join/lib/birthday-options.util";

const yearOptions = birthdayOptionsUtil.year();
const monthOptions = birthdayOptionsUtil.month();
const dayOptions = birthdayOptionsUtil.day();

interface LocationState {
  city: string;
  region: string;
  town: string;
}


const JoinLocation = () => {
  const { setSignupForm, signupForm } = useJoinStore();
  const [location, setLocation] = useState<Partial<LocationState>>({
    city: undefined, region: undefined, town: undefined,
  });

  const pass = Object.values(location).every(v => v !== undefined);

  const onChangeSelectOption = (value: unknown, key: keyof LocationState) => {
    const { value: v } = value as { value: string };
    setLocation(prev => ({ ...prev, [key]: v }));
  };

  useEffect(() => {
    if (!pass) return;
    const { city, town, region } = location;
    setSignupForm({ ...signupForm, city, region, town });
  }, [location, pass]);

  return (
    <JoinLayout
      title="살고 있는 지역을 선택해주세요."
      next={JoinPhase.INFER_PERIOD}
      buttonText="다음"
      buttonDisabled={!pass}
    >
      <section className="flex gap-x-3">
        <Select
          options={yearOptions}
          placeholder="시•도"
          onChange={v => onChangeSelectOption(v, "city")}
          className="!flex-1"
        />
        <Select
          options={monthOptions}
          placeholder="시•군•구"
          className="!flex-1"
          onChange={v => onChangeSelectOption(v, "region")}
        />
        <Select
          options={dayOptions}
          placeholder="동•읍•면"
          className="!flex-1"
          onChange={v => onChangeSelectOption(v, "town")}
        />
      </section>
    </JoinLayout>
  );
};

export default JoinLocation;
