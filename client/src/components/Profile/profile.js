import React from "react";
import axios from "axios";
import "./style.css";
import Navbar from "../Navbar/Navbar.js";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      viewVideos: "",
    };
  }

  getVideos = () => {
    axios
      .get(`http://localhost:5003/videos/${localStorage.getItem("givenName")}`)
      .then((res) => {
        console.log("done", res.data);
        this.setState({ videos: res.data });
        if (this.state.videos.length <= 0) {
          this.setState({ viewVideos: "There Is No Videos To View" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  remove = (id) => {
    axios
      .delete(`http://localhost:5003/api/${id}`)
      .then((res) => {
        console.log("done", res.data);
      })
      .then(() => {
        this.getVideos();
      })

      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.videos.length > 0) {
      var viewVideos = this.state.videos.map((video) => {
        return (
          <div id="video-item">
            <img
              className="ui image"
              src={video.photoUrl}
              alt={video.descriptionVideo}
            />
            <div id="text">
              <h1 className="title">{video.descriptionVideo}</h1>
              <h2 className="description">{video.titleVedio}</h2>
              <br />
              <h2 className="date ">
                {() => {
                  video.date.slice("T");
                }}
              </h2>
              <button
                className="btn12"
                onClick={() => {
                  axios
                    .delete(`http://localhost:5003/api/${video._id}`)
                    .then((res) => {
                      console.log("done", res.data);
                    })
                    .then(() => {
                      this.getVideos();
                    })

                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Remove
              </button>
            </div>
          </div>
        );
      });
    } 
    return (
      <div>
        <Navbar />
        <button onClick={this.getVideos}> Show favorite videos</button>
        <div>{viewVideos}</div>
        <h1>{this.state.viewVideos}</h1>
      </div>
    );
  }
}
export default Profile;
