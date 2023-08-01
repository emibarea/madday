import Carrusel from "@/components/Carrusel";
import Contacto from "@/app/(estructura)/contacto/Contacto";
import Patrocinadores from "@/app/(estructura)/sponsors/Patrocinadores";
import SobreNosotros from "@/app/(estructura)/sobre-nosotros/SobreNosotros";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Carrusel />
      <SobreNosotros />
      <Patrocinadores />
      <Contacto />
      <Footer />
    </main>
  );
}
