"use client";

import React, { ReactNode } from 'react';
import Button from "@/shared/ui/button";
import { JoinPhase } from "@/features/join/constants/enum";
import useJoinStore from "@/features/join/lib/use-join.store";
import { useRouter } from "next/navigation";
import { Server } from "@/service/api";
import { SignupForm } from "@/features/join/constants/types";
import useAuth from "@/shared/lib/use-auth.hook";
import Typo from "@/shared/ui/typography/typo.component";

interface Props {
  title: string;
  children: ReactNode;
  next: JoinPhase;
  buttonText: string;
  buttonDisabled: boolean;
  className?: string;
}

const JoinLayout: React.FC<Props> = ({
                                       children,
                                       title,
                                       buttonText,
                                       next,
                                       buttonDisabled,
                                       className
                                     }) => {
  const router = useRouter();
  const { login } = useAuth();
  const { setPhase, signupForm } = useJoinStore();

  const onClickNext = async () => {
    const complete = Object.values(signupForm).every(Boolean);
    console.log({ signupForm, complete });
    if (complete) {
      const user = await Server.Kakao.signup(signupForm as SignupForm);
      login(user);
      return router.push("/join/result");
    }
    setPhase(next);
  };

  return (
    <article className="PageLayout">
      <section className="pb-[50px] w-full text-center pt-[23px]">
        <Typo size="21" bold>{title}</Typo>
      </section>

      <div className={className}>
        {children}
      </div>

      <section className="absolute bottom-[60px] left-0 right-0 px-[12px]">
        <Button
          onClick={onClickNext}
          className="w-full"
          theme={buttonDisabled ? "disabled" : "primary"}
        >
          {buttonText}
        </Button>
      </section>
    </article>
  );
};

export default JoinLayout;
