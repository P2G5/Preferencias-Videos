import axios from "axios";
// const KEY = "AIzaSyBCCu-cRVkVa84Hxqu_4nbBY50CyxsoKK0"; // mention your youtube API key here
// const KEY = "AIzaSyCgA4LSCwZ_WyK7_-QSlYjeNNao1Y_WaTQ";
// const KEY = "AIzaSyC8PPJCISSi-JSfg0Ku36nELQlYYxSHh_I";
const KEY = "AIzaSyDN7EoqydCCDd-MMYNJz_SpLD3hlti4_HM";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 12,
    key: KEY,
  },
});
