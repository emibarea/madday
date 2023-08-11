import Carrusel from "@/components/Carrusel";
import Contacto from "@/app/(estructura)/contacto/Contacto";
import SobreNosotros from "@/app/(estructura)/sobre-nosotros/SobreNosotros";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Carrusel />
      <SobreNosotros />
      <Contacto />
      <Footer />
    </main>
  );
}
