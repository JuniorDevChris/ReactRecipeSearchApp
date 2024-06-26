import Home from "./Home";
import Cuisine from "./Cuisine";
import Popular from "../components/Popular";

import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      fuck you
      <Route path="/" element={<Cuisine />} />
      <Route path="/cuisine" element={<Cuisine />} />
    </Routes>
  );
};

export default Pages;
