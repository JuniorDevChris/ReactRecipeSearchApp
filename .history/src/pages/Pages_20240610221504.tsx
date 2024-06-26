import Home from "./Home";
import Cuisine from "./Cuisine";

import { Route, Routes, BrowserRouter } from "react-router-dom";

const Pages = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/cuisine" element={<Home />}></Route>
        <Route path="/cuisine" element={<Cuisine />}></Route>
      </Router>
    </BrowserRouter>
  );
};

export default Pages;
