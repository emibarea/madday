"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import InfoCard from "@/components/InfoCard";
import comercios from "@/utilities/Comercio";
import { filtros } from "@/utilities/Comercio";

export default function LugaresFiltrados() {
  const [activeFilters, setActiveFilters] = useState({});
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleFilter = (filtroKey) => {
    setActiveFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[filtroKey]) {
        delete updatedFilters[filtroKey];
      } else {
        updatedFilters[filtroKey] = true;
      }
      return updatedFilters;
    });
  };

  const toggleDropdown = (categoria) => {
    setOpenDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [categoria]: !prevDropdowns[categoria],
    }));
  };

  const lugaresFiltrados = comercios.filter((lugar) => {
    if (Object.keys(activeFilters).length === 0) {
      return true;
    }

    return Object.keys(activeFilters).every((filtroKey) => {
      const filtroValue = activeFilters[filtroKey];
      return lugar.filtro[filtroKey] === filtroValue;
    });
  });

  return (
    <div className="pt-12">
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">Conoce nuestros puntos de beneficio!</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Nuestra Cadena de Comercios.
          </h1>
          <div className="mt-2 mb-5">
            {Object.keys(filtros).map((categoria) => (
              <div key={categoria} className="mb-4">
                <div
                  className={`flex items-center cursor-pointer text-gray-600 hover:text-gray-800 ${
                    openDropdowns[categoria] ? "underline" : ""
                  }`}
                  onClick={() => toggleDropdown(categoria)}
                >
                  <p
                    className={`font-semibold ${
                      openDropdowns[categoria] ? "ml-1" : "ml-0"
                    }`}
                  >
                    {categoria}:
                  </p>
                  {openDropdowns[categoria] ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
                {openDropdowns[categoria] && (
                  <div className="space-y-3 space-x-0 sm:space-y-0 sm:space-x-3 sm:inline-flex  mt-2 whitespace-nowrap ">
                    {filtros[categoria].map((fil) => (
                      <p
                        key={fil}
                        className={`${
                          activeFilters[fil]
                            ? "bg-[--tawny] text-white"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        } p-5 rounded-full text-sm font-semibold cursor-pointer`}
                        onClick={() => toggleFilter(fil)}
                      >
                        {fil}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <br />
          <span className="mb-2">
            Filtros de busqueda:{" "}
            {Object.keys(activeFilters).map((filtroKey) => (
              <button
                key={filtroKey}
                className=" bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded-full text-sm font-semibold ml-2"
                onClick={() => toggleFilter(filtroKey)}
              >
                {filtroKey}
              </button>
            ))}
            <p className="mt-2 flex gap-1">
              <p className="font-bold">{lugaresFiltrados.length}</p> comercios
              encontrados.
            </p>
          </span>
          {lugaresFiltrados.map(
            ({ titulo, ubicacion, descripcion, descuento }) => (
              <InfoCard
                key={titulo}
                titulo={titulo}
                ubicacion={ubicacion}
                descripcion={descripcion}
                descuento={descuento}
              />
            )
          )}
        </section>
      </main>
    </div>
  );
}
