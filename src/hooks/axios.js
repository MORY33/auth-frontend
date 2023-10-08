import axios from "axios";
import { config } from "../utils/config";
import { getAccessToken } from "./getAccessToken";

const authToken = getAccessToken();

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
