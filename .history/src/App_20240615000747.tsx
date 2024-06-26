import Category from "./components/Category";
import Pages from "./pages/Pages";
i
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
