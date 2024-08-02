import React from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import Announcer from "./announcer.component";
import { OnBoardPhase } from "@/shared/ui/onboard-loader/constants/enum";

const OnboardStressCare = () => {
  return (
    <div className="flex flex-col items-center">
        <div className="mb-[80px]">
            <IconUtils.Onboard3/>
        </div>
        <Announcer
            buttonText="다음"
            next={OnBoardPhase.FINAL}
            currentStep={2}
            totalSteps={4}
        >
        <section className="flex flex-col text-center text-[20px] pt-[10px] pb-[80px]">
          <nav className="text-center flex flex-col items-center justify-center pb-[30px]">
            <h1 className="text-black font-bold text-[28px]">난임 스트레스</h1>
            <h1 className="font-bold text-primary-0 text-[28px]">함께 관리해요</h1>
          </nav>

          <h3 className="text-gray-0 text-[17px]">AI 상담가 Bloom의</h3>
          <h3 className="text-gray-0 text-[17px]">따듯한 격려와 조언, 분석, 리포트,</h3>
          <h3 className="text-gray-0 text-[17px]">추천 콘텐츠를 통해</h3>
          <h3 className="text-gray-0 text-[17px]">부부가 함께 난임 스트레스를 관리해요.</h3>
        </section>
      </Announcer>
    </div>
  );
};

export default OnboardStressCare;
