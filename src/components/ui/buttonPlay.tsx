export default function ButtonPlay({
  isPlaying,
  handleClick,
}: {
  isPlaying: boolean;
  handleClick: (value: boolean) => void;
}) {
  return (
    <div>
      <button
        className={` flex absolute left-[355px] bottom-[8rem] justify-center items-center  text-black rounded-full w-10 h-10 active:scale-95 hover:scale-105 hover:bg-[#3B82F6] hover:text-white transition ease-out ${
          isPlaying ? "-translate-x-[30px] bg-green-400" : " bg-cyan-900 text-white"
        }`}
        onClick={() => {
          handleClick(true);
        }}
      >
        {isPlaying ? (<svg
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
        </svg>) : (
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
        </svg>)}
      </button>
      <button
        className={` ${
          isPlaying ? "flex" : "hidden"
        } absolute left-[385px] bottom-[8rem] justify-center items-center bg-red-400 text-black rounded-full w-10 h-10 active:scale-95 hover:scale-105 hover:bg-[#3B82F6] hover:text-white transition ease-out`}
        onClick={() => {
          handleClick(false);
        }}
      >
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
          <path d="M3 21l18 -18" />
          <path d="M5.831 14.161a15.946 15.946 0 0 1 -2.831 -8.161a2 2 0 0 1 2 -2h4l2 5l-2.5 1.5c.108 .22 .223 .435 .345 .645m1.751 2.277c.843 .84 1.822 1.544 2.904 2.078l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a15.963 15.963 0 0 1 -10.344 -4.657" />
        </svg>
      </button>
    </div>
  );
}
