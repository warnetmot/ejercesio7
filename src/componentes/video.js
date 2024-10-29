import React from 'react';
import '../css/video.css'
import localVideo from '../videos/video1.mp4';


const VideoPlayer = ({ video }) => {
  if (!video) return <div>Selecciona un video para reproducir</div>;

  return (
    <div className="video-player">
      <h3>{video.title}</h3>
      <video
        src={localVideo} 
        controls 
        className="video" 
      />
      <p>{video.description}</p>
    </div>
  );
};

export default VideoPlayer;
