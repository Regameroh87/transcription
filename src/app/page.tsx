
import Reproductor from "@/components/ui/reproductor";
import Title from "@/components/ui/title";

export default function Home() {

  return (
    <main className="flex min-h-screen w-screen flex-col justify-center items-center">
      <div className=" my-28">
      <Title/>
      </div>
      <Reproductor/>
    </main>
  );
}
