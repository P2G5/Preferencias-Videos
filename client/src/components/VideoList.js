import React from 'react';
import '../style/videolist.css';
import VideoItem from './VideoItem';
// import cors from 'cors';

const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video,index) => {
        return <VideoItem key={index} video={video} handleVideoSelect={handleVideoSelect} />
       
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;