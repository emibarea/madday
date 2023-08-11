import InfoCard from "@/components/InfoCard";
import comercios from "@/utilities/Comercio";
import { filtros } from "@/utilities/Comercio";
import Link from "next/link";
export default async function LugaresFiltrados({ params }) {
  const { filtro } = params;
  const lugaresFiltrados =
    filtro === "Comercios"
      ? comercios
      : comercios.filter((lugar) => lugar.filtro[filtro] === true);

  function filtrarOtrosDos(elemento) {
    let categoriaEncontrada;

    for (const categoria in filtros) {
      if (filtros[categoria].includes(elemento)) {
        categoriaEncontrada = categoria;
        break;
      }
    }

    if (!categoriaEncontrada) {
      return null; // El elemento no se encontró en ninguna categoría
    }

    const otrosDosCategorias = Object.keys(filtros).filter(
      (categoria) => categoria !== categoriaEncontrada
    );

    const resultados = {};
    otrosDosCategorias.forEach((categoria) => {
      resultados[categoria] = filtros[categoria];
    });

    return resultados;
  }
  const resultados = filtrarOtrosDos(filtro);
  return (
    <div className="pt-12">
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">Conoce nuestros puntos de beneficio!</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Busqueda por {filtro}.
          </h1>
          <div className="lg:inline-flex mt-2 mb-5 space-x-3 whitespace-nowrap overflow-x-scroll no-scrollbar">
            {resultados.ubicacion?.map((fil) => (
              <Link href={`lugares/${filtro}/${fil}`} className="button">
                {fil}
              </Link>
            ))}
            {resultados.comercios?.map((fil) => (
              <Link href={`lugares/${filtro}/${fil}`} className="button">
                {fil}
              </Link>
            ))}
            {resultados.actividades?.map((fil) => (
              <Link href={`lugares/${filtro}/${fil}`} className="button">
                {fil}
              </Link>
            ))}
          </div>
          {lugaresFiltrados.map(
            ({ titulo, ubicacion, descripcion, descuento, horarios }) => (
              <InfoCard
                key={titulo}
                titulo={titulo}
                ubicacion={ubicacion}
                descripcion={descripcion}
                descuento={descuento}
                horarios={horarios}
                currentFilter={filtro}
              />
            )
          )}
        </section>
      </main>
    </div>
  );
}
