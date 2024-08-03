import React from 'react';
import { Match } from "@/types/object";
import Button from "@/shared/ui/button";
import IconUtils from "@/shared/ui/IconUtils";

interface Props {
  match: Match;
}

const VoiceShareInteraction: React.FC<Props> = ({ match }) => {
  const husbandUploaded = !!match.question.maleAudioUrl;
  const wifeUploaded = !!match.question.femaleAudioUrl;

  const onClickReady = () => alert("준비 중입니다.");

  return (
    <>
      <section className="flex flex-col text-[20px] font-bold gap-y-2">
        <span>서로에게 힘이 될 수 있도록</span>
        <span>음성 메세지를 남겨주세요</span>
      </section>

      <section className="flex gap-x-[20px] justify-center w-full pt-[30px]">
        <nav className="flex flex-1 max-w-[200px] flex-col items-center">
          <span className="text-[16px] font-bold pb-2.5">아내</span>
          <Button
            onClick={onClickReady}
            theme="secondary"
            className="w-full h-[120px] rounded-[50px] shadow-button"
          >
            {wifeUploaded && <IconUtils.VoiceComplete/>}
            {!wifeUploaded && <IconUtils.VoiceReady/>}
          </Button>
        </nav>

        <nav className="flex flex-1 max-w-[200px] flex-col items-center">
          <span className="text-[16px] font-bold pb-2.5">남편</span>
          <Button
            onClick={onClickReady}
            theme="secondary"
            className="w-full h-[120px] rounded-[50px] shadow-button"
          >
            {husbandUploaded && <IconUtils.VoiceComplete/>}
            {!husbandUploaded && <IconUtils.VoiceReady/>}
          </Button>
        </nav>
      </section>
    </>
  );
};

export default VoiceShareInteraction;
