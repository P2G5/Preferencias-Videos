import React from 'react';
import './video.css';
// import cors from 'cors';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
            <div className='title '>{video.snippet.title}</div>
                <div className='description '>{video.snippet.description}</div>
            </div>
            <br>
            </br>
           
        </div>
    )
};
export default VideoItem;