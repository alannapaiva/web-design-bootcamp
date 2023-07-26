import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageRoutes } from "@/pages/constants";
import  Register  from "@/pages/Register";
import  Login  from "@/pages/Login";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PageRoutes.register} element={ <Register/> }/>
      <Route path={PageRoutes.login} element={ <Login/> }/>
    </Routes>
  </BrowserRouter>
);