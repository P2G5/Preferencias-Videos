import React from "react";
import "./video.css";
// import cors from 'cors';

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div id="video-item-search">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />

      <div id="text-search">
        <a href={`/${video.id.videoId}`}>
          <div className="title ">{video.snippet.title}</div>
          <div className="description ">{video.snippet.description}</div>
        </a>
      </div>
      <br></br>
      <button className="btn-search" onClick={() => handleVideoSelect(video)}>
        Add video <h1>{video.id.videoId}</h1>
      </button>
    </div>
  );
};
export default VideoItem;
