import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";

import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:cuisineType" element={<Cuisine />} />
      <Route path="/search/:searchRecipe" element={<Searched />} />
      <Rout
    </Routes>
  );
};

export default Pages;
