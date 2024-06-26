import Home from "./Home";
import Cuisine from "./Cuisine";

import { Route, Routes, BrowserRouter } from "react-router-dom";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cuisine" element={<Home />}>
          <Home />
        </Route>
        <Route path="/cuisine" element={<Cuisine />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
