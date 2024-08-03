import React, { useState } from 'react';
import JoinLayout from "@/features/join/ui/join.layout";
import Input from "@/shared/ui/input/input.component";
import { JoinPhase } from "@/features/join/constants/enum";
import useJoinStore from "@/features/join/lib/use-join.store";

const JoinNickname = () => {
  const [value, setValue] = useState("");
  const { setSignupForm, signupForm } = useJoinStore();

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 10) return;
    setValue(e.target.value);
    setSignupForm({ ...signupForm, username: value });
  };

  return (
    <JoinLayout
      title="닉네임 혹은 애칭을 입력해주세요"
      next={JoinPhase.SEX}
      buttonText="다음"
      buttonDisabled={value.length < 3}
    >
      <section className="flex gap-x-3 items-end">
        <Input
          value={value}
          onChange={onInput}
          placeholder="터치하여 입력해주세요"
          className="w-full flex-1"
        />

        <nav className="flex text-[#7C7C7C] text-[13px]">
          <span>{value.length}</span>
          <span>/</span>
          <span>10</span>
        </nav>
      </section>
    </JoinLayout>
  );
};

export default JoinNickname;
