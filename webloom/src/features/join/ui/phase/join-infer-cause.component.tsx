import React, { useState } from 'react';
import JoinLayout from "@/features/join/ui/join.layout";
import { JoinPhase } from "@/features/join/constants/enum";
import useJoinStore from "@/features/join/lib/use-join.store";
import Radio, { Item } from "@/shared/ui/radio-button/radio.component";
import { InferCause } from "@/types/enum";


const causeItems = [
  InferCause.FEMALE,
  InferCause.MALE,
  InferCause.BIDIRECT,
  InferCause.UNKNOWN,
];

const JoinInferCause = () => {
  const { setSignupForm, signupForm } = useJoinStore();
  const [cause, setCause] = useState<InferCause>();

  const onChangeInferCause = (value: InferCause) => {
    setCause(value);
    setSignupForm({ ...signupForm, cause: value });
  };

  return (
    <JoinLayout
      title="난임의 주된 원인을 선택해주세요."
      next={JoinPhase.INFER_COST}
      buttonText="다음"
      buttonDisabled={!cause}
    >
      <Radio.Provider
        items={causeItems}
        current={cause as string}
        setter={onChangeInferCause as (v: Item) => void}
        className="flex flex-col gap-y-[24px] items-center"
      >
        <Radio.Button item={InferCause.FEMALE} className="w-[200px]">
          여성 요인
        </Radio.Button>
        <Radio.Button item={InferCause.MALE} className="w-[200px]">
          남성 요인
        </Radio.Button>
        <Radio.Button item={InferCause.BIDIRECT} className="w-[200px]">
          양측 요인
        </Radio.Button>
        <Radio.Button item={InferCause.UNKNOWN} className="w-[200px]">
          원인 불명
        </Radio.Button>
      </Radio.Provider>
    </JoinLayout>
  );
};

export default JoinInferCause;
