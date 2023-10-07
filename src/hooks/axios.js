import axios from "axios";
import { config } from "../utils/config";

const authToken = localStorage.getItem("access");

const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  timeout: config.axiosTimeout,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`,
  },
  maxBodyLength: Infinity,
});

export default axiosInstance;
