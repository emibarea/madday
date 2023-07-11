import InfoCard from "@/components/InfoCard";

const fetchLugares = () => {
  return fetch("https://www.jsonkeeper.com/b/WBO7")
    .then((res) => res.json())
    .catch((error) => {
      console.log("Error al obtener lugares:", error);
      throw error; // Lanzar el error para que se maneje en otro lugar
    });
};

export default async function LugaresFiltrados({ params }) {
  const { filtro } = params;
  const lugares = await fetchLugares();
  console.log(lugares);
  const lugaresFiltrados =
    filtro === "todos"
      ? lugares
      : lugares.filter((lugar) => lugar[filtro] === true);
  return (
    <div>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">lorem ipsu lasjabsubuy</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Filtrar por {filtro}
          </h1>
          {lugaresFiltrados.map(
            ({ titulo, direccion, descripcion, descuento, horarios }) => (
              <InfoCard
                titulo={titulo}
                direccion={direccion}
                descripcion={descripcion}
                descuento={descuento}
                horarios={horarios}
              />
            )
          )}
        </section>
      </main>
    </div>
  );
}
