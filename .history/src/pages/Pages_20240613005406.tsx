import Home from "./Home";
import Cuisine from "./Cuisine";

import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:cui" element={<Cuisine />} />
    </Routes>
  );
};

export default Pages;
