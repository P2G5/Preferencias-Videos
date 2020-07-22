import React from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar.js";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };
  }

  getVideos = () => {
    axios
      .get(`http://localhost:5003/videos/${localStorage.getItem("givenName")}`)
      .then((res) => {
        console.log("done", res.data);
        this.setState({ videos: res.data });
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
    var viewVideos = this.state.videos.map((video) => {
      return (
        <div className=" video-item item">
          <img
            className="ui image"
            src={video.photoUrl}
            alt={video.descriptionVideo}
          />
          <div className="content">
            <div className="title ">{video.descriptionVideo}</div>
            <div className="description ">{video.titleVedio}</div>
          </div>
          <br />
          <div className="date ">{video.date}</div>
          <button
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
      );
    });

    return (
      <div>
        <Navbar />
        <button onClick={this.getVideos}> Show favorite videos</button>
        <div>{viewVideos}</div>
      </div>
    );
  }
}
export default Profile;
