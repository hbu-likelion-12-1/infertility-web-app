import { apiClient } from './client';
import { User } from '@/types/object';

interface LoginResponse {
  user: User;
  accessToken: string;
  kakaoId: string;
}

interface KakaoApi {
  getKakaoPublishAuthCodeUrl: () => Promise<string>;
  login: (authCode: string) => Promise<LoginResponse>;
}

const ENDPOINT = '/user/auth';

export const kakaoApi: KakaoApi = {
  // 카카오 서비스에서 로그인을 수행할 수 있는 (인증 코드를 발급받을 수 있는) URL 이 반환됩니다
  getKakaoPublishAuthCodeUrl() {
    return apiClient.post(`${ENDPOINT}/kakao/url`);
  },
  login(authCode) {
    return apiClient.post(`${ENDPOINT}/login?code=${authCode}`);
  }
};
