import { kakaoApi } from './kakao';
import { userApi } from "./user";
import { matchApi } from "./match";

export const Server = {
  Kakao: kakaoApi,
  User: userApi,
  Match: matchApi,
};
