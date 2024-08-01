interface Result {
  title: string;
  content: string;
}

export default function getDepressionResult(score: number): Result {
  if (score <= 9) {
    return {
      title: "가벼운 우울",
      content: "건강한 마음건강을 위해 여가활동 등으로\n" +
        "스트레스를 적절히 관리해주세요.\n" +
        "규칙적인 식수면을 유지하여\n" +
        "생체리듬을 규칙적으로 유지 해주세요.",
    };
  }

  if (score <= 19) {
    return {
      title: "중간 정도의 우울",
      content: "일상생활 수행능력의 저하, 혹은\n" +
        "우울감으로 인한 신체적 정서적\n" +
        "불편함이 지속될 시\n" +
        "전문가의 개입이 필요합니다.",
    };
  }

  if (score <= 27) {
    return {
      title: "심한 우울",
      content: "점수가 높을수록 우울의 정도가\n" +
        "심한 것을 의미합니다.\n" +
        "전문가의 심층상담 및 적절한 치료 등의\n" +
        "노력, 주변의 도움이 필요합니다.",
    };
  }

  return {
    title: "정상",
    content: "축하합니다! 현재 마음건강이 매우 양호한 상태입니다.\n" +
      "앞으로도 건강한 마음을 유지하기 위해 규칙적인 생활과\n" +
      "적절한 스트레스 관리를 계속해 나가세요.",
  };
}
