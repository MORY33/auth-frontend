import React, { useEffect } from "react";
import axiosInstance from "../hooks/axios";
const Dashboard = () => {
  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get(
        "http://localhost:8000/test-auth"
      );
      console.log(response);
    })();
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
