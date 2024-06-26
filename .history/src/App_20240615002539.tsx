import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./compone/Search";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
