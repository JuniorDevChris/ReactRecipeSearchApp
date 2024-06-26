import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";

import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
