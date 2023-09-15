import { articulos } from "@/assets/data";
import ArticleCard from "./components/article-card";

const ArticulosPage = () => {
  return (
    <main className="mt-24">
      <div className="px-0 s:px-4 md:px-8">
        <p className="text-xs">
          Informacion y curiosidades sobre nuestros deportes!
        </p>
        <h1 className="text-3xl font-semibold mt-2 mb-6">
          Articulos de interes.
        </h1>
      </div>
      <div>
        {articulos.map((articulo, index) => (
          <ArticleCard
            key={index}
            titulo={articulo.titulo}
            descripcion={articulo.descripcion}
            img={articulo.img}
            subtitles={articulo.subtitles}
            conclusion={articulo.conclusion}
            index={index} // Pasa el índice como prop
          />
        ))}
      </div>
    </main>
  );
};

export default ArticulosPage;
