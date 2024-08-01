import { Cities } from "@/features/join/constants/constant";

export const getCityOptions = () => {
  const options = [] as { label: string; value: string; }[];

  for (const [key, value] of Object.entries(Cities)) {
    options.map(o => ({}));
  }

}
