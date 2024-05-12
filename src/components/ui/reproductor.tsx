"use client";
import { useRef, useState, useEffect } from "react";
import AudioControl from "./audioControl";
import Transcription from "./transcription";
import Heroe from "./heroe";
import CellPhone from "./cellPhone";

export default function Reproductor() {
  const [isPlaying, setIsPlaying] = useState(false);
  const reproductor = useRef<HTMLAudioElement>(null);
  const [speakers, setSpeakers] = useState("");

  useEffect(() => {
    reproductor.current!.src = "/testCall.wav";
  }, []);

  const handleClick = (value: boolean) => {
    if (!value) {
      reproductor.current?.pause();
      setIsPlaying(false);
    } else {
      reproductor.current!.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center gap-4 w-full h-full">
      <div className=" flex flex-wrap-reverse mb-8 justify-center">
        <CellPhone
          isPlaying={isPlaying}
          handleClick={handleClick}
          reproductor={reproductor}
        />
        <Heroe speakers={speakers} />
      </div>
      <AudioControl
          setIsPlaying={setIsPlaying}
          reproductor={reproductor}
          setSpeakers={setSpeakers}
        />
      <Transcription setIsPlaying={setIsPlaying} reproductor={reproductor} />
      <audio ref={reproductor} />
    </div>
  );
}
