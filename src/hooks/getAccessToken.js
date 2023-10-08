import axios from "axios";

const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refresh");

  if (!refreshToken) {
    return null;
  }

  try {
    const response = await axios.post("http://localhost:8000/refresh-token/", {
      refresh: refreshToken,
    });

    const data = response.data;
    console.log(response);

    if (data.access_token) {
      localStorage.setItem("access", data.access_token);

      if (data.refresh_token) {
        localStorage.setItem("refresh", data.refresh_token);
      }

      return data.access_token;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

const isTokenExpired = (token) => {
  const decodedToken = atob(token.split(".")[1]);
  const exp = JSON.parse(decodedToken).exp;
  return Date.now() >= exp * 1000;
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem("access");

  if (!accessToken || isTokenExpired(accessToken)) {
    const newToken = await refreshAccessToken();

    if (newToken) {
      return newToken;
    } else {
      return null;
    }
  }

  return accessToken;
};
