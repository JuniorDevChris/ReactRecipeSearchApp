import Home from "./pages/Home";
import Category from "./components/Category";
import {Br}

function App() {
  return (
    <BrowserRouter>
    <>
      <Category />
      <Home />
    </>
    </BrowserRouter>
  );
}

export default App;
