import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.chucknorris.io/jokes",
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
  },
});
