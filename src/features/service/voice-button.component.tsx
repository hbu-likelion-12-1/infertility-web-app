import React, { useEffect, useState } from 'react';
import Button from "@/shared/ui/button";
import IconUtils from "@/shared/ui/IconUtils";
import { Question } from "@/types/object";
import useAuth from "@/shared/lib/use-auth.hook";
import { Sex } from "@/features/join/ui/phase/join-sex.component";
import { Server } from "@/service/api";
import Typo from "@/shared/ui/typography/typo.component";

interface ButtonProps {
  question: Question;
  sex: Sex;
  target: Sex;
}


const VoiceButton: React.FC<ButtonProps> = ({ question, target }) => {
  const { user } = useAuth();
  const [playUrl, setPlayUrl] = useState<string>();
  const sameTarget = user?.sex === target;

  const url = target === "F" ? question.femaleAudioUrl : question.maleAudioUrl;
  console.log(`url: ${url}`);
  const isMyUploaded = (() => {
    return user?.sex === target && !!question.femaleAudioUrl;
  })();
  const isOppositeUploaded = (() => {
    if (target === "F" && !!question.femaleAudioUrl) return true;
    if (target === "M" && !!question.maleAudioUrl) return true;
    return false;
  })();

  const onClickUploadOrListen = async () => {
    const uploadMode = target === user?.sex;

    if (uploadMode) {
      await upload();
      return;
    }

    listen();
  };

  const fetchAudio = () => {
    if (!url) return;
    return fetch(url).then(res => res.blob());
  };

  const listen = async () => {
    if (!url) return;

    if (!playUrl) {
      new Audio(playUrl).play();
      return;
    }

    const blob = await fetchAudio();
    if (!blob) return;
    const audioUrl = URL.createObjectURL(blob);
    new Audio(audioUrl).play();
  };

  const upload = async () => {
    console.log("upload()");
    const audioChunks: Blob[] = [];

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("음성 녹음이 지원하지 않은 기기입니다.");
      return;
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    console.log({ stream });
    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
      const audioUrl = URL.createObjectURL(audioBlob);
      setPlayUrl(audioUrl);
      await Server.Question.uploadVoice(question.id, audioBlob);
    };
    mediaRecorder.start();
  };

  useEffect(() => {
    if (!url) return;
    fetchAudio()
      ?.then(blob => {
        const audioUrl = URL.createObjectURL(blob);
        setPlayUrl(audioUrl);
      });
  }, []);

  return (
    <nav className="FlexCol flex-1 max-w-[200px] items-center">
      <span className="text-[16px] font-bold pb-2.5">{target === "F" ? "아내" : "남편"}</span>
      <Button
        onMouseUp={onClickUploadOrListen}
        onClick={onClickUploadOrListen}
        theme="secondary"
        className="w-full h-[120px] rounded-[50px] shadow-button"
      >
        {isMyUploaded && <IconUtils.VoiceComplete/>}
        {!playUrl && <IconUtils.VoiceReady/>}
        {playUrl && sameTarget && <IconUtils.VoiceComplete/>}
        {playUrl && !sameTarget && <IconUtils.VoiceReceived/>}
      </Button>

      <Typo size="14" color="primary" className="text-center w-3/4 pt-2.5" bold>메세지를 준비 중입니다.</Typo>
    </nav>
  );
};

export default VoiceButton;
