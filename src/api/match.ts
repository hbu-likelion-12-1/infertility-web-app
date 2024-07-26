import { Match, Question } from "@/types/object";
import { apiClient } from "@/api/client";

interface InviteCode {
  inviteCode: string;
}

export interface MatchApi {
  getMatch: () => Promise<Match>;
  create: (code: string) => Promise<Match>;
  provideInviteCode: () => Promise<InviteCode>;
  getStorageList: () => Promise<Question[]>;
}

const ENDPOINT = '/match'

export const matchApi: MatchApi = {
  getMatch() {
    return apiClient.get(ENDPOINT);
  },
  create(code) {
    return apiClient.post(`${ENDPOINT}/?code=${code}`);
  },
  provideInviteCode() {
    return apiClient.post(`${ENDPOINT}/code/`);
  },
  getStorageList() {
    return apiClient.get(`${ENDPOINT}/storage/`);
  },
};
