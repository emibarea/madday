import Carrusel from "@/components/Carrusel";
import SobreNosotros from "@/app/(estructura)/sobre-nosotros/SobreNosotros";
import Footer from "@/components/Footer";
import LugaresFiltrados from "./puntos-adheridos/page";
export default function Home() {
  return (
    <main>
      <Carrusel />
      <LugaresFiltrados />
      <SobreNosotros />
      <Footer />
    </main>
  );
}
