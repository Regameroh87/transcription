
import ButtonPlay from "./buttonPlay";
import Volume from "./volume";

export default function CellPhone ({isPlaying, reproductor, handleClick} : {isPlaying:boolean; handleClick:(value:boolean)=>void; reproductor:React.RefObject<HTMLAudioElement>}) {
    return (
        <section className=" block relative w-[735px] h-[735px] ">
        <div className=" flex absolute rounded-2xl top-10 left-44 w-96 h-[85%] bg-gradient-to-b from-gray-200  via-orange-200 to-orange-400"></div>
        <img
          className="absolute top-0 left-0 w-full h-full "
          src="/phone.svg"
          alt=""
        />
        <div className=" flex flex-col items-center absolute top-36 left-[17.5rem] text-black">
        <h1 className=" text-3xl font-bold">Universidad</h1>
        <h2 className={`${isPlaying ? "flex" : "hidden "} text-sm`}>Movil +542262573568</h2>
        </div>
        <div
          className={` ${
            isPlaying ? "flex" : "hidden"
          } absolute w-[14rem] h-[9rem] bg-black bg-opacity-40 left-[16rem] bottom-[12rem] rounded-xl`}
        >
          <Volume reproductor={reproductor} />
          <svg
            className=" absolute left-24 top-6 text-gray-400 text-opacity-80"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
            <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
          </svg>
          <svg
            className=" absolute right-6 top-6 text-gray-400 text-opacity-80"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 3l18 18" />
            <path d="M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1 -.13 .874m-2 2a3 3 0 0 1 -3.87 -2.872v-1" />
            <path d="M5 10a7 7 0 0 0 10.846 5.85m2 -2a6.967 6.967 0 0 0 1.152 -3.85" />
            <path d="M8 21l8 0" />
            <path d="M12 17l0 4" />
          </svg>
          <svg
            className=" absolute left-6 bottom-5 text-gray-400 text-opacity-80"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
          <svg
            className=" absolute left-24 bottom-5 text-gray-400 text-opacity-80"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 8l10 8l-5 4l0 -16l5 4l-10 8" />
          </svg>
          <svg
            className=" absolute right-6 bottom-5 text-gray-400 text-opacity-80"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M2 3m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
            <path d="M6 7l0 .01" />
            <path d="M10 7l0 .01" />
            <path d="M14 7l0 .01" />
            <path d="M18 7l0 .01" />
            <path d="M6 11l0 .01" />
            <path d="M18 11l0 .01" />
            <path d="M10 11l4 0" />
            <path d="M10 19l2 2l2 -2" />
          </svg>
        </div>
        <ButtonPlay isPlaying={isPlaying} handleClick={handleClick} />
      </section>
    )    
}