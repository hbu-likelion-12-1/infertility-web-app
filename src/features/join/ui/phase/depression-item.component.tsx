import React, { useState } from 'react';
import Radio from "@/shared/ui/radio-button/radio.component";
import { DepressionOption } from "@/features/join/constants/enum";

interface Props {
  setter: (v: DepressionOption) => void;
}

const DepressionItem: React.FC<Props> = ({ setter }) => {
  const [current, setCurrent] = useState<number>();

  const onChangeOption = (v: number) => {
    setCurrent(v);
    setter(v);
  }

  return (
    <Radio.Provider
      items={[DepressionOption.NONE, DepressionOption.TWO_SIX, DepressionOption.SEVEN_TWELVES, DepressionOption.EVERYDAY]}
      setter={onChangeOption as (v: string | number) => void}
      current={current}
    >
      <nav className="flex gap-x-3 px-[36px]">
        <Radio.Button
          item={DepressionOption.NONE}
          theme="depression"
          className="flex-1"
        >
          없음
        </Radio.Button>
        <Radio.Button
          item={DepressionOption.TWO_SIX}
          theme="depression"
          className="flex-1"
        >
          2-6일
        </Radio.Button>
        <Radio.Button
          item={DepressionOption.SEVEN_TWELVES}
          theme="depression"
          className="flex-1"
        >
          7-12일
        </Radio.Button>
        <Radio.Button
          item={DepressionOption.EVERYDAY}
          theme="depression"
          className="flex-1"
        >
          거의 매일
        </Radio.Button>
      </nav>
    </Radio.Provider>
  );
};

export default DepressionItem;
