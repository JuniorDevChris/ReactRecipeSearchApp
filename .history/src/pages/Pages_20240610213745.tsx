import Home from "./Home";
im

import { Route, Routes } from "react-router";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Home />
      </Route>
    </Routes>
  );
};

export default Pages;
