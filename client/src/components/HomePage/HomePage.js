import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
import youtubeApi from "../../apis/youtube.js";
// import App from "../Home/Home";
import axios from "axios";

class homePage extends React.Component {
  constructor() {
    super();
    this.state = {
      comady: [],
      Action: [],
      Drama: [],
      url: "",
      idVideo: "",
    };
  }

  componentDidMount() {
    this.getVideo();
  }

  handleSubmit = async (event) => {
    // event.preventDefault();
    const response = await youtubeApi.get("/search", {
      params: {
        q: "movies amircan: comday",
        // maxResults: 8,
      },
    });
    this.setState({ comady: response.data.items });
    console.log(response.data.items[0].snippet.thumbnails.medium.url);
  };

  //get comady movies
  getVideo = () => {
    axios
      .get("http://127.0.0.1:5001")
      .then((resp) => {
        this.setState({ comady: resp.data.items });
      })
      // for Action category
      .then(() => {
        axios.get("http://127.0.0.1:5001").then((resp) => {
          this.setState({ Action: resp.data.items });
        });
        // for Drama category
      })
      .then(() => {
        axios.get("http://127.0.0.1:5001").then((resp) => {
          this.setState({ Drama: resp.data.items });
        });
      });
  };

  render() {
    var renderComady = this.state.comady.map((elem, i) => {
      return (
        <div
          onClick={() => {
            this.setState({ idVideo: this.state.comady[i].id.videoId });
            console.log(this.state.comady[i].id.videoId);
          }}
          key={i}
        >
          <img alt="" src={elem.snippet.thumbnails.medium.url} />
        </div>
      );
    });
    //---------------------------------------------
    // for action movies dislpay in slice
    var renderAction = this.state.Action.map((elem, i) => {
      return (
        <div
          onClick={() => {
            this.setState({ idVideo: this.state.Action[i].id.videoId });
            console.log(this.state.Action[i].id.videoId);
          }}
          key={i}
        >
          <img alt="" src={elem.snippet.thumbnails.medium.url} />
        </div>
      );
    });
    //--------------------------------------------
    // for Drama movies dislpay in slice
    var renderDrama = this.state.Drama.map((elem, i) => {
      return (
        <div
          onClick={() => {
            this.setState({ idVideo: this.state.Drama[i].id.videoId });
            console.log(this.state.Drama[i].id.videoId);
          }}
          key={i}
        >
          <img alt="" src={elem.snippet.thumbnails.medium.url} />
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

          <h2> Drama </h2>
          <Slider className="renderComady" {...settings}>
            {renderDrama}
          </Slider>
        </form>
      );
    
  }
}

export default homePage;
