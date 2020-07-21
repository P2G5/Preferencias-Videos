import React from 'react';
import SearchBar from '../Searchbar/Searchbar.js';
import youtube from '../../apis/youtube.js';
import VideoList from '../VideoList/VideoList.js';
import VideoDetail from '../VideoDetail/VideoDetail';
import HomePage from '../HomePage/HomePage.js';
import './app.css';
// import cors from 'cors';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className='uicontainer' style={{marginTop: '1em'}}>
                 <HomePage/>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="col-4">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default App;