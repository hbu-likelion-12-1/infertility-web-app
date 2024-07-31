import React, { useState } from 'react';
import JoinLayout from "@/features/join/ui/join.layout";
import { JoinPhase } from "@/features/join/constants/enum";
import useJoinStore from "@/features/join/lib/use-join.store";
import Radio, { Item } from "@/shared/ui/radio-button/radio.component";
import { InferCommunication } from "@/types/enum";


const communicationItems = [
  InferCommunication.EVERYDAY,
  InferCommunication.MONTH,
  InferCommunication.NEVERMIND,
  InferCommunication.WEEK_2_3,
  InferCommunication.WEEK_ONE,
];

const JoinCommunication = () => {
  const { setSignupForm, signupForm } = useJoinStore();
  const [communication, setCommunication] = useState<InferCommunication>();

  const onChangeCommunication = (value: InferCommunication) => {
    setCommunication(value);
    setSignupForm({ ...signupForm, communication: value });
  };

  return (
    <JoinLayout
      title="부부 간 난임 문제에 대한 의사소통 빈도를 선택해주세요."
      next={JoinPhase.DEPRESSION_TEST}
      buttonText="다음"
      buttonDisabled={!communication}
    >
      <Radio.Provider
        items={communicationItems}
        current={communication as string}
        setter={onChangeCommunication as (v: Item) => void}
        className="flex flex-col gap-y-[24px] items-center"
      >
        <Radio.Button item={InferCommunication.EVERYDAY} className="w-[200px]">
          매일
        </Radio.Button>
        <Radio.Button item={InferCommunication.WEEK_2_3} className="w-[200px]">
          주 2~3회
        </Radio.Button>
        <Radio.Button item={InferCommunication.WEEK_ONE} className="w-[200px]">
          주 1회
        </Radio.Button>
        <Radio.Button item={InferCommunication.MONTH} className="w-[200px]">
          월 1~2회
        </Radio.Button>
        <Radio.Button item={InferCommunication.NEVERMIND} className="w-[200px]">
          거의 없음
        </Radio.Button>
      </Radio.Provider>
    </JoinLayout>
  );
};

export default JoinCommunication;
