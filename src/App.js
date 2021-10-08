import React, { useState, useEffect } from 'react';
import Barra from './components/layout/Barra';
import Hero from './components/layout/Hero';
import Destacado from './components/layout/Destacado';
import Horarios from './components/layout/Horarios';
import Ubicacion from './components/layout/Ubicacion';
import Footer from './components/layout/Footer';
import Up from './components/ui/Up';

function App() {

  const [offsetY, setOffsetY] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  const handleScroll = () => {
    setOffsetY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (offsetY > 105) {
      setMostrar(true);
    } else {
      setMostrar(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offsetY])



  return (
    <>
      <Barra />
      <Hero />
      {mostrar && <Up/> }
      <Destacado />
      <Horarios />
      <Ubicacion />
      <Footer />
    </>
  );
}

export default App;
