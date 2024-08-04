import { Mind, Question } from "@/types/object";
import { apiClient } from "./client";
import { Emotion } from "@/types/enum";

export interface QuestionApi {
  create: (matchId: number) => Promise<Question>;
  answerMind: (questionId: number, body: AnswerBody) => Promise<void>;
  getMind: (mindId: number) => Promise<Mind>;
  uploadVoice: (questionId: number, data: Blob) => Promise<Question>;
  getBothMinds: (questionId: string) => Promise<BothMind>;
}

export interface AnswerBody {
  content: string;
  emotion: Emotion;
}

interface BothMind {
  husband: Mind;
  wife: Mind;
}

const ENDPOINT = '/question';

export const questionApi: QuestionApi = {
  create(matchId) {
    return apiClient.post(`${ENDPOINT}/${matchId}/`);
  },
  answerMind(questionId, body) {
    return apiClient.post(`${ENDPOINT}/mind/answer/${questionId}/`, body);
  },
  getMind(mindId) {
    return apiClient.get(`${ENDPOINT}/mind/${mindId}/`);
  },
  uploadVoice(questionId, data) {
    const form = new FormData();
    form.append("voice", data);
    return apiClient.post(`${ENDPOINT}/mind/voice/${questionId}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  getBothMinds(questionId) {
    return apiClient.get(`${ENDPOINT}/mind/both/${questionId}/`);
  },
};
