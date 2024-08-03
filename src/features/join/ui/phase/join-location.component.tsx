import React, { useEffect, useState } from 'react';
import JoinLayout from "@/features/join/ui/join.layout";
import { JoinPhase } from "@/features/join/constants/enum";
import useJoinStore from "@/features/join/lib/use-join.store";
import Select from "@/shared/ui/select/select.component";
import { Cities, Regions, Towns } from "@/features/join/constants/constant";

interface LocationState {
  city: string;
  region: string;
  town: string;
}

const regionOptions = Regions.map(region => ({ value: region, label: region }));

const JoinLocation = () => {
  const { setSignupForm, signupForm } = useJoinStore();
  const [location, setLocation] = useState<Partial<LocationState>>({
    city: undefined, region: undefined, town: undefined,
  });
  const [cityOptions, setCityOptions] = useState<{ label: string; value: string }[]>([]);
  const [townOptions, setTownOptions] = useState<{ label: string; value: string }[]>([]);

  const pass = Object.values(location).every(v => v !== undefined);

  const onChangeSelectOption = (value: unknown, key: keyof LocationState) => {
    const { value: v } = value as { value: string };
    setLocation(prev => ({ ...prev, [key]: v }));
  };

  useEffect(() => {
    const { city, town, region } = location;
    if (region && !city) {
      const cities = Cities[region as any].map((v: string) => ({
        label: v,
        value: v,
      }));
      setCityOptions(cities);
    }

    if (location.city && !location.town) {
      const region = location.region;
      const towns = Towns[region as any][location.city].map((v: string) => ({
        label: v,
        value: v,
      }));
      setTownOptions(towns);
    }
  }, [location]);

  useEffect(() => {
    if (!pass) return;
    const { city, town, region } = location;
    setSignupForm({ ...signupForm, city, region, town });
  }, [pass]);

  return (
    <JoinLayout
      title="살고 있는 지역을 선택해주세요."
      next={JoinPhase.INFER_PERIOD}
      buttonText="다음"
      buttonDisabled={!pass}
    >
      <section className="flex gap-x-3">
        <Select
          options={regionOptions}
          placeholder="시•도"
          onChange={v => onChangeSelectOption(v, "region")}
          className="!flex-1"
        />
        <Select
          options={cityOptions}
          placeholder="시•군•구"
          className="!flex-1"
          onChange={v => onChangeSelectOption(v, "city")}
        />
        <Select
          options={townOptions}
          placeholder="동•읍•면"
          className="!flex-1"
          onChange={v => onChangeSelectOption(v, "town")}
        />
      </section>
    </JoinLayout>
  );
};

export default JoinLocation;
