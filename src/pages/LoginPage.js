import { Button } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router";
import { handleGoogleLoginSuccess } from "../utils/auth";
import { useUser } from "../contexts/UserContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const googleLogin = useGoogleLogin({
    flow: "implicit",
    onSuccess: async (codeResponse) => {
      handleGoogleLoginSuccess(codeResponse, login, navigate);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <>
      <Button onClick={() => googleLogin()}>Sign in with Google 🚀 </Button>
    </>
  );
};

export default LoginPage;
