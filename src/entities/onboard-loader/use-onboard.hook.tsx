import { create } from "zustand";
import { OnBoardPhase } from "./constants/enum";

interface States {
  phase: OnBoardPhase;
  setPhase: (phase: OnBoardPhase) => void;
}

const useOnboardPage = create<States>(set => ({
  phase: OnBoardPhase.WELCOME,
  setPhase: phase => set({ phase }),
}));

export default useOnboardPage;
