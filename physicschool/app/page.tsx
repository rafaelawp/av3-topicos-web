import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 p-8"> 
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Um site dedicado ao aprendizado da física
          </h1>
          <Image
            src="/pessoa.svg"
            alt="Pessoa"
            width={200}
            height={200}
          />
        </div>
      </main>
    </div>
  );
}