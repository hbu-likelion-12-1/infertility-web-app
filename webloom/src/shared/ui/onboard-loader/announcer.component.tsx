import React from 'react';
import { OnBoardPhase } from "./constants/enum";
import Button from "@/shared/ui/button";
import useOnboardPage from "@/shared/ui/onboard-loader/use-onboard.hook";
import clsx from "clsx";
import { useRouter } from "next/navigation";

interface Props {
  children: React.ReactNode;
  buttonText: string;
  next: OnBoardPhase;
}

const Announcer: React.FC<Props> = ({ children, buttonText, next }) => {
  const { setPhase } = useOnboardPage();
  const router = useRouter();


  const onClickNext = () => {
    if (next === OnBoardPhase.FINAL) {
      localStorage.setItem("initial-onboard", "true");
      return router.push("/login");
    }

    setPhase(next);
  };

  return (
    <div className={clsx([
      "z-20",
      "w-full h-[430px] pt-[36px] pb-[60px] px-[12px] bg-white",
      "absolute bottom-0 left-0",
      "shadow-onboard",
      "rounded-t-[25px]",
      "flex flex-col"
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
