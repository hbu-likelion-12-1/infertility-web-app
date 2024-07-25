import { kakaoApi } from './kakao';
import { userApi } from "./user";
import { matchApi } from "./match";
import { questionApi } from "./question";
import { bloomApi } from "./bloom";

export const Server = {
  Kakao: kakaoApi,
  User: userApi,
  Match: matchApi,
  Question: questionApi,
  BloomAI: bloomApi,
};
