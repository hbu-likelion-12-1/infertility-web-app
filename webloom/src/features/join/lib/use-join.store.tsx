import { create } from "zustand";
import { JoinPhase } from "../constants/enum";
import { SignupForm } from "../constants/types";

interface States {
  phase: JoinPhase;
  setPhase: (phase: JoinPhase) => void;
  signupForm: SignupForm | null;
  setSignupForm: (signupForm: SignupForm | null) => void;
}

const useJoinStore = create<States>(set => ({
  phase: JoinPhase.NICKNAME,
  setPhase: phase => set({ phase }),
  signupForm: null,
  setSignupForm: form => set({ signupForm: form }),
}));

export default useJoinStore;
