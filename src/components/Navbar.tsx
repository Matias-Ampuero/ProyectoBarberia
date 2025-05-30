import React from 'react';

const Navbar = () => {
  return (
    <nav>
      {/* Contenido de la barra de navegación */}
      <h1>Barbería XYZ</h1>
      {/* Enlaces de navegación */}
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#gallery">Galería</a></li>
        <li><a href="#contact">Contacto</a></li>
        {/* Agrega más enlaces según sea necesario */}
      </ul>
    </nav>
  );
};

export default Navbar; 