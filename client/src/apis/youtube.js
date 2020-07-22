import axios from "axios";
const KEY = "AIzaSyAKmezWYdSMu5BlPbFd6M_NXJu5fA9Sr84"; // mention your youtube API key here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 12,
    key: KEY,
  },
});
