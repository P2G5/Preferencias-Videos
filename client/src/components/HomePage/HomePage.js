import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
// import youtubeApi from "../../apis/youtube.js";
import youtube from "../../apis/youtube.js";
// import App from "../Home/Home";
import axios from "axios";
import { Link } from "react-router-dom";

class homePage extends React.Component {
  constructor() {
    super();
    this.state = {
      Comady: [],
      Action: [],
      Romantic: [],
      Drama: [],
      url: "",
      idVideo: "",
    };
  }

  componentDidMount() {
    // this.getVideo();
  }
  componentWillMount = async () => {
    const response = await youtube.get("/search", {
      params: {
        q: "comedy movies",
        maxResults: 8,
      },
    });
    this.setState({ Comady: response.data.items });
    console.log("heree", response.data.items);

    const res = await youtube.get("/search", {
      params: {
        q: "action movies",
        maxResults: 8,
      },
    });
    this.setState({ Action: res.data.items });
    console.log("heree", res.data.items);

    const res1 = await youtube.get("/search", {
      params: {
        q: "drama movies",
        maxResults: 8,
      },
    });
    this.setState({ Drama: res1.data.items });
    console.log("heree", res1.data.items);

    const res2 = await youtube.get("/search", {
      params: {
        q: "Romantic movies",
        maxResults: 8,
      },
    });
    this.setState({ Romantic: res2.data.items });
    console.log("heree", res2.data.items);
  };

  render() {
    var renderComady = this.state.Comady.map((elem, i) => {
      return (
        <div
          onClick={() => {
            this.setState({ idVideo: this.state.Comady[i].id.videoId });
            console.log(this.state.Comady[i].id.videoId);
          }}
          key={i}
        >
          <Link to={`/${this.state.idVideo}`}>
            <img alt="" src={elem.snippet.thumbnails.medium.url} />
          </Link>
        </div>
      );
    });
    //---------------------------------------------
    // for action movies dislpay in slice
    const renderAction = this.state.Action.map((elem, i) => {
      return (
        <div
          onClick={() => {
            this.setState({ idVideo: this.state.Action[i].id.videoId });
            console.log(this.state.Action[i].id.videoId);
          }}
          key={i}
        >
          <Link to={`/${this.state.idVideo}`}>
            <img alt="" src={elem.snippet.thumbnails.medium.url} />
          </Link>
        </div>
      );
    });
    //--------------------------------------------
    // for Drama movies dislpay in slice
    const renderDrama = this.state.Drama.map((elem, i) => {
      return (
        <div
          onClick={() => {
            this.setState({ idVideo: this.state.Drama[i].id.videoId });
            console.log(this.state.Drama[i].id.videoId);
          }}
          key={i}
        >
          <Link to={`/${this.state.idVideo}`}>
            {/* <img alt="" src={elem.snippet.thumbnails.medium.url} /> */}
          </Link>
        </div>
      );
    });
    //--------------------------------------
    //Romantic movies
    const renderRomantic = this.state.Romantic.map((elem, i) => {
      return (
        <div
          onClick={() => {
            this.setState({ idVideo: this.state.Romantic[i].id.videoId });
            console.log(this.state.Romantic[i].id.videoId);
          }}
          key={i}
        >
          <Link to={`/${this.state.idVideo}`}>
            <img alt="" src={elem.snippet.thumbnails.medium.url} />
          </Link>
        </div>
      );
    });
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
    };

    return (
      <form>
        <h2> Comady </h2>
        <Slider className="renderComady" {...settings}>
          {renderComady}
        </Slider>

        <h2> Action </h2>
        <Slider className="renderComady" {...settings}>
          {renderAction}
        </Slider>

        {/* <h2> Drama </h2>
        <Slider className="renderComady" {...settings}>
          {renderDrama}
        </Slider> */}

        <h2> Romantic </h2>
        <Slider className="renderComady" {...settings}>
          {renderRomantic}
        </Slider>
      </form>
    );
  }
}

export default homePage;
