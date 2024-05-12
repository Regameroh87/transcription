import { transcripcion } from "@/lib/variables";

export default function Transcription({reproductor, setIsPlaying}:{reproductor:React.RefObject<HTMLAudioElement>; setIsPlaying:any}) {
    return (
      <div className=" flex w-80 md:w-3/4 mx-auto mt-4 ">
        <ul>
          {transcripcion.map((t, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  reproductor.current?.play();
                  setIsPlaying(true);
                  reproductor.current!.currentTime = t.start;
                  const time = t.end - t.start;
                  setTimeout(() => {
                    setIsPlaying(false);
                    reproductor.current?.pause();
                  }, time * 1100);
                }}
                className=" flex w-full h-auto p-4 gap-4 text-sm text-pretty hover:cursor-pointer hover:scale-105 hover:bg-[#3B82F6] hover:text-white active:scale-95 active:bg-slate-800 rounded-lg transition ease-out "
              >
                <div className=" font-bold">{t.role}:</div>
                <div className=" flex w-full">{t.content}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }