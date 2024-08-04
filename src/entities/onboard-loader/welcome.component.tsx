import React from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import Announcer from "./announcer.component";
import { OnBoardPhase } from "@/entities/onboard-loader/constants/enum";
import Typo from "@/shared/ui/typography/typo.component";

const OnboardWelcome = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-[300px]">
        <IconUtils.Onboard1/>
      </div>
      <Announcer
        buttonText="다음"
        next={OnBoardPhase.MINDSHARE}
        currentStep={0} // 현재 단계를 나타내는 prop 추가
        totalSteps={4}  // 전체 단계를 나타내는 prop 추가
      >
        <section className="FlexCol text-center py-[40px]">
          <Typo size="21" bold>안녕하세요!</Typo>
          <Typo size="21" bold>AI 기반</Typo>
          <Typo size="21" bold>난임 부부 맞춤형 마음 공유 서비스</Typo>
          <Typo size="21" bold>WeBloom 에 오신 것을 환영합니다.</Typo>
        </section>
      </Announcer>
    </div>
  );
};

export default OnboardWelcome;
