import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";

const RequireAuth = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { logout } = useUser();

  useEffect(() => {
    (async () => {
      if (!(await isAuthenticated())) {
        logout();
        navigate("/login");
      }
      setLoading(false);
    })();
  }, [navigate, logout]);

  if (loading) return null;

  return children;
};

export default RequireAuth;
