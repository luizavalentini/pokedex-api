import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "../pages/error";
import Home from "../pages/home";
import Pokedex from "../pages/pokedex";
import Pokeinfo from "../pages/pokeinfo";
import Legendaries from "../pages/legendaries";
import Main from "../pages/main";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokeinfo/:id" element={<Pokeinfo />} />
          <Route path="/legendaries" element={<Legendaries />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
