import { JoinPhase } from "@/features/join/constants/enum";

const BASE = 8.33333333;

export default function convertProgress(phase: JoinPhase) {
  if (phase in JoinPhase) {
    return BASE * (phase + 1);
  }
  return 100;
}
