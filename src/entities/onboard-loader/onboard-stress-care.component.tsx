import React from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import Announcer from "./announcer.component";
import { OnBoardPhase } from "@/entities/onboard-loader/constants/enum";
import Typo from "@/shared/ui/typography/typo.component";

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
        <section className="flex flex-col text-center text-[20px] pt-[5px] pb-[40px]">
          <nav className="text-center flex flex-col items-center justify-center pb-[30px]">
            <Typo size="28" bold>난임 스트레스</Typo>
            <Typo size="28" color="primary" bold>함께 관리해요</Typo>
          </nav>

          <Typo size="18" color="gray-0">AI 상담가 Bloom의</Typo>
          <Typo size="18" color="gray-0">따듯한 격려와 조언, 분석, 리포트,</Typo>
          <Typo size="18" color="gray-0">추천 콘텐츠를 통해</Typo>
          <Typo size="18" color="gray-0">부부가 함께 난임 스트레스를 관리해요.</Typo>
        </section>
      </Announcer>
    </div>
  );
};

export default OnboardStressCare;
