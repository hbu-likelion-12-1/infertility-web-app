import {
  InferCareStatus,
  InferCause,
  InferCommunication,
  InferCost,
  InferPeriod,
  WorkplaceComprehension
} from "@/types/enum";

export interface SignupForm {
  username: string;
  sex: string;
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
  kakaoId: string;
  depressionTest: string; // json.stringify
}
