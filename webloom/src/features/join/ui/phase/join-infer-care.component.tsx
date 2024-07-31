import React, { useState } from 'react';
import JoinLayout from "@/features/join/ui/join.layout";
import { JoinPhase } from "@/features/join/constants/enum";
import useJoinStore from "@/features/join/lib/use-join.store";
import Radio, { Item } from "@/shared/ui/radio-button/radio.component";
import { InferCareStatus } from "@/types/enum";


const careItems = [
  InferCareStatus.INSPECT,
  InferCareStatus.OVULATION,
  InferCareStatus.ARTIFICIAL,
  InferCareStatus.IN_VITRO,
  InferCareStatus.SUSPEND,
];

const JoinInferCare = () => {
  const { setSignupForm, signupForm } = useJoinStore();
  const [care, setCare] = useState<InferCareStatus>();

  const onChangeInferCare = (value: InferCareStatus) => {
    setCare(value);
    setSignupForm({ ...signupForm, careStatus: value });
  };

  return (
    <JoinLayout
      title="현재 해당하는 난임 치료 상황을 선택해주세요."
      next={JoinPhase.INFER_CAUSE}
      buttonText="다음"
      buttonDisabled={!care}
    >
      <Radio.Provider
        items={careItems}
        current={care as string}
        setter={onChangeInferCare as (v: Item) => void}
        className="flex flex-col gap-y-[24px] items-center"
      >
        <Radio.Button item={InferCareStatus.INSPECT} className="w-[200px]">
          검사 단계
        </Radio.Button>
        <Radio.Button item={InferCareStatus.OVULATION} className="w-[200px]">
          배란 유도
        </Radio.Button>
        <Radio.Button item={InferCareStatus.ARTIFICIAL} className="w-[200px]">
          인공 수정
        </Radio.Button>
        <Radio.Button item={InferCareStatus.IN_VITRO} className="w-[200px]">
          체외수정
        </Radio.Button>
        <Radio.Button item={InferCareStatus.SUSPEND} className="w-[200px]">
          치료 중단
        </Radio.Button>
      </Radio.Provider>
    </JoinLayout>
  );
};

export default JoinInferCare;
