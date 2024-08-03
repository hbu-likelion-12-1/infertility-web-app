import { apiClient } from './client';
import { User } from '@/types/object';
import { SignupForm } from "@/features/join/constants/types";

export interface LoginResponse {
  user?: User;
  accessToken?: string;
  kakaoId: string;
}

export interface KakaoApi {
  getKakaoPublishAuthCodeUrl: () => Promise<{ url: string }>;
  login: (authCode: string) => Promise<User | undefined>;
  testLogin: (type: "husband" | "wife") => Promise<User>;
  removeTestData: () => Promise<void>;
  signup: (form: SignupForm) => Promise<User>;
}

const ENDPOINT = '/users/auth';

export const kakaoApi: KakaoApi = {
  // 카카오 서비스에서 로그인을 수행할 수 있는 (인증 코드를 발급받을 수 있는) URL 이 반환됩니다
  getKakaoPublishAuthCodeUrl() {
    return apiClient.get(`${ENDPOINT}/kakao/url/`);
  },
  async login(authCode) {
    const {
      kakaoId,
      accessToken,
      user = undefined
    } = await apiClient.get(`${ENDPOINT}/login/?code=${authCode}`) as LoginResponse;
    localStorage.setItem("kakao_id", kakaoId);
    if (accessToken) {
      localStorage.setItem("access", accessToken);
    }
    return user;
  },
  async signup(body) {
    const { accessToken, user } = await apiClient.post(`${ENDPOINT}/signup/`, body) as LoginResponse;
    if (accessToken) {
      localStorage.setItem("access", accessToken);
    }
    return user as User;
  },
  async testLogin(type) {
    const { accessToken, user } = await apiClient.get(`/users/test/?type=${type}`) as LoginResponse;
    if (accessToken) {
      localStorage.setItem("access", accessToken);
    }
    return user as User;
  },
  removeTestData() {
    return apiClient.post('/users/test/');
  },
};
