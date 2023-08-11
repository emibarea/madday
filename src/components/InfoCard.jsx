import React from "react";
import Image from "next/image";
import Link from "next/link";

const InfoCard = ({ titulo, ubicacion, descripcion, descuento }) => {
  return (
    <Link
      href={`/comercios/${titulo}`}
      className="bg-gray-100 m-0 sm:mx-8 my-6 flex justify-center items-center flex-col sm:flex-row py-7 px-2 pr-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:scale-[1.01] hover:shadow-xl hover:opacity-105 transition duration-200 ease-out first:border-t"
    >
      <div className="relative h-28 w-44 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src="https://images.pexels.com/photos/1753689/pexels-photo-1753689.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="rounded-2xl"
          layout="fill"
          objectFit="cover"
          alt="lugar image"
        />
      </div>
      <div className="flex flex-col flex-grow pt-5 sm:pt-0 sm:pl-5">
        <h4 className="text-xl text-center sm:text-left">{titulo}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{descripcion}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">{ubicacion}</p>
          <div className="flex gap-2 jutify-center items-center text-lg lg:text-2xl font-semibold">
            <p className="text-green-600">%{descuento}</p>
            <p className="hidden sm:block ">Descuento</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InfoCard;
