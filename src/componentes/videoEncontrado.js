import React from 'react';
import video1 from '../videos/video1.mp4'; 
import video2 from '../videos/video2.mp4'; 
import video3 from '../videos/video3.mp4';
import '../css/videoEncontrado.css'; 

const videosData = [
  {
    id: '1',
    title: 'Video 1',
    description: 'video 1',
    video: video1,
  },
  {
    id: '2',
    title: 'Video 2',
    description: 'video 2',
    video: video2,
  },
  {
    id: '3',
    title: 'Video 3',
    description: 'video 3',
    video: video3,
  },
];

const VideoList = ({ onSelectVideo }) => {
  return (
    <div className="video-list">
      {videosData.map((video) => (
        <div 
          key={video.id} 
          onClick={() => onSelectVideo(video)} 
          className="video-item" 
        >
          <h4>{video.title}</h4>
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
