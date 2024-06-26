import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter, Search } from "react-router-dom";

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
