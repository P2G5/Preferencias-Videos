import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
// import youtubeApi from "../../apis/youtube.js";
// import App from "../Home/Home";
import axios from "axios";

class homePage extends React.Component {
  constructor() {
    super();
    this.state = {
      comady: [],
      url: "",
      idVideo: "",
    };
  }

  // handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const response = await youtubeApi.get("/search", {
  //     params: {
  //       q: "movies amircan: comday",
  //       // maxResults: 8,
  //     },
  //   });
  //   this.setState({ comady: response.data.items });
  //   // console.log(response.data.items[0].snippet.thumbnails.medium.url);
  // };

  //get comady movies
  comady = (event) => {
    event.preventDefault();
    axios.get("http://127.0.0.1:5001").then((resp) => {
      this.setState({ comady: resp.data.items });
      console.log(this.state.comady[0].snippet.thumbnails.medium);
    });
  };

  render() {
    var renderComady = this.state.comady.map((elem, i) => {
      return (
        <div
          onClick={() => {
            this.setState({ idVideo: this.state.comady[i].id.videoId });
            console.log(this.state.comady[i].id.videoId);
          }} key={i}
        >
          <img src={elem.snippet.thumbnails.medium.url} />
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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <form onLoad={this.comady.bind(this)}>
        <div>
          <button />
          <form >
          <h2> Comady </h2>
          <Slider className= "renderComady" {...settings}>{renderComady}</Slider>
          </form>
         
          <h2> Responsive </h2>
          <Slider {...settings}>
            <div class="aa">
              <img src="https://i.ytimg.com/vi/7PXLPzcIydw/hqdefault.jpg" />
            </div>
            <div>
              <img src="https://i.ytimg.com/vi/7PXLPzcIydw/hqdefault.jpg" />
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
          </Slider>
        </div>
      </form>
    );
  }
}

export default homePage;
