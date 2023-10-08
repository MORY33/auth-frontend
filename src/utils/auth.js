import { getAccessToken } from "../hooks/getAccessToken";
import axios from "axios";

const isAuthenticated = async () => {
  const token = await getAccessToken();
  if (token === null) {
    console.log("nie authenticated");
    return false;
  }
  console.log(token + " ------------------------ inside is Authenticated");
  return true;
};

export { isAuthenticated };

export const handleGoogleLoginSuccess = async (
  codeResponse,
  loginCallback,
  navigateCallback
) => {
  console.log(codeResponse);

  try {
    const tokens = await axios.post("http://localhost:8000/exchange-token/", {
      code: codeResponse.access_token,
    });

    console.log(tokens);
    if (
      tokens.status === 200 &&
      tokens.data.access_token &&
      tokens.data.refresh_token
    ) {
      const { access_token, refresh_token } = tokens.data;

      localStorage.setItem("access", access_token);
      localStorage.setItem("refresh", refresh_token);
      console.log(access_token);

      loginCallback({
        token: access_token,
      });
      navigateCallback("/home");
    } else {
      console.log("handle error");
    }
  } catch (error) {
    console.error("Error exchanging Google token:", error);
  }
};
