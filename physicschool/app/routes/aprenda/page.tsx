// app/routes/aprenda/page.tsx

import HeaderReturn from "@/app/components/HeaderReturn";

export default function Aprenda() {
  return (
    <div>
        <HeaderReturn />
      <h3 className="text-lg font-semibold mt-2">Aprendizado</h3>
      <br></br>
      <p>Aqui, encontrarás conteúdos de física para explorar!</p>
      <br></br>
      <br></br>
      <div className="flex flex-wrap gap-8 mt-8">
        <div>
          {/* faria um link aqui na imagem se eu tivesse tempo de criar mais uma pagina :(( */}
          <img
            src="/eletrica.svg"
            alt="Eletrofísica"
            width={200}
            height={200}
          />
          <br></br>
          <br></br>
          <h3 className="text-lg font-semibold mt-2">
            Eletrofísica
          </h3>
          <p>Área da física responsável por estudar os fenômenos elétricos.</p>
        </div>

        <div>
          <img
            src="/mecanica.svg"
            alt="Física Mecânica"
            width={100}
            height={100}
          />
          <h3 className="text-lg font-semibold mt-2">
            Física Mecânica
          </h3>
          <p>Estudo do movimento, repouso e equilíbrio dos corpos materiais, além das forças e energias que atuam sobre eles.</p>
        </div>
      </div>
    </div>
  );
}