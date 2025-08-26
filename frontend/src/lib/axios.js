import axios from "axios";

const Base_Url =
  import.meta.env.MODE === "development"
    ? "http://localhost:1997/api"
    : "https://slack-backend-nine.vercel.app/api";

export const axiosInstance = axios.create({
  baseURL: Base_Url,
  withCredentials: true,
});
