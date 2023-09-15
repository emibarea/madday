import Carrusel from "@/components/Carrusel";
import Contacto from "@/app/(estructura)/contacto/Contacto";
import SobreNosotros from "@/app/(estructura)/sobre-nosotros/SobreNosotros";
import Footer from "@/components/Footer";
import LugaresFiltrados from "./comercios/page";
export default function Home() {
  return (
    <main>
      <Carrusel />
      <LugaresFiltrados />
      <SobreNosotros />
      <Contacto />
      <Footer />
    </main>
  );
}
