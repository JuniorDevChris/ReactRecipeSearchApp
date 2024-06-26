import Home from "./Home";
import Cuisine from "./Cuisine";

import { Route, Routes, BrowserRouter } from "react-router";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Home />
        </Route>
        <Route path="/cuisine" element={<Cuisine />}>
          <Cuisine />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
