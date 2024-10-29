import React, { useState } from 'react';
import '../css/buscador.css';

const Busqueda = ({ onSearch }) => {
  const [palabraBusqueda, setPalabraBusqueda] = useState('');

  const manejarBusqueda = (event) => {
    event.preventDefault();
    onSearch(palabraBusqueda);
  };

  return (
    <form onSubmit={manejarBusqueda}>
      <input 
        type="text" 
        placeholder="Buscar videos..." 
        value={palabraBusqueda} 
        onChange={(e) => setPalabraBusqueda(e.target.value)} 
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default Busqueda;
