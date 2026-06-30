// app/routes/experimentos/page.tsx

import HeaderReturn from "@/app/components/HeaderReturn";

export default function Experimentos() {
  return (
    <div>
      <HeaderReturn />
       
       <h1 className="text-lg font-semibold mt-2">Experimentos</h1>
       <p>Aqui, poderás encontrar exemplos de experimentos!</p>
      
      <div className="flex flex-wrap gap-6 mt-6">

        <div className="bg-indigo-300 p-4 rounded-lg w-64 shadow-md text-white">
        <img
            src="/vandergraaff.svg"
            alt="Gerador de Van Der Graaff"
          />
          <h3 className="text-lg font-semibold mt-2">
            Gerador de Van Der Graaff
          </h3>
          <button className="mt-3 w-full bg-indigo-600 py-2 rounded font-medium hover:bg-slate-500">
            Explore
          </button>
        </div>

        <div className="bg-indigo-300 p-4 rounded-lg w-64 shadow-md text-white">
        <img
            src="/cubaondas.svg"
            alt="Cuba de Ondas"
          />
          <h3 className="text-lg font-semibold mt-2">
            Cuba de Ondas
          </h3>
          <button className="mt-3 w-full bg-indigo-600 py-2 rounded font-medium hover:bg-slate-500">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
{/* //     <div>
//         <HeaderReturn />
//         <h1>Experimentos</h1>
//         <p>Aqui, poderás encontrar exemplos de experimentos!</p>
//     </div> */}

