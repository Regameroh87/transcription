"use client";
import { useRef, useState, useEffect } from "react";
import ButtonPlay from "./buttonPlay";
import Volume from "./volume";
import AudioControl from "./audioControl";
import Transcription from "./transcription";
import Heroe from "./heroe";

export default function Reproductor() {
  const [isPlaying, setIsPlaying] = useState(false);
  const reproductor = useRef<HTMLAudioElement>(null);
  const [speakers, setSpeakers] = useState("")
  console.log(speakers)
 

  useEffect(() => {
    reproductor.current!.src = "/testCall.wav";
  }, []);

  const handleClick = () => {
    if (isPlaying) {
      reproductor.current?.pause();
    } else {
      reproductor.current!.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className=" flex flex-col justify-center items-center gap-4">
      <Heroe speakers={speakers} />
      <ButtonPlay isPlaying={isPlaying} handleClick={handleClick} />
      <div className=" flex justify-start items-center flex-wrap gap-4">
      <AudioControl setIsPlaying={setIsPlaying} reproductor={reproductor} setSpeakers={setSpeakers}  />
      <Volume reproductor={reproductor} />
      </div>
      <Transcription setIsPlaying={setIsPlaying} reproductor={reproductor} />
      <audio ref={reproductor} />
    </div>
  );
}
