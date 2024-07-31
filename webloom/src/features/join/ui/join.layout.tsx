import React, { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const JoinLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <article className="w-full h-full px-[12px] overflow-y-scroll overflow-x-hidden">
      <section className="pb-[50px] text-[20px]">
        <span>{title}</span>
      </section>

      {children}
    </article>
  );
};

export default JoinLayout;
