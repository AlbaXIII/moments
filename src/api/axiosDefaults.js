import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-albadev-0e5d6dc78b06.herokuapp.com/';
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;