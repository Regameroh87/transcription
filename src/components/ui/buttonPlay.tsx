export default function ButtonPlay({
  isPlaying,
  handleClick,
}: {
  isPlaying: boolean;
  handleClick: any;
}) {
  return (
    <button
      className=" flex justify-center items-center bg-slate-200 text-black rounded-full w-10 h-10 active:scale-95 hover:scale-105 hover:bg-[#3B82F6] hover:text-white transition ease-out"
      onClick={handleClick}
    >
      {!isPlaying ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          <path d="M15 7a2 2 0 0 1 2 2" />
          <path d="M15 3a6 6 0 0 1 6 6" />
        </svg>
      )}
    </button>
  );
}
