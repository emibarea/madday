import Carrusel from "@/components/Carrusel";
import Contacto from "@/app/contacto/Contacto";
import Patrocinadores from "@/app/sponsors/Patrocinadores";
import SobreNosotros from "@/app/sobre-nosotros/SobreNosotros";
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
