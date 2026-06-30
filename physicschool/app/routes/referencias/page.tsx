// app/routes/referencias/page.tsx

import HeaderReturn from "@/app/components/HeaderReturn";

export default function Referencias() {
  return (
    <div>
      <HeaderReturn />
      <h1 className="text-lg font-semibold mt-2">Referências</h1>
      <p>Aqui, encontrarás referências confiáveis para estudos!</p>
      <br></br>
      <div className="flex flex-wrap gap-10 mt-10">
        <div>
          <img
              src="/livro.svg"
              alt="Artigos"
              width={200}
              height={200}
            />
            <h3 className="text-lg font-semibold mt-2">
              Artigos
            </h3>
            <p>Descubra a importância da leitura acadêmica com revistas, periódicos e artigos!</p>
        </div>
        <div>
          <img
            src="/pessoa.svg"
            alt="Cientista"
            width={200}
            height={200}
          />
          <h3 className="text-lg font-semibold mt-2">
              Pessoas Conceituadas
          </h3>
          <p>Encontre autores importantes para nosso conhecimento atual da física!</p>
        </div>
      </div>
    </div>
  );
}