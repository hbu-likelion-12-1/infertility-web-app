// 난임 진단 시기
export enum InferPeriod {
  LESS_THAN_6_MONTH = "LESS_THAN_6_MONTH",
  BETWEEN_6_MONTH_AND_1_YEAR = "BETWEEN_6_MONTH_AND_1_YEAR",
  BETWEEN_1_YEAR_AND_2_YEAR = "BETWEEN_1_YEAR_AND_2_YEAR",
  TWO_YEARS_OR_MORE = "TWO_YEARS_OR_MORE"
}

// 난임 치료 상황
export enum InferCareStatus {
  INSPECT = "INSPECT",
  OVULATION = "OVULATION",
  ARTIFICIAL = "ARTIFICIAL",
  IN_VITRO = "IN_VITRO",
  SUSPEND = "SUSPEND"
}

// 난임의 주된 원인
export enum InferCause {
  FEMALE = "FEMALE",
  MALE = "MALE",
  BIDIRECT = "BIDIRECT",
  UNKNOWN = "UNKNOWN"
}

// 난임 치료로 인한 경제적 부담 정도
export enum InferCost {
  VERY_HIGH = "VERY_HIGH",
  HIGH = "HIGH",
  NORMAL = "NORMAL",
  LOW = "LOW",
  SUPER_LOW = "SUPER_LOW"
}

// 가족, 주변으로부터 지지 정도
export enum InferSupport {
  VERY_HIGH = "VERY_HIGH",
  HIGH = "HIGH",
  NORMAL = "NORMAL",
  LOW = "LOW",
  SUPER_LOW = "SUPER_LOW"
}

// 직장 내 난임 이해도
export enum WorkplaceComprehension {
  VERY_HIGH = "VERY_HIGH",
  HIGH = "HIGH",
  NORMAL = "NORMAL",
  LOW = "LOW",
  SUPER_LOW = "SUPER_LOW",
  NEVERMIND = "NEVERMIND"
}

// 부부 간 난임 의사소통
export enum InferCommunication {
  EVERYDAY = "EVERYDAY",
  WEEK_2_3 = "WEEK_2_3",
  WEEK_ONE = "WEEK_ONE",
  MONTH = "MONTH",
  NEVERMIND = "NEVERMIND"
}

// 감정 상태
export enum Emotion {
  NICE = "NICE",
  GOOD = "GOOD",
  NORMAL = "NORMAL",
  BAD = "BAD",
  WORST = "WORST"
}
