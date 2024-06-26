import Category from "./components/Category";
import Pages from "./pages/Pages";
import S
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
