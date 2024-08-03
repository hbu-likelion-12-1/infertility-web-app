"use client";

import React, { useEffect } from 'react';
import useInviteCodeQuery from "@/features/invite/query/get-invite.query";
import { Server } from "@/service/api";
import AppLoading from "@/shared/ui/loading/loading.component";
import Button from "@/shared/ui/button";
import InviteCode from "@/features/invite/code.component";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import useMatchQuery from "@/features/service/query/get-match.query";

const InviteMain = () => {
  const { data: inviteCode, isFetched, refetch } = useInviteCodeQuery();
  const { data: matchDetails } = useMatchQuery();
  const router = useRouter();

  useEffect(() => {
    if (!isFetched) return;

    (async () => {
      if (!inviteCode) {
        await Server.Match.provideInviteCode();
        await refetch();
      }
    })();
  }, [isFetched]);

  useEffect(() => {
    if (matchDetails) {
      router.push("/service");
    }
  }, [matchDetails]);

  if (!inviteCode) return <AppLoading/>;

  return (
    <article className="w-full h-full flex flex-col">
      <section className={clsx([
        "flex flex-col items-center text-center",
        "text-[20px] font-bold pt-[56px]"
      ])}>
        <h1>부부 연결을 하고</h1>
        <h1>마음 공유를 시작해보세요.</h1>
      </section>

      <section className="flex-1 flex flex-col items-center justify-center">
        <span className="text-[16px] text-gray-0 pb-[9px]">나의 코드 복사하기!</span>
        <InviteCode code={inviteCode}/>
      </section>

      <section className="pb-[52px] px-[12px]">
        {/*<Button className="w-full mb-4">*/}
        {/*  배우자에게 초대장 보내기*/}
        {/*</Button>*/}
        <Button
          onClick={() => router.push("/invite/classify")}
          className="w-full"
        >
          배우자의 코드로 연결하기
        </Button>
      </section>
    </article>
  );
};

export default InviteMain;
