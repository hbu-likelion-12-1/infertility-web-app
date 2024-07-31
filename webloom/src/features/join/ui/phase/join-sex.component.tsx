import React, { useState } from 'react';
import JoinLayout from "@/features/join/ui/join.layout";
import { JoinPhase } from "@/features/join/constants/enum";
import useJoinStore from "@/features/join/lib/use-join.store";
import Radio from "@/shared/ui/radio-button/radio.component";

export type Sex = "F" | "M";

const JoinSelectSex = () => {
  const { setSignupForm, signupForm } = useJoinStore();
  const [sex, setSex] = useState<Sex>();

  // TODO: 타입 수정해보기
  const onChangeSex = (value: any) => {
    setSex(value);
    setSignupForm({ ...signupForm, sex: value });
  };

  return (
    <JoinLayout
      title="성별을 선택해주세요."
      next={JoinPhase.BIRTHDAY}
      buttonText="다음"
      buttonDisabled={!sex}
    >
      <Radio.Provider
        items={["F", "M"]}
        current={sex as string}
        setter={onChangeSex}
        className="flex flex-col gap-y-[24px] items-center"
      >
        <Radio.Button item="F" className="w-[200px]">
          여자
        </Radio.Button>
        <Radio.Button item="M" className="w-[200px]">
          남자
        </Radio.Button>
      </Radio.Provider>
    </JoinLayout>
  );
};

export default JoinSelectSex;
