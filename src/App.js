import React, { useState } from 'react';
import './App.css'; 
import Busqueda from '../src/componentes/buscador.js';
import VideoPlayer from '../src/componentes/video.js';
import VideoList from '../src/componentes/videoEncontrado.js';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const manejarBusqueda = (palabraBusqueda) => {
    const mockVideos = [
      {
        videoId: 'video1',
        title: 'Video de Ejemplo 1',
        description: 'Descripción del video 1',
        thumbnail: 'https://via.placeholder.com/120',
      },
      {
        videoId: 'video2',
        title: 'Video de Ejemplo 2',
        description: 'Descripción del video 2',
        thumbnail: 'https://via.placeholder.com/120',
      },
    ];
    setVideos(mockVideos);
    setSelectedVideo(mockVideos[0]);
  };

  return (
    <div className="App">
      <Busqueda onSearch={manejarBusqueda} />
      <div style={{ display: 'flex', gap: '20px' }}>
        <VideoPlayer video={selectedVideo} />
        <VideoList videos={videos} onSelectVideo={setSelectedVideo} />
      </div>
    </div>
  );
};

export default App;
