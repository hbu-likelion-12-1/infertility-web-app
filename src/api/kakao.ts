import { apiClient } from './client';
import { User } from '@/types/object';
import {
  InferCareStatus,
  InferCause,
  InferCommunication,
  InferCost,
  InferPeriod,
  WorkplaceComprehension
} from "@/types/enum";

interface LoginResponse {
  user: User;
  accessToken: string;
  kakaoId: string;
}

export interface SignupForm {
  username: string;
  sex: "F" | "M";
  birthday: string;
  region: string;
  city: string;
  town: string;
  period: InferPeriod;
  careStatus: InferCareStatus;
  cause: InferCause;
  cost: InferCost;
  workplaceComprehension: WorkplaceComprehension;
  communication: InferCommunication;
  depressionTest: string;
  kakaoId: string;
}

interface KakaoApi {
  getKakaoPublishAuthCodeUrl: () => Promise<string>;
  login: (authCode: string) => Promise<LoginResponse>;
  signup: (form: SignupForm) => Promise<void>;
}

const ENDPOINT = '/user/auth';

export const kakaoApi: KakaoApi = {
  // 카카오 서비스에서 로그인을 수행할 수 있는 (인증 코드를 발급받을 수 있는) URL 이 반환됩니다
  getKakaoPublishAuthCodeUrl() {
    return apiClient.post(`${ENDPOINT}/kakao/url`);
  },
  login(authCode) {
    return apiClient.post(`${ENDPOINT}/login?code=${authCode}`);
  },
  signup(body) {
    return apiClient.post(`${ENDPOINT}/signup`, body)
  },
};
