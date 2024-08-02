import { ReactNode } from "react";

interface ActivationProps {
  active: boolean;
  icon: ReactNode;
  activeIcon: ReactNode;
  text: string;
}

const Activation: React.FC<ActivationProps> = ({ active, icon, activeIcon, text }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-1 whitespace-nowrap">
      <section>
        {active ? activeIcon : icon}
      </section>
      <span
        className={active ? "text-primary-0" : "text-black"}
      >
        {text}
      </span>
    </div>
  )
}

export default Activation;
