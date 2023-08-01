import { PiMountainsBold } from "react-icons/pi";
import { BiSolidCity, BiBook, BiRestaurant } from "react-icons/bi";
import { FaSnowboarding, FaBed } from "react-icons/fa";
import { MdKitesurfing } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { TbSkateboarding } from "react-icons/tb";
import { GiSurfBoard } from "react-icons/gi";

export const dropdownNavs = [
  {
    label: "Ubicacion",
    navs: [
      {
        title: "Todos Nuestros Lugares",
        desc: "Conoce todos los socios.",
        path: "/lugares/Comercios",
        icon: <PiMountainsBold />,
      },
      {
        title: "Buenos Aires",
        desc: "Principal provincia del pais.",
        path: "/lugares/BuenosAires",
        icon: <BiSolidCity />,
      },
      {
        title: "Mendoza",
        desc: "Ofrece gran cantidad de deportes.",
        path: "/lugares/Mendoza",
        icon: <PiMountainsBold />,
      },
      {
        title: "SantaFe",
        desc: "De las mas lindas y turisticas.",
        path: "/lugares/SantaFe",
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
        path: "/lugares/Tiendas",
        icon: <BsShop />,
      },
      {
        title: "Escuelas",
        desc: "Escuelas de deporte en todo el pais.",
        path: "/lugares/Escuelas",
        icon: <BiBook />,
      },
      {
        title: "Restobares",
        desc: "Deleitate con nuestros bares y restaurantes.",
        path: "/lugares/Restobares",
        icon: <BiRestaurant />,
      },
      {
        title: "Alojamientos",
        desc: "Hospedate con nuestros socios.",
        path: "/lugares/Alojamientos",
        icon: <FaBed />,
      },
    ],
  },
  {
    label: "Actividades",
    navs: [
      {
        title: "Wake Board",
        desc: "Practica Wakeboard con profesionales.",
        path: "/lugares/WakeBoard",
        icon: <FaSnowboarding />,
      },
      {
        title: "Kite Surf",
        desc: "Aprende junto a los mejores.",
        path: "/lugares/KiteSurf",
        icon: <MdKitesurfing />,
      },
      {
        title: "Sup",
        desc: "Animate a conocer el sup.",
        path: "/lugares/Sup",
        icon: <GiSurfBoard />,
      },
      {
        title: "Skate Board",
        desc: "Skateparks de lujo!",
        path: "/lugares/SkateBoard",
        icon: <TbSkateboarding />,
      },
    ],
  },
];
