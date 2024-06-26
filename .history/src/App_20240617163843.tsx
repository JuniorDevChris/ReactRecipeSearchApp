import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import Header from "./components/Header";

import { BrowserRouter } from "react-router-dom";

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
