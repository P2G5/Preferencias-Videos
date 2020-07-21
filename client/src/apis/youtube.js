import axios from "axios";
const KEY = "AIzaSyBCCu-cRVkVa84Hxqu_4nbBY50CyxsoKK0"; // mention your youtube API key here

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 12,
    key: KEY,
  },
});
