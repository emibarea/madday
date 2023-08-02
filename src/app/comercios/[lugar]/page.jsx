import comercios from "@/utilities/Comercio";
export default async function perfilLugar({ params }) {
  const { lugar } = params;
  console.log("lugar: ", lugar);
  const currentLugar = comercios.find(
    (i) => i.titulo === decodeURIComponent(lugar)
  );
  return (
    <div className="pt-24">
      {currentLugar.titulo}
      <br />
      {currentLugar.descripcion}
      <br />
      {currentLugar.deportes.map((deporte, key) => (
        <p key={key}>{deporte}</p>
      ))}
      <br />
      {currentLugar.ubicacion}
      <br />
      {currentLugar.servicios.map((servicio, key) => (
        <p key={key}>{servicio}</p>
      ))}
      <br />
      {currentLugar.descuento}%
      <br />
      {currentLugar.horarios}
      {/* <br />
      {currentLugar.contacto}
      <br />
      {currentLugar.mapa} */}
    </div>
  );
}
