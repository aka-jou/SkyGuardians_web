import React from 'react';
import { Grid } from './components/Grid';
import { 
  Navbar, Hero, QuienesSomos, Servicios, 
  Diferenciadores, Industrias, Proceso, 
  Tecnologias, Contacto, Footer 
} from './components/Sections';

function App() {
  return (
    <div className="relative overflow-x-hidden scroll-smooth">
      {/* Fondo Interactivo */}
      <Grid />

      {/* Contenido principal por encima del canvas */}
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
    </div>
  );
}

export default App;
