import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Home,
  Login,
  //   LoginUser,
  //   PageRoutes,
  //   SigninAdmin,
  //   SigninUser,
} from "../../pages";

export const Router = () => {
  return;
  <BrowserRouter>
    <Routes>
      <Route path={Home} element={<Home />} />
      <Route path={Login} element={<Login />} />
    </Routes>
  </BrowserRouter>;
};
