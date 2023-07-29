import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageRoutes } from "@/pages/constants";
import  Login  from "@/pages/Login";
import { Register } from "@/pages/Register";
import { Popup } from "../Popup";
import { Widget } from "../Widget";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PageRoutes.register} element={ <Register/> }/>
      <Route path={PageRoutes.login} element={ <Login/> }/>
      <Route path={PageRoutes.popup} element={ <Popup/> }/>
      <Route path={PageRoutes.widget} element={ <Widget/> }/>
    </Routes>
  </BrowserRouter>
);