import { JoinPhase } from "@/features/join/constants/enum";

const BASE = 7.6923076923;

export default function convertProgress(phase: JoinPhase) {
  if (phase in JoinPhase) {
    return BASE * (phase + 1);
  }
  return 100;
}
