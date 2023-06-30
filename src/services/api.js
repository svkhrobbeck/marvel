import axios from "axios";
import { API_HASH, API_TIME_STAMP, BASE_API_URL } from "../constants";

axios.defaults.baseURL = BASE_API_URL;
axios.defaults.params = {
  ts: API_TIME_STAMP,
  apikey: import.meta.env.VITE_APP_API_KEY,
  hash: API_HASH,
};

export default axios;
