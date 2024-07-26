import { create } from "zustand";

interface AuthStoreStates {
  kakaoAuthCode?: string;
  setKakaoAuthCode: (code: string) => void;
}

export const useAuthStore = create<AuthStoreStates>(set => ({
  setKakaoAuthCode: code => set({ kakaoAuthCode: code }),
}));
