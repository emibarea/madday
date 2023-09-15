"use client";
import React, { useState } from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
const ArticleSub = ({ titulo, descripcion }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-4 text-gray-700">
      <div
        className="flex items-center cursor-pointer group"
        onClick={toggleDescription}
      >
        {isExpanded ? (
          <BiUpArrow className="text-gray-500 cursor-pointer" />
        ) : (
          <BiDownArrow className="text-gray-500 cursor-pointer" />
        )}
        <h2 className="text-xl font-semibold ml-2 group-hover:underline">
          {titulo}
        </h2>
      </div>
      {isExpanded && <p className="mt-2">{descripcion}</p>}
    </div>
  );
};

export default ArticleSub;
