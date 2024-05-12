import Link from "next/link";
export default function SocialNavBar() {
  return (
    <section className=" fixed flex gap-1 top-4 right-48 md:right-4 w-auto h-auto p-4 z-10">
      <Link href={"https://www.linkedin.com/in/rodrigo-gamero-16b943268/"}>
        <svg
          className=" flex hover:-translate-y-1 text-blue-400 hover:text-blue-700 hover:scale-105 transition ease-out active:scale-95 active:text-blue-900"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M8 11l0 5" />
          <path d="M8 8l0 .01" />
          <path d="M12 16l0 -5" />
          <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
      </Link>
      <Link href={"https://github.com/Regameroh87"}>
        <svg
          className=" flex hover:-translate-y-1 text-blue-400 hover:text-blue-700 hover:scale-105 transition ease-out active:scale-95 active:text-blue-900"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
      </Link>
      <a href="rodrigo_gamero_cv" download={"Rodrigo_Gamero.pdf"}>
        <svg
          className=" flex hover:-translate-y-1 text-blue-400 hover:text-blue-700 hover:scale-105 transition ease-out active:scale-95 active:text-blue-900"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
          <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
          <path d="M13 11l1.5 6l1.5 -6" />
        </svg>
      </a>
    </section>
  );
}
