import Image from "next/image";
import React from "react";
import ArticleSub from "./article-sub";
const ArticleCard = ({
  title,
  description,
  img,
  subtitles,
  conclusion,
  index,
}) => {
  const isGrayBackground = index % 2 === 0; // Determina si el fondo debe ser gris o blanco

  return (
    <section
      className={`w-full ${
        isGrayBackground ? "bg-gray-300" : "bg-white"
      } pt-2 px-4 sm:px-8 lg:px-16 xl:px-32`}
    >
      <div className="max-w-4xl mx-auto py-8 flex justify-center flex-col">
        <div className="text-left">
          <h1 className="text-3xl text-left font-bold text-gray-700 mb-4">
            {title}
          </h1>
        </div>
        {img && (
          <div className="mb-4 m-auto my-4">
            <Image
              src={img}
              alt="imagen"
              width={800}
              height={500}
              className="rounded-lg shadow-lg cover"
            />
          </div>
        )}
        <div className="text-gray-800 text-lg leading-7 mt-8">
          <p>{description}</p>
        </div>
        {subtitles?.map((subtitle) => (
          <ArticleSub
            key={subtitle.title}
            title={subtitle.title}
            description={subtitle.description}
          />
        ))}
        <div className="text-gray-800 text-lg leading-7 mt-8">
          <p>{conclusion}</p>
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
