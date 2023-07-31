import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageRoutes } from "@/pages/constants";
import  Login  from "@/pages/Login";
import { Register } from "@/pages/Register";
import { Popup } from "@/components/Popup";
import { Widget } from "@/components/Widget";
import { Login2 } from "@/pages/Login2";
import { InstaSidebar } from "../InstaSidebar";
import { GmailNavbar } from "../GmailNavbar";
import { DotPagination } from "../DotPagination";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PageRoutes.register} element={ <Register/> }/>
      <Route path={PageRoutes.login} element={ <Login/> }/>
      <Route path={PageRoutes.popup} element={ <Popup/> }/>
      <Route path={PageRoutes.widget} element={ <Widget/> }/>
      <Route path={PageRoutes.login2} element={ <Login2/> }/>
      <Route path={PageRoutes.instaSidebar} element={ <InstaSidebar/> }/>
      <Route path={PageRoutes.gmailNavbar} element={ <GmailNavbar/> }/>
      <Route path={PageRoutes.dotPagination} element={ <DotPagination/> }/>
    </Routes>
  </BrowserRouter>
);