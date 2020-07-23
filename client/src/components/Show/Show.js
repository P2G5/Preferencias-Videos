import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./Show.css";
import NavBar from "../Navbar/Navbar";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import youtube from "../../apis/youtube";

function Show(props) {
  const [comedy, setComedy] = useState([]);
  const [idVideo, setIdVideo] = useState("");
  const {
    match: {
      params: { videoId },
    },
  } = props;
  console.log(videoId, "props");

  useEffect(async () => {
    const response = await youtube.get("/search", {
      params: {
        q: "comedy movies",
        // maxResults: 8,
      },
    });
    console.log("hellooo", response.data.items);
    setComedy(response.data.items);
    // this.setState({ Comady: response.data.items });
    // console.log("heree", response.data.items);
  }, []);

  const render = () => {
    comedy.map((elem, i) => {
      return (
        // <div
        //   onClick={() => {
        //     setIdVideo(comedy[i].id.videoId);
        //     // this.setState({ idVideo: this.state.Comady[i].id.videoId });
        //     // console.log(this.state.Comady[i].id.videoId);
        //   }}
        //   key={i}
        // >
        <Link to={`/${idVideo}`}>
          <img alt="" src={elem.snippet.thumbnails.medium.url} />
        </Link>
        // </div>
      );
    });
  };

  return (
    <div>
      <NavBar />
      <div className="you">
        <YouTube videoId={videoId} />
      </div>
      <div> {render} </div>
    </div>
  );
}
export default Show;
