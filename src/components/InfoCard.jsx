import React from "react";
import Image from "next/image";
const InfoCard = ({ titulo, direccion, descripcion, descuento, horarios }) => {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src="" className="rounded-2xl" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between ">
          <p>{direccion}</p>
        </div>
        <h4 className="text-xl">{titulo}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{descripcion}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">{horarios}</p>
          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">Descuento</p>
            <p className="text-right font-extralight">%{descuento}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
