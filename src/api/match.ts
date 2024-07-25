import { Match } from "@/types/object";
import { apiClient } from "@/api/client.ts";

interface MatchApi {
  getMatch: () => Promise<Match>;
  create: (code: string) => Promise<Match>;
}

const ENDPOINT = '/match'

export const matchApi: MatchApi = {
  getMatch() {
    return apiClient.get(ENDPOINT);
  },
  create(code) {
    return apiClient.post(`${ENDPOINT}/?code=${code}`);
  },
};
