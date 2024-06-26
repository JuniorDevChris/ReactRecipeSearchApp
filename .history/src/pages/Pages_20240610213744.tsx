import Home from "./Home";


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
