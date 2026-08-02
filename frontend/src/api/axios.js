import axios from "axios";

const api = axios.create({

  baseURL: "https://scadaalarm-filter.onrender.com",

  timeout: 1000000,

});

export default api;