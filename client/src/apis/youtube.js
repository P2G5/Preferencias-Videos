import axios from "axios";
const KEY = "AIzaSyCgA4LSCwZ_WyK7_-QSlYjeNNao1Y_WaTQ"; // mention your youtube API key here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 12,
    key: KEY,
  },
});
