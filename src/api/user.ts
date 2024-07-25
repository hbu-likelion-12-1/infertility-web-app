import { User } from "@/types/object";
import { apiClient } from "@/api/client.ts";

interface GetUserResponse extends User {
}


interface UserApi {
  get: () => Promise<GetUserResponse>;
}

const ENDPOINT = '/user';

export const userApi: UserApi = {
  get() {
    return apiClient.get(ENDPOINT);
  },
};
