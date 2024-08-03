import React, { useState } from 'react';
import JoinLayout from "@/features/join/ui/join.layout";
import { JoinPhase } from "@/features/join/constants/enum";
import useJoinStore from "@/features/join/lib/use-join.store";
import Radio, { Item } from "@/shared/ui/radio-button/radio.component";
import { InferSupport } from "@/types/enum";


const supportItems = [
  InferSupport.VERY_HIGH,
  InferSupport.HIGH,
  InferSupport.NORMAL,
  InferSupport.LOW,
  InferSupport.SUPER_LOW,
];

const JoinInferSupport = () => {
  const { setSignupForm, signupForm } = useJoinStore();
  const [support, setSupport] = useState<InferSupport>();

  const onChangeInferSupport = (value: InferSupport) => {
    setSupport(value);
    setSignupForm({ ...signupForm, support: value });
  };

  return (
    <JoinLayout
      title="가족 및 지인들의 지지 정도를 선택해주세요."
      next={JoinPhase.INFER_WORK_COMPREHENSION}
      buttonText="다음"
      buttonDisabled={!support}
    >
      <Radio.Provider
        items={supportItems}
        current={support as string}
        setter={onChangeInferSupport as (v: Item) => void}
        className="flex flex-col gap-y-[24px] items-center"
      >
        <Radio.Button item={InferSupport.VERY_HIGH} className="w-[200px]">
          매우 높음
        </Radio.Button>
        <Radio.Button item={InferSupport.HIGH} className="w-[200px]">
          높음
        </Radio.Button>
        <Radio.Button item={InferSupport.NORMAL} className="w-[200px]">
          보통
        </Radio.Button>
        <Radio.Button item={InferSupport.LOW} className="w-[200px]">
          낮음
        </Radio.Button>
        <Radio.Button item={InferSupport.SUPER_LOW} className="w-[200px]">
          매우 낮음
        </Radio.Button>
      </Radio.Provider>
    </JoinLayout>
  );
};

export default JoinInferSupport;
