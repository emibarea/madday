import comercios from "@/utilities/Comercio";
export default async function perfilLugar({ params }) {
  const { lugar } = params;
  console.log("lugar: ", lugar);
  const currentLugar = comercios.find(
    (i) => i.titulo === decodeURIComponent(lugar)
  );
  return (
    <div>
      <p>{lugar}</p>
      {currentLugar?.titulo}
      <br />
      {currentLugar?.descripcion}
      <br />
      {currentLugar?.deportes.map((deporte) => (
        <p>{deporte}</p>
      ))}
      <br />
      {currentLugar?.ubicacion}
      <br />
      {currentLugar?.servicios.map((servicio) => (
        <p>{servicio}</p>
      ))}
      <br />
      {currentLugar?.descuento}%
      <br />
      {currentLugar?.horarios}
      {/* <br />
      {currentLugar.contacto}
      <br />
      {currentLugar.mapa} */}
    </div>
  );
}
