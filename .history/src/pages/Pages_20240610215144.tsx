import Home from "./Home";
import Cuisine from "./Cuisine";

import { Route, Routes, BrowserRouter } from "react-router-dom";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cui" element={<Home />}>
          <Home />
        </Route>
        <Route path="/cuisine:type" element={<Cuisine />}>
          <Cuisine />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
