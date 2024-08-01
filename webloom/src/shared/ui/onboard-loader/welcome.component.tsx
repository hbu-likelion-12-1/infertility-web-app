import React from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import Announcer from "./announcer.component";
import { OnBoardPhase } from "@/shared/ui/onboard-loader/constants/enum";

const OnboardWelcome = () => {
  return (
    <div className="flex flex-col items-center">
        <div className="mb-[300px]">
            <IconUtils.Onboard1/>
        </div>
        <Announcer
            buttonText="다음"

            next={OnBoardPhase.MINDSHARE}
      >
        <section className="flex flex-col text-center text-[20px] py-[40px] ">
          <h3 className="text-black font-[500]">안녕하세요!</h3>
          <h3 className="text-primary-0 font-[500]">AI 기반</h3>
          <h3 className="text-primary-0 font-[500]">난임 부부 맞춤형 마음 공유 서비스</h3>
          <h3 className="text-primary-0 font-[500]">WEBLOOM 에 오신 것을 환영합니다.</h3>
        </section>
      </Announcer>
    </div>
  );
};

export default OnboardWelcome;
