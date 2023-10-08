import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { useEffect, useState } from "react";

const RequireAuth = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!(await isAuthenticated())) {
        localStorage.removeItem("refresh");
        localStorage.removeItem("access");
        navigate("/login");
      }
      setLoading(false);
    })();
  }, [navigate]);

  if (loading) return null;

  return children;
};

export default RequireAuth;
