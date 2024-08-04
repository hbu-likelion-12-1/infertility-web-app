import React from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import Announcer from "./announcer.component";
import { OnBoardPhase } from "@/entities/onboard-loader/constants/enum";
import Typo from "@/shared/ui/typography/typo.component";

const OnboardMindShare = () => {
  return (
    <div className="FlexCol items-center">
      <div className="mb-[50px]">
        <IconUtils.Onboard2/>
      </div>
      <Announcer
        buttonText="다음"
        next={OnBoardPhase.STRESS}
        currentStep={1}
        totalSteps={4}
      >
        <section className="FlexCol text-center pt-[5px] pb-[40px]">
          <nav className="text-center FlexCol items-center justify-center pb-[30px]">
            <Typo size="28" bold>마음 공유로</Typo>
            <Typo size="28" color="primary" bold>서로 힘이 되어줘요</Typo>
          </nav>

          <Typo size="18" color="gray-0">AI 상담가 Bloom의</Typo>
          <Typo size="18" color="gray-0">24시간 맞춤형 질문으로</Typo>
          <Typo size="18" color="gray-0">부부의 마음을 공유하며 서로 힘이 돼요.</Typo>
        </section>
      </Announcer>
    </div>
  );
};

export default OnboardMindShare;
