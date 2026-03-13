import React from "react";
import Galaxy from "./components/Galaxy";
import {
  Navbar,
  Hero,
  QuienesSomos,
  Servicios,
  Diferenciadores,
  Industrias,
  Proceso,
  Tecnologias,
  Contacto,
  Footer,
} from "./components/Sections";

function App() {
  return (
    // Agregamos min-h-screen y text-white por si acaso
    <div className="relative min-h-screen overflow-x-hidden scroll-smooth text-white">
      
      {/* Fondo Interactivo
        - fixed: Lo saca del flujo normal y lo pega a la pantalla
        - inset-0: Lo estira de borde a borde
        - -z-10: Lo manda detrás de todos tus componentes
        - bg-black: Fondo oscuro base por si la galaxia tarda un milisegundo en cargar
      */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-black">
        <Galaxy 
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      {/* Contenido principal
        - relative z-10: Asegura que todas tus secciones floten POR ENCIMA de la galaxia 
      */}
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <QuienesSomos />
        <Servicios />
        <Diferenciadores />
        <Industrias />
        <Proceso />
        <Tecnologias />
        <Contacto />
        <Footer />
      </main>
      
    </div>
  );
}

export default App;