import React from 'react';
import IconUtils from "@/shared/ui/IconUtils";
import Announcer from "./announcer.component";
import { OnBoardPhase } from "@/shared/ui/onboard-loader/constants/enum";

const OnboardMindShare = () => {
  return (
      <div className="flex flex-col items-center">
          <div className="mb-[50px]">
              <IconUtils.Onboard2/>
          </div>
          <Announcer
              buttonText="다음"
              next={OnBoardPhase.STRESS}
              currentStep={1}
              totalSteps={4}
          >
              <section className="flex flex-col text-center text-[20px] pt-[5px] pb-[40px]">
                  <nav className="text-center flex flex-col items-center justify-center pb-[30px]">
                      <h1 className="text-black font-bold text-[28px]">마음 공유로</h1>
                      <h1 className="font-bold text-primary-0 text-[28px]">서로 힘이 되어줘요</h1>
                  </nav>

                  <h3 className="text-gray-0 text-[17px]">AI 상담가 Bloom의</h3>
                  <h3 className="text-gray-0 text-[17px]">24시간 맞춤형 질문으로</h3>
                  <h3 className="text-gray-0 text-[17px]">부부의 마음을 공유하며 서로 힘이 돼요.</h3>
              </section>
          </Announcer>
      </div>
  );
};

export default OnboardMindShare;
