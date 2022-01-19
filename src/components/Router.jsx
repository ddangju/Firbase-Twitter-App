import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "routes/Profile";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Nav from "components/Nav";

const Router = ({ isLogin }) => {
  return (
    <>
      <BrowserRouter>
        {isLogin && <Nav />}
        <Routes>
          {isLogin ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Auth />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
