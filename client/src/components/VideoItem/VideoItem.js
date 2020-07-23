import React from "react";
import "./video.css";
import { Link } from "react-router-dom";
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
        <h1>{video.id.videoId}</h1>
        {/* <Link to={`/${video.snippet.id.videoId}`}></Link> */}
        <div className="title ">{video.snippet.title}</div>
        <div className="description ">{video.snippet.description}</div>
      </div>
      <br></br>
      <button className="btn-search" onClick={() => handleVideoSelect(video)}>
        Add video
      </button>
    </div>
  );
};
export default VideoItem;
