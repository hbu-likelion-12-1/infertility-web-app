import React, { useState } from 'react';
import JoinLayout from "@/features/join/ui/join.layout";
import { JoinPhase } from "@/features/join/constants/enum";
import useJoinStore from "@/features/join/lib/use-join.store";
import Radio, { Item } from "@/shared/ui/radio-button/radio.component";
import { InferPeriod } from "@/types/enum";


const inferItems = [
  InferPeriod.LESS_THAN_6_MONTH,
  InferPeriod.BETWEEN_6_MONTH_AND_1_YEAR,
  InferPeriod.LESS_THAN_6_MONTH,
  InferPeriod.TWO_YEARS_OR_MORE,
];

const JoinInferPeriod = () => {
  const { setSignupForm, signupForm } = useJoinStore();
  const [period, setInferPeriod] = useState<InferPeriod>();

  const onChangeInferPeriod = (value: InferPeriod) => {
    setInferPeriod(value);
    setSignupForm({ ...signupForm, period: value });
  };

  return (
    <JoinLayout
      title="난임 진단 시기를 선택해주세요"
      next={JoinPhase.INFER_CARE}
      buttonText="다음"
      buttonDisabled={!period}
    >
      <Radio.Provider
        items={inferItems}
        current={period as string}
        setter={onChangeInferPeriod as (v: Item) => void}
        className="flex flex-col gap-y-[24px] items-center"
      >
        <Radio.Button item={InferPeriod.LESS_THAN_6_MONTH} className="w-[200px]">
          6개월 미만
        </Radio.Button>
        <Radio.Button item={InferPeriod.BETWEEN_6_MONTH_AND_1_YEAR} className="w-[200px]">
          6개월에서 1년
        </Radio.Button>
        <Radio.Button item={InferPeriod.BETWEEN_1_YEAR_AND_2_YEAR} className="w-[200px]">
          1년 이상 2년 미만
        </Radio.Button>
        <Radio.Button item={InferPeriod.TWO_YEARS_OR_MORE} className="w-[200px]">
          2년 이상
        </Radio.Button>
      </Radio.Provider>
    </JoinLayout>
  );
};

export default JoinInferPeriod;
