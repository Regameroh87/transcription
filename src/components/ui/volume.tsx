import { useState } from "react";

export default function Volume({
  reproductor,
}: {
  reproductor: React.RefObject<HTMLAudioElement>;
}) {
  const [volume, setVolume] = useState(100);
  const [previousVol, setPreviousVol] = useState(100);
  const [showVol, setShowVol] = useState(false);

  return (
    <section
      className=" flex flex-col p-2 absolute left-5 top-5 w-auto h-auto justify-center -rotate-90"
      onMouseEnter={() => {
        setShowVol(true);
      }}
      onMouseLeave={() => {
        setShowVol(false);
      }}
    >
      {volume > 0 ? (
        <div
          className=" flex rotate-90 w-auto h-auto"
          onClick={() => {
            reproductor.current!.volume = 0;
            setVolume(0);
            setShowVol(false)
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 8a5 5 0 0 1 0 8" />
            <path d="M17.7 5a9 9 0 0 1 0 14" />
            <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
          </svg>
        </div>
      ) : (
        <div
          className=" flex rotate-90 w-auto h-auto"
          onClick={() => {
            reproductor.current!.volume = previousVol / 100;
            setVolume(previousVol);
            setShowVol(false)
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 8a5 5 0 0 1 1.912 4.934m-1.377 2.602a5 5 0 0 1 -.535 .464" />
            <path d="M17.7 5a9 9 0 0 1 2.362 11.086m-1.676 2.299a9 9 0 0 1 -.686 .615" />
            <path d="M9.069 5.054l.431 -.554a.8 .8 0 0 1 1.5 .5v2m0 4v8a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l1.294 -1.664" />
            <path d="M3 3l18 18" />
          </svg>
        </div>
      )}
      {showVol && (
        <div className=" flex absolute -right-16">
          <input
            type="range"
            style={{ width: "70px", backgroundColor: "#000" }}
            defaultValue={volume}
            max={100}
            min={0}
            onChange={(event) => {
              const newVolume = Number(event.target.value);
              reproductor.current!.volume = newVolume / 100;
              setVolume(newVolume);
              setPreviousVol(newVolume);
            }}
          />
        </div>
      )}
    </section>
  );
}
