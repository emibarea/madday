import fetchData from "@/app/data";
export default async function perfilLugar({ params }) {
  const { lugar } = params;
  const data = await fetchData();
  const currentLugar = data.find((i) => i.titulo === decodeURIComponent(lugar));
  return (
    <div>
      {currentLugar.titulo}
      <br />
      {currentLugar.descripcion}
      <br />
      {currentLugar.horario}
      <br />
      {currentLugar.descuento}
      <br />
      {currentLugar.direccion}
    </div>
  );
}
