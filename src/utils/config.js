const IS_PRODUCTION = process.env.REACT_APP_DEV_VERSION === "production";
const BASE_URL =
  process.env.REACT_APP_DEV_VERSION === "production"
    ? "/api/"
    : "localhost:8000/";

const AXIOS_TIMEOUT = 5000;
export const config = {
  authorizationEnabled: IS_PRODUCTION,
  baseUrl: BASE_URL,
  axiosTimeout: AXIOS_TIMEOUT,
};
