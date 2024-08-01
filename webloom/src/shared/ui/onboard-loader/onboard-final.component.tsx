import React, {useEffect} from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import Announcer from "./announcer.component";
import { OnBoardPhase } from "@/shared/ui/onboard-loader/constants/enum";
import {router} from "next/client";

const OnboardFinal = () => {
  return (
    <div className="flex flex-col items-center">
        <div className="mb-[210px]">
            <IconUtils.Onboard4/>
        </div>
        <Announcer
            buttonText="난임 극복 여정 시작하기"
            next={OnBoardPhase.FINAL}
      >
        <section className="flex flex-col text-center text-[20px] py-[40px]">
          <h3 className="text-[#111111] font-[500]">지금 바로 가입하고,</h3>
          <h3 className="text-primary-0 font-[500]">AI Bloom과 함께</h3>
          <h3 className="text-primary-0 font-[500]">난임 극복을 위한 여정에</h3>
          <h3 className="text-primary-0 font-[500]">행복한 꽃을 피워요!</h3>
        </section>
      </Announcer>
    </div>
  );
};

export default OnboardFinal;
