import React from 'react';
import Radio from "@/shared/ui/radio-button/radio.component";
import { Emotion } from "@/types/enum";
import IconUtils from "@/shared/ui/IconUtils";
import Typo from "@/shared/ui/typography/typo.component";

interface FormProps {
  emotion?: Emotion;
  onChange: (e: Emotion) => void;
}

const items = [Emotion.NICE, Emotion.GOOD, Emotion.NORMAL, Emotion.BAD, Emotion.WORST];

const EmotionRadioForm: React.FC<FormProps> = ({ emotion, onChange }) => (
  <Radio.Provider
    current={emotion}
    items={items}
    setter={onChange}
  >
    <nav className="w-full flex gap-x-[18px] pt-[20px]">
      <div className="flex flex-col items-center flex-1">
        <IconUtils.Happy/>
        <Typo size="12" bold className="pb-2">매우 좋음</Typo>
        <Radio.Button item={Emotion.NICE} radioMode/>
      </div>
      <div className="flex flex-col items-center flex-1">
        <IconUtils.Good/>
        <Typo size="12" bold className="pb-2">좋음</Typo>
        <Radio.Button item={Emotion.GOOD} radioMode/>
      </div>
      <div className="flex flex-col items-center flex-1">
        <IconUtils.Normal/>
        <Typo size="12" bold className="pb-2">보통</Typo>
        <Radio.Button item={Emotion.NORMAL} radioMode/>
      </div>
      <div className="flex flex-col items-center flex-1">
        <IconUtils.Bad/>
        <Typo size="12" bold className="pb-2">나쁨</Typo>
        <Radio.Button item={Emotion.BAD} radioMode/>
      </div>
      <div className="flex flex-col items-center flex-1">
        <IconUtils.Worst/>
        <Typo size="12" bold className="pb-2">매우 나쁨</Typo>
        <Radio.Button item={Emotion.WORST} radioMode/>
      </div>
    </nav>
  </Radio.Provider>
);

export default EmotionRadioForm;
