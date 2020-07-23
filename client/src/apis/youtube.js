import axios from "axios";
const KEY = "AIzaSyAz3svYYlpzx-sXElP3twgYvfMMchoirFE"; // mention your youtube API key here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 12,
    key: KEY,
  },
});
