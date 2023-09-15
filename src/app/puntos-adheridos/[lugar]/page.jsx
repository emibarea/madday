import comercios from "@/utilities/Comercio";
import "./page.css";
import BackArrow from "@/components/BackArrow";
export default function perfilLugar({ params }) {
  const { lugar } = params;
  const {
    titulo,
    descripcion,
    deportes,
    ubicacion,
    servicios,
    descuento,
    horarios,
    contacto,
    mapa,
    filtro,
    imagenes,
  } = comercios.find((i) => i.titulo === decodeURIComponent(lugar));
  return (
    <section className="w-full h-full min-w-screen min-h-screen relative z-10 text-white">
      <div className="back absolute w-full h-full z-0"></div>
      <div className="bg-black/40 absolute w-full h-full z-0"></div>
      <div className="flex flex-col pt-24 sm:px-12 lg:flex-row w-full items-center pt-32 ">
        <div className="rounded-lg lg:max-w-[40%] relative">
          <BackArrow />
          <img
            className="rounded-lg drop-shadow-lg hover:drop-shadow-2xl transition duration-200 ease-out"
            src={imagenes.carrusel}
            alt={titulo}
          />
        </div>
        <div className="px-2 max-w-full pt-12 overflow-x-hidden lg:pt-0 sm:px-12 md:px-20 flex flex-col z-10 lg:max-w-[60%]">
          <ul className="list-disc text-md sm:text-lg">
            <li className="list-none text-4xl underline font-bold">{titulo}</li>
            {descripcion ? <li className="pt-4">{descripcion}</li> : null}
            {ubicacion ? (
              <li className="pt-4">Ubicacion: {ubicacion}</li>
            ) : null}
            {horarios ? <li className="pt-4">Horarios: {horarios}</li> : null}
            {deportes ? <li className="pt-4">Deportes: {deportes}</li> : null}
            {servicios ? (
              <li className="pt-4">Servicios: {servicios}</li>
            ) : null}
            <li className="pt-4 gap-3">
              Contacto: <br />
              {contacto.url ? (
                <a href={contacto?.url} className="underline">
                  Sitio Web
                </a>
              ) : null}
              {contacto.tel ? <p>Tel: {contacto.tel}</p> : null}
              {contacto?.ig}
              {contacto?.correo}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full pt-12  sm:p-12 ">
        <div className="w-full z-10">{mapa}</div>
      </div>
    </section>
  );
}
