import { HoneyAlias } from "@/features/service/constant/enum";
import { Match, User } from "@/types/object";

export function getHoneyAlias(sex: "F" | "M") {
  return sex === "F" ? HoneyAlias.WIFE : HoneyAlias.HUSBAND;
}

export const MatchService = {
  checkUserWrittenMind: (user: User, matchDetails: Match) => {
    const honeyAlias = getHoneyAlias(user.sex);

    if (matchDetails.husband?.mindId && honeyAlias === HoneyAlias.HUSBAND) {
      return true;
    }

    if (matchDetails.wife?.mindId && honeyAlias === HoneyAlias.WIFE) {
      return true;
    }

    return false;
  },
};
