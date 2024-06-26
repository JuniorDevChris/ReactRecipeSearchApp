import Home from "./Home";
import { Route, Routes } from "react-router";

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} >
        <Home />
      </div>
    </Routes>
  );
};

export default Pages;
