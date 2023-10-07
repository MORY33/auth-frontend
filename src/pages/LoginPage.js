import { Button } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const googleLogin = useGoogleLogin({
    flow: "implicit",

    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      const tokens = await axios.post("http://localhost:8000/exchange-token/", {
        code: codeResponse.access_token,
      });

      console.log(tokens);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <>
      <Button onClick={() => googleLogin()}>Sign in with Google 🚀 </Button>;{" "}
    </>
  );
};

export default LoginPage;
