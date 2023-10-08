import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RequireAuth from "./shared/ProtectedRoutes";
import { UserProvider } from "./contexts/UserContext";
const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId="43427827549-ho7ko27upsb2ulbd8t0m5ti7bpm93dra.apps.googleusercontent.com">
        <UserProvider>
          <Routes>
            <Route path="/login" exact element={<LoginPage />} />
            <Route
              path="/about"
              element={
                <RequireAuth>
                  <About />
                </RequireAuth>
              }
            />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Routes>
        </UserProvider>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
