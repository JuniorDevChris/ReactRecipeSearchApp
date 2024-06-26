import Home from "./Home";
import Cuisine from "./Cuisine";

import { Route, Routes } from "react-router";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Home />
      </Route>
      <Route path='/cuisine' element={<Cuisine />}>
      <Cus
      </Route>
    </Routes>
  );
};

export default Pages;
