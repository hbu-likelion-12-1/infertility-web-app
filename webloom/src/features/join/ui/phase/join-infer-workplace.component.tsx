import React, { useState } from 'react';
import JoinLayout from "@/features/join/ui/join.layout";
import { JoinPhase } from "@/features/join/constants/enum";
import useJoinStore from "@/features/join/lib/use-join.store";
import Radio, { Item } from "@/shared/ui/radio-button/radio.component";
import { WorkplaceComprehension } from "@/types/enum";


const workplaceItems = [
  WorkplaceComprehension.VERY_HIGH,
  WorkplaceComprehension.HIGH,
  WorkplaceComprehension.NORMAL,
  WorkplaceComprehension.LOW,
  WorkplaceComprehension.SUPER_LOW,
  WorkplaceComprehension.NEVERMIND,
];

const JoinWorkPlace = () => {
  const { setSignupForm, signupForm } = useJoinStore();
  const [workplace, setWorkplace] = useState<WorkplaceComprehension>();

  const onChangeWorkplaceComprehension = (value: WorkplaceComprehension) => {
    setWorkplace(value);
    setSignupForm({ ...signupForm, workplaceComprehension: value });
  };

  return (
    <JoinLayout
      title="직장에서의 난임 치료 이해도를 선택해주세요."
      next={JoinPhase.INFER_COMMUNICATION}
      buttonText="다음"
      buttonDisabled={!workplace}
    >
      <Radio.Provider
        items={workplaceItems}
        current={workplace as string}
        setter={onChangeWorkplaceComprehension as (v: Item) => void}
        className="flex flex-col gap-y-[24px] items-center"
      >
        <Radio.Button item={WorkplaceComprehension.VERY_HIGH} className="w-[200px]">
          매우 높음
        </Radio.Button>
        <Radio.Button item={WorkplaceComprehension.HIGH} className="w-[200px]">
          높음
        </Radio.Button>
        <Radio.Button item={WorkplaceComprehension.NORMAL} className="w-[200px]">
          보통
        </Radio.Button>
        <Radio.Button item={WorkplaceComprehension.LOW} className="w-[200px]">
          낮음
        </Radio.Button>
        <Radio.Button item={WorkplaceComprehension.SUPER_LOW} className="w-[200px]">
          매우 낮음
        </Radio.Button>
        <Radio.Button item={WorkplaceComprehension.NEVERMIND} className="w-[200px]">
          해당 없음
        </Radio.Button>
      </Radio.Provider>
    </JoinLayout>
  );
};

export default JoinWorkPlace;
