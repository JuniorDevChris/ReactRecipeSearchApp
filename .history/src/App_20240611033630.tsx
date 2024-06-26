import Category from "./components/Category";
import Cuisine from "./pages/Cuisine";
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Category />
        <Home />
        <Cuisine />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
