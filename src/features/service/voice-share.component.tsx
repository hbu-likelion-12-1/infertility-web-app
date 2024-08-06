import React from 'react';
import { Match } from "@/types/object";
import Typo from "@/shared/ui/typography/typo.component";
import VoiceButton from "@/features/service/voice-button.component";
import useAuth from "@/shared/lib/use-auth.hook";

interface Props {
  match: Match;
}

const VoiceShareInteraction: React.FC<Props> = ({ match }) => {
  const { user } = useAuth();
  const husbandUploaded = !!match.question?.maleAudioUrl;
  const wifeUploaded = !!match.question?.femaleAudioUrl;

  const onClickReady = () => alert("준비 중입니다.");

  if (!user) return null;

  return (
    <>
      <section className="FlexCol gap-y-2">
        <Typo size="21" bold>서로에게 힘이 될 수 있도록</Typo>
        <Typo size="21" bold>음성 메세지를 남겨주세요</Typo>
      </section>

      <section className="flex gap-x-[20px] justify-center w-full pt-[30px]">
        <VoiceButton
          question={match.question}
          sex={user.sex}
          target="F"
        />

        <VoiceButton
          question={match.question}
          sex={user.sex}
          target="M"
        />
      </section>
    </>
  );
};

export default VoiceShareInteraction;
