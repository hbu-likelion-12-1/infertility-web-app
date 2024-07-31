import React, { ReactNode } from 'react';
import Button from "@/shared/ui/button";
import { JoinPhase } from "@/features/join/constants/enum";
import useJoinStore from "@/features/join/lib/use-join.store";

interface Props {
  title: string;
  children: ReactNode;
  next: JoinPhase;
  buttonText: string;
}

const JoinLayout: React.FC<Props> = ({ children, title, buttonText, next }) => {
  const { setPhase } = useJoinStore();

  const onClickNext = async () => {
    setPhase(next);
  };

  return (
    <article className="w-full min-h-full px-[12px] overflow-y-scroll overflow-x-hidden relative">
      <section className="pb-[50px] text-[20px] w-full text-center pt-[23px] font-bold">
        <span>{title}</span>
      </section>

      {children}

      <section className="absolute bottom-[60px] left-0 right-0 px-[12px]">
        <Button
          onClick={onClickNext}
          className="w-full"
        >
          {buttonText}
        </Button>
      </section>
    </article>
  );
};

export default JoinLayout;
