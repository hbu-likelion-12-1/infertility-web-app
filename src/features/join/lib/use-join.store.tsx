import { create } from "zustand";
import { JoinPhase } from "../constants/enum";
import { SignupForm } from "../constants/types";

interface States {
  phase: JoinPhase;
  setPhase: (phase: JoinPhase) => void;
  signupForm: Partial<SignupForm>;
  setSignupForm: (signupForm: Partial<SignupForm>) => void;
  depressionScore: number;
  setDepressionScore: (n: number) => void;
}

const useJoinStore = create<States>(set => ({
  phase: JoinPhase.NICKNAME,
  setPhase: phase => set({ phase }),
  signupForm: {
    username: undefined,
    birthday: undefined,
    careStatus: undefined,
    cause: undefined,
    city: undefined,
    cost: undefined,
    communication: undefined,
    depressionTest: undefined,
    kakaoId: undefined,
    period: undefined,
    region: undefined,
    sex: undefined,
    town: undefined,
    workplaceComprehension: undefined,
  },
  setSignupForm: form => set({ signupForm: form }),
  depressionScore: 0,
  setDepressionScore: n => set({ depressionScore: n }),
}));

export default useJoinStore;
