import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About";
import Home from "./pages/Home";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId="43427827549-ho7ko27upsb2ulbd8t0m5ti7bpm93dra.apps.googleusercontent.com">
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
