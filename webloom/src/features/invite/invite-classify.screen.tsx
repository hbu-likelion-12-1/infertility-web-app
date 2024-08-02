"use client";

import React, { ChangeEvent, useState } from 'react';
import clsx from "clsx";
import Input from "@/shared/ui/input/input.component";
import Button from "@/shared/ui/button";
import { Server } from "@/service/api";
import { useRouter } from "next/navigation";

const InviteClassify = () => {
  const [code, setCode] = useState<string>("");
  const disabledMatch = code.length <= 5;
  const router = useRouter();

  const onEnterCode = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const onMatch = async () => {
    try {
      await Server.Match.create(code);
      alert("배우자와 매칭이 수행되었습니다.");
      router.push("/service");
    } catch (error: any) {
      if (error.code === 404) {
        return alert("존재하지 않는 매칭코드입니다.");
      }
    }
  };

  return (
    <article className="w-full h-full flex flex-col">
      <section className={clsx([
        "flex flex-col items-center text-center",
        "text-[20px] font-bold pt-[56px]"
      ])}>
        <h1>부부 코드를 입력해주세요</h1>
      </section>

      <section className="flex-1 flex flex-col items-center w-full pt-[52px] px-[12px]">
        <Input
          value={code}
          onChange={onEnterCode}
          placeholder="터치하여 입력해주세요."
          className="w-full"
        />
      </section>

      <section className="pb-[52px] px-[12px]">
        <Button
          theme={disabledMatch ? "disabled" : "primary"}
          className="w-full"
          onClick={onMatch}
        >
          배우자와 연결하기
        </Button>
      </section>
    </article>
  );
};

export default InviteClassify;
