"use client";
import { useState, useEffect } from "react";
import { transcripcion } from "@/lib/variables";

export default function AudioControl({
  reproductor,
  setIsPlaying,
  setSpeakers,

}: {
  reproductor: React.RefObject<HTMLAudioElement>;
  setIsPlaying: any;
  setSpeakers:any;

}) {
  const [currentTime, setCurrentTime] = useState(0);
  
  const duration = reproductor.current?.duration;

  const formatTime = (time: number) => {
    if (!time) return `0:00`;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    reproductor.current?.addEventListener("timeupdate", handleChangeTime);
    reproductor.current?.addEventListener("ended", handleAudioEnded);
    return () => {
      reproductor.current?.removeEventListener("timeupdate", handleChangeTime);
      reproductor.current?.removeEventListener("ended", handleAudioEnded);
    };
  },[]);

  const handleChangeTime = () => {
    setCurrentTime(reproductor.current!.currentTime);
    console.log(reproductor.current!.currentTime)
    const speakers = transcripcion.find((t)=> Math.floor(reproductor.current!.currentTime) === Math.floor(t.start))
    console.log(speakers)
    if (speakers){
      setSpeakers(speakers.role)
    } 
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className=" flex gap-2">
      <div className=" text-sm">{formatTime(currentTime)}</div>
      <input
        className=" w-72"
        type="range"
        max={reproductor.current?.duration}
        min={0}
        value={currentTime}
        onChange={(event) => {
          reproductor.current!.currentTime = Number(event.target.value);
        }}
      />
      <div className=" text-sm">{formatTime(duration ? duration : 0)}</div>
    </div>
  );
}
