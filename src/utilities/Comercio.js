class Comercio {
  constructor(
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
    imagenes
  ) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.deportes = deportes;
    this.ubicacion = ubicacion;
    this.servicios = servicios;
    this.descuento = descuento;
    this.horarios = horarios;
    this.contacto = contacto;
    this.mapa = mapa;
    this.filtro = filtro;
    this.imagenes = imagenes;
  }
}

const pampaCablePark = new Comercio(
  "Pampa Cable Park",
  "Pampa Cable Park, situado en Zárate, es el primer cable circular para la práctica del wakeboard en Argentina. Este parque está a la altura de los mejores del mundo. ¡Descubre el parque de atracciones del wakeboard argentino!",
  ["WakeBoard"],
  "Campana, Provincia de Buenos Aires",
  ["Restobar", "Alojamiento", "Clases de WakeBoard"],
  25,
  "Mie a vie 13:00 a 19:00hs.",
  {},

  (
    <iframe
      style={{ width: "100%", height: "500px" }}
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13215.629144356275!2d-58.9933999!3d-34.0975155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb0cb9a0c9c547%3A0x4ebaf011ad68e692!2sPampa%20cablepark!5e0!3m2!1ses!2sar!4v1689043144840!5m2!1ses!2sar"
    ></iframe>
  ),
  {
    BuenosAires: true, //ubicacion
    Alojamientos: true, //comercio
    Restobares: true,
    Escuelas: true,
    WakeBoard: true, //actividad
  },
  {
    carrusel:
      "https://images.pexels.com/photos/1753689/pexels-photo-1753689.jpeg?auto=compress&cs=tinysrgb&w=1600",
  }
);

const hudsonWakeBoardComplex = new Comercio(
  "Hudson Wakeboard Complex",
  "Hudson Wakeboard Park, el lugar ideal para practicar wakeboard en Berazategui. Con un acceso rápido y sencillo desde Au. La Plata, este parque ofrece un amplio espacio para disfrutar de la naturaleza y los deportes al aire libre. Además, cuenta con áreas destinadas al descanso, comida y estacionamiento gratuito. ¡Ven a vivir la emoción del wakeboard en Hudson Wakeboard Park!",
  ["WakeBoard"],
  "Colectora 6082. (calle 63, Au Dr. Ricardo Balbín y, B1884 Guillermo Enrique Hudson, Provincia de Buenos Aires",
  ["Restaurant", "Clases de WakeBoard", "Alquiler de equipos"],
  25,
  "Martes a Viernes 12.00 a 19.00 Hs. Sáb. Dom. y Feriados 10.00 a 19.00 Hs",
  {
    url: "http://www.hwclub.com.ar/web/",
    tel: "011 3004-4147",
  },

  (
    <iframe
      style={{ width: "100%", height: "500px" }}
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13107.221434912391!2d-58.145729!3d-34.785675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a326553d0b9abb%3A0xbc4e798e5aafab3d!2sHWC%20Hudson%20Wakeboard%20Club!5e0!3m2!1ses-419!2sar!4v1689043669590!5m2!1ses-419!2sar"
    ></iframe>
  ),
  {
    BuenosAires: true, // ubicacion
    Restobares: true, //comercio
    Escuelas: true,
    WakeBoard: true, //actividad
  },
  {
    carrusel:
      "https://cdn.discordapp.com/attachments/1087185625658167420/1136050648610263181/hudson.jpeg",
  }
);

const shareWoodPilar = new Comercio(
  "Sharewood Pilar",
  "Sharewood Pilar es un espacio en zona norte que permite disfrutar de playas de arena y vivir una experiencia diferente sin necesidad de trasladarnos 400 km hasta el Partido de la Costa",
  ["WakeBoard"],
  "J. Darregueira 2010, B1631 Villa Rosa, Provincia de Buenos Aires.",
  ["Restaurant", "Alquiler de equipos"],
  25,
  "Mie a vie 12:00 a 19:00hs. Sáb. Dom. y Feriados 10.00 a 19.00 Hs",
  {
    ig: "https://www.instagram.com/sharewoodpilar",
    tel: "011 2408-4121",
  },
  (
    <iframe
      style={{ width: "100%", height: "500px" }}
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13163.502836551083!2d-58.8673922!3d-34.4299121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9dae96b19089%3A0xabf3edb8e604d4f9!2sSharewood%20Pilar!5e0!3m2!1ses!2sar!4v1689043935176!5m2!1ses!2sar"
    ></iframe>
  ),
  {
    BuenosAires: true, //ubicacion
    Restobares: true, //comercio
    WakeBoard: true, //actividad
  },
  {
    carrusel:
      "https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=1600",
  }
);

const peruBeach = new Comercio(
  "Peru Beach",
  "Peru Beach Argentina es un complejo deportivo creado en 1994 y ubicado en la costa del Río de la Plata en San Isidro. Es un espacio donde las personas pueden disfrutar del deporte y la gastronomía y, al mismo tiempo, estar en contacto con la naturaleza. El club cuenta con escuelas de distintos deportes con profesionales capacitados y equipos de excelente calidad, donde se han formado varios atletas olímpicos. Las personas eligen este lugar hace más de 20 años para pasar sus días frente al río. Te esperamos para formar parte de la gran comunidad de Peru Beach",
  ["KiteSurf", "SkateBoard", "Escuela Nautica", "Palestra", "Escalada"],
  "Sebastián Elcano 794, B1641 Acassuso, Provincia de BuenosAires, Argentina",
  ["Restaurant"],
  25,
  "Martes a Viernes 12.00 a 19.00 Hs. Sáb. Dom. y Feriados 10.00 a 19.00 Hs",
  {
    url: "https://www.instagram.com/perubeach_argentina/",
    tel: "011 6000-6427",
  },
  (
    <iframe
      style={{ width: "100%", height: "500px" }}
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13163.502836551083!2d-58.8673922!3d-34.4299121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9dae96b19089%3A0xabf3edb8e604d4f9!2sSharewood%20Pilar!5e0!3m2!1ses!2sar!4v1689044180928!5m2!1ses!2sar"
    ></iframe>
  ),
  {
    BuenosAires: true, //ubicacion
    Restobares: true,
    Escuelas: true,
    KiteSurf: true, //actividad
    SkateBoard: true,
  },
  {
    carrusel:
      "https://images.pexels.com/photos/414247/pexels-photo-414247.jpeg?auto=compress&cs=tinysrgb&w=1600",
  }
);

const vertical = new Comercio(
  "Vertical",
  "Venta de productos Kitesurf Wakeboard Indumentaria técnica Snowboard y reparacion de equipos Kaitesurf, Wakeboard, Snowboard",
  null,
  "Bs.As. Av. Libertador 14.689, Acassuso. | Cba..  Luis de Tejeda 4.275 |  Bariloche Base Cerro Catedral: Edificios Ski Ranch, Rosario Catedral. | Rosario   Balcarce 863",
  "Venta, alquiler y reparacion de equipos",
  25,
  null,
  {
    ig: "https://www.instagram.com/verticalskisnowboard",
    correo: "buenosaires@verticalskisnowboard.com",
    tel: "+54 11 2281-9432",
  },
  null,
  {
    BuenosAires: true, //ubicacion
    Tiendas: true, //comercio
    KiteSurf: true, // actividad
    WakeBoard: true,
  },
  {
    carrusel:
      "https://images.pexels.com/photos/1620416/pexels-photo-1620416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }
);

const santaTabla = new Comercio(
  "Santa Tabla Shop",
  "Venta de productos Kitesurf Wakeboard Indumentaria técnica y Reparacion equipos Kitesurf, Wakeboard",
  null,
  "Bs.As. Cnel. Bogado 520, B1609 San Isidro, Provincia de Buenos Aires",
  "Venta, alquiler y reparacion de equipos",
  25,
  "10.00 a 18:30",
  {
    url: "https://santatabla.com/shop/",
    tel: "011 2477-3968",
  },
  null,
  {
    BuenosAires: true, //ubicacion
    Tiendas: true, //comercio
    KiteSurf: true, // actividad
    WakeBoard: true,
  },
  {
    carrusel:
      "https://images.pexels.com/photos/14772276/pexels-photo-14772276.jpeg?auto=compress&cs=tinysrgb&w=1600",
  }
);

const vulcanoKite = new Comercio(
  "Vulcano Kite Surf Shop SRL",
  null,
  ["WakeBoard", "SkateBoard", "Sup", "Kayac"],
  "Primera Junta 899, B1642 DZC, Provincia de Buenos Aires",
  ["Clases y Alquiler de equipos"],
  25,
  null,
  {
    tel: "011 4743-6641",
  },
  null,
  {
    BuenosAires: true, //ubicacion
    Escuelas: true, //comercio
    WakeBoard: true, //actividad
    SkateBoard: true,
    Sup: true,
  },
  {
    carrusel:
      "https://images.pexels.com/photos/14772275/pexels-photo-14772275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }
);

const malloys = new Comercio(
  "Malloys Bar",
  null,
  null,
  "Bs.As. Sebastián Elcano 1718, San Isidro.",
  "Gastronomia, Gourmet, Cocteleria, Veggie",
  25,
  null,
  {
    ig: "https://www.instagram.com/malloysbardecosta",
  },
  null,
  {
    BuenosAires: true, //ubicacion
    Restobares: true, //comercio
  },
  {
    carrusel:
      "https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=1600",
  }
);
const comercios = [];
comercios.push(
  pampaCablePark,
  hudsonWakeBoardComplex,
  shareWoodPilar,
  peruBeach,
  vertical,
  vulcanoKite,
  santaTabla,
  malloys
);
export default comercios;

const BuenosAires = "BuenosAires";
const Mendoza = "Mendoza";
const SantaFe = "SantaFe";

const Tiendas = "Tiendas";
const Escuelas = "Escuelas";
const Restobares = "Restobares";
const Alojamientos = "Alojamientos";
const WakeBoard = "WakeBoard";
const KiteSurf = "KiteSurf";
const Sup = "Sup";
const SkateBoard = "SkateBoard";
export const filtros = {
  Ubicacion: [BuenosAires, Mendoza, SantaFe],
  Comercios: [Tiendas, Escuelas, Restobares, Alojamientos],
  Actividades: [WakeBoard, KiteSurf, Sup, SkateBoard],
};
