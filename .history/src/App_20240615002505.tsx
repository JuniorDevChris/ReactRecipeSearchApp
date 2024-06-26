import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./search/Search";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Search />
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
