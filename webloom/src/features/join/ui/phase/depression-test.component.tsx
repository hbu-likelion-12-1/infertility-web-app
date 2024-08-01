import React, { useState } from 'react';
import clsx from "clsx";

import useJoinStore from "@/features/join/lib/use-join.store";
import JoinLayout from "@/features/join/ui/join.layout";
import { JoinPhase } from "@/features/join/constants/enum";
import DepressionItem from "@/features/join/ui/phase/depression-item.component";
import { DepressionQueries } from "@/features/join/constants/constant";


const DepressionTest = () => {
  const { setSignupForm, signupForm } = useJoinStore();
  const [test, setTest] = useState<number[]>(() => Array(9).fill(-1));

  const onChangeTestOption = (v: number, seq: number) => {
    const c = [...test];
    c[seq] = v;

    const fiiled = c.every(o => o !== -1);
    if (fiiled) {
      const total: number = c.reduce((a, b) => a + b, 0);
      setSignupForm({ ...signupForm, depressionTest: String(total) });
    }

    setTest(c);
  };

  console.log(`depression test: ${!!signupForm.depressionTest}`)

  return (
    <JoinLayout
      title="우울증 테스트입니다. 다음 문항들을 읽고 해당되는 것을 선택해주세요."
      next={JoinPhase.DEPRESSION_TEST}
      buttonText="고생하셨어요! 이제 마지막 단계만 남았어요."
      buttonDisabled={!signupForm.depressionTest}
    >
      <div className={clsx([
        "h-full flex flex-col",
        "gap-y-[60px] pb-[120px]",
        "overflow-y-scroll overflow-x-hidden"
      ])}>
        {DepressionQueries.map((query, index) => (
          <section className="flex flex-col gap-y-[14px]" key={query}>
            <span className="text-[16px]">{query}</span>
            <DepressionItem setter={v => onChangeTestOption(v, index)}/>
          </section>
        ))}
      </div>

    </JoinLayout>
  );
};

export default DepressionTest;
