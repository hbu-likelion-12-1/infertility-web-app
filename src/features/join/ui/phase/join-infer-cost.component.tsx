import React, { useState } from 'react';
import JoinLayout from "@/features/join/ui/join.layout";
import { JoinPhase } from "@/features/join/constants/enum";
import useJoinStore from "@/features/join/lib/use-join.store";
import Radio, { Item } from "@/shared/ui/radio-button/radio.component";
import { InferCost } from "@/types/enum";


const costItems = [
  InferCost.VERY_HIGH,
  InferCost.HIGH,
  InferCost.NORMAL,
  InferCost.LOW,
  InferCost.SUPER_LOW,
];

const JoinInferCost = () => {
  const { setSignupForm, signupForm } = useJoinStore();
  const [cost, setCost] = useState<InferCost>();

  const onChangeCost = (value: InferCost) => {
    setCost(value);
    setSignupForm({ ...signupForm, cost: value });
  };

  return (
    <JoinLayout
      title="난임 치료로 인한 경제적 부담 정도를 선택해주세요."
      next={JoinPhase.INFER_WORK_COMPREHENSION}
      buttonText="다음"
      buttonDisabled={!cost}
    >
      <Radio.Provider
        items={costItems}
        current={cost as string}
        setter={onChangeCost as (v: Item) => void}
        className="flex flex-col gap-y-[24px] items-center"
      >
        <Radio.Button item={InferCost.VERY_HIGH} className="w-[200px]">
          매우 높음
        </Radio.Button>
        <Radio.Button item={InferCost.HIGH} className="w-[200px]">
          높음
        </Radio.Button>
        <Radio.Button item={InferCost.NORMAL} className="w-[200px]">
          보통
        </Radio.Button>
        <Radio.Button item={InferCost.LOW} className="w-[200px]">
          낮음
        </Radio.Button>
        <Radio.Button item={InferCost.SUPER_LOW} className="w-[200px]">
          매우 낮음
        </Radio.Button>
      </Radio.Provider>
    </JoinLayout>
  );
};

export default JoinInferCost;
