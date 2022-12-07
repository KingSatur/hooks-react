import React from "react";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { UserProvider } from "./context/UserProvider";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main app</h1>
      <hr />

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        {/* <Route path="/*" element={<LoginPage />}></Route> */}
        <Route path="/*" element={<Navigate to="/about" />}></Route>
      </Routes>
    </UserProvider>
  );
};
