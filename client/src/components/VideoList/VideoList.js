import React from 'react';
import './videolist.css';
import VideoItem from '../VideoItem/VideoItem';


const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video,index) => {
        return <VideoItem key={index} video={video} handleVideoSelect={handleVideoSelect} />
       
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;