import { Match, Question } from "@/types/object";
import { apiClient } from "./client";

interface InviteCode {
  inviteCode: string;
}

export interface MatchApi {
  getMatch: () => Promise<Match | null>;
  create: (code: string) => Promise<Match>;
  provideInviteCode: () => Promise<InviteCode>;
  getInviteCode: () => Promise<{ inviteCode: InviteCode | null }>;
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
  getInviteCode() {
    return apiClient.get(`${ENDPOINT}/code/`);
  },
  provideInviteCode() {
    return apiClient.post(`${ENDPOINT}/code/`);
  },
  getStorageList() {
    return apiClient.get(`${ENDPOINT}/storage/`);
  },
};
