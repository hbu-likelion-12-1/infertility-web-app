"use client";

import React, { useEffect } from 'react';
import useInviteCodeQuery from "@/features/invite/query/get-invite.query";
import { Server } from "@/service/api";
import AppLoading from "@/shared/ui/loading/loading.component";
import Button from "@/shared/ui/button";
import InviteCode from "@/features/invite/code.component";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import useMatchQuery from "@/features/service/query/get-match.query";
import Typo from "@/shared/ui/typography/typo.component";

const InviteMain = () => {
  const { data: inviteCode, isFetched, refetch } = useInviteCodeQuery();
  const { data: matchDetails } = useMatchQuery();
  const router = useRouter();
  const searchParams = useSearchParams();

  const onMatch = async (code: string) => {
    try {
      await Server.Match.create(code.trim());
      alert("배우자와 매칭이 수행되었습니다.");
      router.push("/service");
    } catch (error: any) {
      if (error.code === 404) {
        return alert("존재하지 않는 매칭코드입니다.");
      }
    }
  };

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

  useEffect(() => {
    if (!searchParams) return;
    const code = searchParams.get("code");
    if (!code) return;
    onMatch(code);
  }, [searchParams]);

  if (!inviteCode) return <AppLoading/>;

  return (
    <article className="w-full h-full flex flex-col">
      <section className={clsx([
        "flex flex-col items-center text-center",
        "pt-[56px]"
      ])}>
        <Typo size="24" bold>부부 연결을 하고</Typo>
        <Typo size="24" bold>마음 공유를 시작해보세요.</Typo>
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
