import { create } from 'zustand';
import { SignupForm } from '@/api/kakao';
import {
    InferPeriod,
    InferCareStatus,
    InferCause,
    InferCommunication,
    InferCost,
    WorkplaceComprehension,
} from "@/types/enum";

// Signup 상태 인터페이스 정의
interface SignupState extends SignupForm {
    setSignupData: (data: Partial<SignupForm>) => void;
}

// 상태 저장소 생성
export const useSignupStore = create<SignupState>((set) => ({
    username: '',
    sex: 'F',
    birthday: '',
    region: '',
    city: '',
    town: '',
    period: InferPeriod.LESS_THAN_6_MONTH,
    careStatus: InferCareStatus.INSPECT,
    cause: InferCause.UNKNOWN,
    cost: InferCost.NORMAL,
    workplaceComprehension: WorkplaceComprehension.NORMAL,
    communication: InferCommunication.WEEK_ONE,
    depressionTest: '',
    kakaoId: '',
    setSignupData: (data) => set((state) => ({ ...state, ...data })),
}));
