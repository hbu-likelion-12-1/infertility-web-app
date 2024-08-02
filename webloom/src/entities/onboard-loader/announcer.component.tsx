import React from 'react';
import { OnBoardPhase } from "./constants/enum";
import Button from "@/shared/ui/button";
import useOnboardPage from "@/shared/ui/onboard-loader/use-onboard.hook";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import ProgressIndicator from "@/shared/ui/onboard-loader/progressIndicator.component";

interface Props {
  children: React.ReactNode;
  buttonText: string;
  next: OnBoardPhase;
  isFinal?: boolean;
  currentStep: number; // 현재 단계를 나타내는 prop 추가
  totalSteps: number; // 전체 단계를 나타내는 prop 추가
}

const Announcer: React.FC<Props> = ({ children, buttonText, next, isFinal, currentStep, totalSteps }) => {
  const { setPhase } = useOnboardPage();
  const router = useRouter();


  const onClickNext = () => {
    if (isFinal) {
      console.log('Navigating to login...');
      localStorage.setItem("initial-onboard", "true");
      return router.push("/login");
    }
    console.log('Setting phase to next:', next);
    setPhase(next);
  };

  return (
    <div className={clsx([
      "fixed",
      "bottom-0 w-full",
      "z-20",
      "bg-white",
      "shadow-onboard",
      "rounded-t-[25px]",
      "flex flex-col",
      "p-[12px]",
      "pb-[50px]",
      "h-[430px]",
      "max-w-[640px]",
      "mx-auto"
    ])}>
      <section className="w-full flex-1 overflow-y-auto mt-4">
        {children}
      </section>
        <ProgressIndicator steps={totalSteps} currentStep={currentStep} />
      <section>
        <Button onClick={onClickNext} className="w-full">
          {buttonText}
        </Button>
      </section>
    </div>
  );
};

export default Announcer;
