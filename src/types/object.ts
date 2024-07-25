import {
  InferCareStatus,
  InferCause,
  InferCommunication,
  InferCost,
  InferPeriod,
  WorkplaceComprehension
} from "@/types/enum";

export interface User {
  id: number;
  username: string;
  sex: 'F' | 'M';
  region: string;
  city: string;
  town: string;
  birthday: string;
  createdAt: string;
  depressionTest: string;
  infertility: UserInfertility;
}

interface MatchUser {
  id: number;
  username: string;
  sex: 'F' | 'M';
  mindId: number;
}

export interface UserInfertility {
  id: number;
  period: InferPeriod;
  careStatus: InferCareStatus;
  cause: InferCause;
  cost: InferCost;
  workplaceComprehension: WorkplaceComprehension;
  communication: InferCommunication;
}


export interface Question {
  id: number;
  content: string;
  femaleAudioUrl?: string;
  maleAudioUrl?: string;
  createdAt: string;
}

export interface Match {
  id: number;
  husband: MatchUser;
  wife: MatchUser;
  question: Question;
}
