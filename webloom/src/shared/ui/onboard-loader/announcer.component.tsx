import React from 'react';
import { SplashPage } from "@/shared/ui/SplashLoader/constants/enum";
import Button from "@/shared/ui/button";
import useOnboardPage from "@/shared/ui/onboard-loader/use-onboard.hook";
import { OnBoardPhase } from "@/shared/ui/onboard-loader/constants/enum";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  buttonText: string;
  next: SplashPage;
}

const Announcer: React.FC<Props> = ({ children, buttonText, next }) => {
  const { setPhase } = useOnboardPage();

  const onClickNext = () => {
    if (next === OnBoardPhase.FINAL) {
      // done
      localStorage.setItem("initial-onboard", "true");
    }

    setPhase(next);
  };

  return (
    <div className={clsx([
      "w-full h-[430px] pt-[36px] pb-[60px] px-[12px]",
      "absolute bottom-0 left-0",
      "shadow-onboard",
      "rounded-t-[25px]",
    ])}>
      <section className="w-full flex-1">
        {children}
      </section>
      <section>
        <Button onClick={onClickNext} classNames="w-full">
          {buttonText}
        </Button>
      </section>
    </div>
  );
};

export default Announcer;
