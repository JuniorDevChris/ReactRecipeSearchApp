import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";

import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:cuisineType" element={<Cuisine />} />
    
    </Routes>
  );
};

export default Pages;
