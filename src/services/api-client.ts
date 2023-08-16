import axios from "axios";

export default axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    "X-RapidAPI-Key": "e345d1c7d5msh984a3d4db427c18p178189jsn74a6860581af",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
});
