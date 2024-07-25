import { Mind, Question } from "@/types/object";
import { apiClient } from "@/api/client.ts";
import { Emotion } from "@/types/enum.ts";

interface QuestionApi {
  create: (matchId: number) => Promise<Question>;
  answerMind: (questionId: number, body: AnswerBody) => Promise<void>;
  getMind: (mindId: number) => Promise<Mind>;
  uploadVoice: (questionId: number, data: Blob) => Promise<Question>;
}

interface AnswerBody {
  content: string;
  emotion: Emotion;
}

const ENDPOINT = '/question';

export const questionApi: QuestionApi = {
  create(matchId) {
    return apiClient.post(`${ENDPOINT}/${matchId}`);
  },
  answerMind(questionId, body) {
    return apiClient.post(`${ENDPOINT}/mind/answer/${questionId}`, body);
  },
  getMind(mindId) {
    return apiClient.get(`${ENDPOINT}/mind/${mindId}`);
  },
  uploadVoice(questionId, data) {
    const form = new FormData();
    form.append("voice", data);
    return apiClient.post(`${ENDPOINT}/mind/voice/${questionId}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
};
