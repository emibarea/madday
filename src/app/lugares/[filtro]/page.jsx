import InfoCard from "@/components/InfoCard";
import comercios from "@/utilities/Comercio";

export default async function LugaresFiltrados({ params }) {
  const { filtro } = params;
  const lugaresFiltrados =
    filtro === "Comercios"
      ? comercios
      : comercios.filter((lugar) => lugar.filtro[filtro] === true);
  return (
    <div className="pt-12">
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">Conoce nuestra red de comercios!</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Busqueda por {filtro}.
          </h1>
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
