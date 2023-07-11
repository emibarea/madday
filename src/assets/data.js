import { PiMountainsBold } from "react-icons/pi";
import { BiSolidCity, BiBook, BiRestaurant } from "react-icons/bi";
import { FaSnowboarding, FaBed } from "react-icons/fa";
import { MdKitesurfing } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { TbSkateboarding } from "react-icons/tb";
import { GiSurfBoard } from "react-icons/gi";
export const data = [
  {
    titulo: "Pampa Cable Park",
    descripcion:
      "Pampa Cable Park, situado en Zárate, es el primer cable circular para la práctica del wakeboard en Argentina. Este parque está a la altura de los mejores del mundo. ¡Descubre el parque de atracciones del wakeboard argentino!",
    bsas: true,
    wake: true,
    restobares: true,
    alojamientos: true,
    pet: true,
    descuento: 25,
    direccion: "Campana, Provincia de Buenos Aires",
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13215.629144356275!2d-58.9933999!3d-34.0975155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb0cb9a0c9c547%3A0x4ebaf011ad68e692!2sPampa%20cablepark!5e0!3m2!1ses!2sar!4v1689043144840!5m2!1ses!2sar"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    horarios: "Mie a vie 13:00 a 19:00hs.",
    actividades: "Clases de Wakeboard",
    eventos: "insertar calendario",
    servicios: "Cablepark Full Size",
    alquiler: "Alquiler de equipos basicos y avanzados",
    restaurant: "Veggie, Fast Food, Gourmet, Parrilla",
    dormitorio: "Cabañas 4-8 personas.",
    contacto: "social media y tel",
  },
  {
    wake: true,
    pet: true,
    bsas: true,
    titulo: "Hudson Wakeboard Complex",
    descripcion:
      "Hudson Wakeboard Park, el lugar ideal para practicar wakeboard en Berazategui. Con un acceso rápido y sencillo desde Au. La Plata, este parque ofrece un amplio espacio para disfrutar de la naturaleza y los deportes al aire libre. Además, cuenta con áreas destinadas al descanso, comida y estacionamiento gratuito. ¡Ven a vivir la emoción del wakeboard en Hudson Wakeboard Park!",
    descuento: 25,
    direccion:
      "Colectora 6082. (calle 63, Au Dr. Ricardo Balbín y, B1884 Guillermo Enrique Hudson, Provincia de Buenos Aires",
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13107.221434912391!2d-58.145729!3d-34.785675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a326553d0b9abb%3A0xbc4e798e5aafab3d!2sHWC%20Hudson%20Wakeboard%20Club!5e0!3m2!1ses-419!2sar!4v1689043669590!5m2!1ses-419!2sar"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    horarios:
      "Martes a Viernes 12.00 a 19.00 Hs. Sáb. Dom. y Feriados 10.00 a 19.00 Hs",
    actividades: "Deportivas Wakeboard Clases",
    eventos: "insertar calendario",
    servicios: "Cablepark Line system",
    alquiler: "Alquiler de equipos basicos y avanzados",
    restaurant: "Veggie, Fast Food, Gourmet, Parrilla",
    contacto: {
      url: "http://www.hwclub.com.ar/web/",
      tel: "011 3004-4147",
    },
  },
  {
    titulo: "Sharewood Pilar",
    descripcion:
      "Sharewood Pilar es un espacio en zona norte que permite disfrutar de playas de arena y vivir una experiencia diferente sin necesidad de trasladarnos 400 km hasta el Partido de la Costa",
    wake: true,
    pet: true,
    bsas: true,
    descuento: 25,
    direccion:
      "J. Darregueira 2010, B1631 Villa Rosa, Provincia de Buenos Aires.",
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13163.502836551083!2d-58.8673922!3d-34.4299121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9dae96b19089%3A0xabf3edb8e604d4f9!2sSharewood%20Pilar!5e0!3m2!1ses!2sar!4v1689043935176!5m2!1ses!2sar"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    horarios:
      "Mie a vie 12:00 a 19:00hs. Sáb. Dom. y Feriados 10.00 a 19.00 Hs",
    actividades: "Deportivas Wakeboard Clases",
    eventos: "insertar calendario",
    servicios: "Cablepark Line System",
    alquiler: "Alquiler de equipos basicos y avanzados",
    restaurant: "Veggie, Fast Food, Gourmet, Parrilla",
    contacto: {
      ig: "https://www.instagram.com/sharewoodpilar",
      tel: "011 2408-4121",
    },
  },
  {
    titulo: "Peru Beach",
    descripcion:
      "Peru Beach Argentina es un complejo deportivo creado en 1994 y ubicado en la costa del Río de la Plata en San Isidro. Es un espacio donde las personas pueden disfrutar del deporte y la gastronomía y, al mismo tiempo, estar en contacto con la naturaleza. El club cuenta con escuelas de distintos deportes con profesionales capacitados y equipos de excelente calidad, donde se han formado varios atletas olímpicos. Las personas eligen este lugar hace más de 20 años para pasar sus días frente al río. Te esperamos para formar parte de la gran comunidad de Peru Beach",
    kite: true,
    skate: true,
    pet: true,
    bsas: true,
    descuento: 25,
    direccion:
      "Sebastián Elcano 794, B1641 Acassuso, Provincia de BuenosAires, Argentina",
    mapa: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13163.502836551083!2d-58.8673922!3d-34.4299121!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9dae96b19089%3A0xabf3edb8e604d4f9!2sSharewood%20Pilar!5e0!3m2!1ses!2sar!4v1689044180928!5m2!1ses!2sar"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    horarios:
      "Martes a Viernes 12.00 a 19.00 Hs. Sáb. Dom. y Feriados 10.00 a 19.00 Hs",
    actividades: "Kitesurf, Escuela Nautica, Palestra, Escalada, Skatepark",
    eventos: "insertar calendario",
    restaurant: "Veggie, Fast Food, Gourmet",
    contacto: {
      url: "https://www.instagram.com/perubeach_argentina/",
      tel: "011 6000-6427",
    },
  },
  {
    titulo: "Vertical",
    descuento: 25,
    direccion:
      "Bs.As. Av. Libertador 14.689, Acassuso. | Cba..	Luis de Tejeda 4.275 | 	Bariloche	Base Cerro Catedral: Edificios Ski Ranch, Rosario Catedral. | Rosario		Balcarce 863",
    bsas: true,
    tiendas: true,
    servicios:
      "Venta de productos Kitesurf Wakeboard Indumentaria técnica Snowboard y reparacion de equipos Kaitesurf, Wakeboard, Snowboard",

    alquiler: "Equipos Snowboard",
    contacto: {
      ig: "https://www.instagram.com/verticalskisnowboard",
      correo: "buenosaires@verticalskisnowboard.com",
      tel: "+54 11 2281-9432",
    },
  },
  {
    titulo: "Santa Tabla Shop",
    descuento: 25,
    direccion:
      "Bs.As. Cnel. Bogado 520, B1609 San Isidro, Provincia de Buenos Aires",
    tiendas: true,
    bsas: true,
    horarios: "10.00 a 18:30",
    servicios:
      "Venta de productos Kitesurf Wakeboard Indumentaria técnica y Reparacion equipos Kitesurf, Wakeboard",
    contacto: {
      url: "https://santatabla.com/shop/",
      tel: "011 2477-3968",
    },
  },
  {
    titulo: "Vulcano Kite Surf Shop SRL",
    escuelas: true,
    bsas: true,
    kite: true,
    skate: true,
    wake: true,
    sup: true,
    descuento: 25,
    direccion: "Primera Junta 899, B1642 DZC, Provincia de Buenos Aires",
    actividades: "Clases Kaitesurf, Wakeboard, Skate, Sup, Kayac",
    eventos: "insertar calendario",
    alquiler: "Equipos kitesurf, Kayac, Sup",
    contacto: {
      tel: "011 4743-6641",
    },
  },
  {
    titulo: "Malloys Bar",
    restobares: true,
    bsas: true,
    descuento: 25,
    direccion: "Bs.As. Sebastián Elcano 1718, San Isidro.",
    servicios: "Gastronomia, Gourmet, Cocteleria, Veggie",
    eventos: "inst calendario",
    contacto: {
      ig: "https://www.instagram.com/malloysbardecosta",
    },
    pet: true,
  },
];

export const dropdownNavs = [
  {
    label: "Ubicacion",
    navs: [
      {
        title: "Todos Nuestros Lugares",
        desc: "Conoce todos los socios.",
        path: "/lugares/todos",
        icon: <PiMountainsBold />,
      },
      {
        title: "Buenos Aires",
        desc: "Principal provincia del pais.",
        path: "/lugares/bsas",
        icon: <BiSolidCity />,
      },
      {
        title: "Mendoza",
        desc: "Ofrece gran cantidad de deportes.",
        path: "/lugares/mdz",
        icon: <PiMountainsBold />,
      },
      {
        title: "SantaFe",
        desc: "De las mas lindas y turisticas.",
        path: "/lugares/mdz",
        icon: <PiMountainsBold />,
      },
    ],
  },

  {
    label: "Comercios",
    navs: [
      {
        title: "Tiendas",
        desc: "Conoce todas las tiendas.",
        path: "/lugares/tiendas",
        icon: <BsShop />,
      },
      {
        title: "Escuelas",
        desc: "Escuelas de deporte en todo el pais.",
        path: "/lugares/escuelas",
        icon: <BiBook />,
      },
      {
        title: "Restobares",
        desc: "Deleitate con nuestros bares y restaurantes.",
        path: "/lugares/restobares",
        icon: <BiRestaurant />,
      },
      {
        title: "Alojamiento",
        desc: "Hospedate con nuestros socios.",
        path: "/lugares/alojamientos",
        icon: <FaBed />,
      },
    ],
  },
  {
    label: "Actividades",
    navs: [
      {
        title: "Wakeboard",
        desc: "Practica Wakeboard con profesionales.",
        path: "/lugares/wake",
        icon: <FaSnowboarding />,
      },
      {
        title: "Kitesurf",
        desc: "Aprende junto a los mejores.",
        path: "/lugares/kite",
        icon: <MdKitesurfing />,
      },
      {
        title: "Sup",
        desc: "Animate a conocer el sup.",
        path: "/lugares/sup",
        icon: <GiSurfBoard />,
      },
      {
        title: "Skate",
        desc: "Skateparks de lujo!",
        path: "/lugares/skate",
        icon: <TbSkateboarding />,
      },
    ],
  },
];
